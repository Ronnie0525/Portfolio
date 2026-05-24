import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, Wand2, Download, Loader2, Paperclip, X, Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type StyleOption = "realistic" | "cinematic" | "animation" | "slow-motion";

interface GeneratedVideo {
  videoUrl: string;
  thumbnail?: string;
}

const styleOptions: { id: StyleOption; label: string; icon: string; description: string }[] = [
  { id: "realistic", label: "Realistic", icon: "🎥", description: "Hyper-realistic video output" },
  { id: "cinematic", label: "Cinematic", icon: "🎬", description: "Hollywood movie quality" },
  { id: "animation", label: "Animation", icon: "✨", description: "Animated style video" },
  { id: "slow-motion", label: "Slow Motion", icon: "⏱️", description: "Dramatic slow-mo effect" },
];

const examplePrompts = [
  "Ocean waves crashing on a tropical beach at sunset",
  "A majestic lion walking through the savanna",
  "Timelapse of city traffic at night with light trails",
  "A butterfly emerging from its cocoon in macro detail",
];

const AIVideoGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<StyleOption>("realistic");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<GeneratedVideo | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");
  const [estimatedTime, setEstimatedTime] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>("Starting generation...");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({ title: "Invalid file type", description: "Please upload an image file (JPG, PNG, WEBP)", variant: "destructive" });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({ title: "File too large", description: "Please upload an image under 10MB", variant: "destructive" });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      setUploadedFileName(file.name);
      toast({ title: "Image Uploaded! 📷", description: "This image will be animated into a video" });
    };
    reader.readAsDataURL(file);
  };

  const clearUploadedImage = () => {
    setUploadedImage(null);
    setUploadedFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const pollForResult = useCallback(async (predictionId: string): Promise<string> => {
    const maxAttempts = 60; // 5 minutes (poll every 5 seconds)
    let attempts = 0;

    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      attempts++;

      setStatusMessage(`Processing video... (${attempts * 5}s elapsed)`);

      try {
        const { data, error } = await supabase.functions.invoke('generate-video?action=poll', {
          body: { predictionId }
        });

        if (error) {
          console.error('Poll error:', error);
          continue; // retry on network errors
        }

        if (data?.status === 'succeeded' && data?.videoUrl) {
          return data.videoUrl;
        }

        if (data?.status === 'failed') {
          throw new Error(data.error || 'Video generation failed');
        }

        // still processing, continue polling
      } catch (err) {
        if (err instanceof Error && err.message.includes('failed')) {
          throw err;
        }
        console.error('Poll attempt error:', err);
        // continue polling on transient errors
      }
    }

    throw new Error('Video generation timed out after 5 minutes. Please try a simpler prompt.');
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim() && !uploadedImage) {
      toast({ title: "Enter a prompt or upload an image", description: "Please describe the video you want to create or upload an image to animate", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    setGeneratedVideo(null);
    setEstimatedTime(uploadedImage ? 120 : 180);
    setStatusMessage("Starting generation...");

    const timer = setInterval(() => {
      setEstimatedTime(prev => Math.max(0, prev - 1));
    }, 1000);

    try {
      // Step 1: Start the generation (returns immediately with predictionId)
      const { data, error } = await supabase.functions.invoke('generate-video', {
        body: { prompt: prompt.trim(), style: selectedStyle, sourceImage: uploadedImage || null }
      });

      if (error) throw new Error(error.message || 'Failed to start video generation');
      if (data?.error) throw new Error(data.error);

      // If already succeeded (rare)
      if (data?.status === 'succeeded' && data?.videoUrl) {
        clearInterval(timer);
        setGeneratedVideo({ videoUrl: data.videoUrl, thumbnail: uploadedImage || undefined });
        toast({ title: "Video Generated! 🎬", description: "Your AI video is ready to play" });
        setIsGenerating(false);
        setEstimatedTime(0);
        return;
      }

      if (!data?.predictionId) {
        throw new Error('No prediction ID returned');
      }

      setStatusMessage("Video is being processed by AI...");

      // Step 2: Poll for result
      const videoUrl = await pollForResult(data.predictionId);

      clearInterval(timer);
      setGeneratedVideo({ videoUrl, thumbnail: uploadedImage || undefined });
      toast({ title: "Video Generated! 🎬", description: "Your AI video is ready to play" });
    } catch (error) {
      clearInterval(timer);
      console.error('Generation error:', error);
      toast({ title: "Generation Failed", description: error instanceof Error ? error.message : "Please try again", variant: "destructive" });
    } finally {
      setIsGenerating(false);
      setEstimatedTime(0);
      setStatusMessage("");
    }
  };

  const handleDownload = async (videoUrl: string) => {
    try {
      const link = document.createElement('a');
      link.href = videoUrl;
      link.download = `ai-video-${selectedStyle}-${Date.now()}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({ title: "Download Started", description: "Your video is downloading" });
    } catch {
      toast({ title: "Download Failed", description: "Please try right-clicking and saving the video", variant: "destructive" });
    }
  };

  return (
    <div className="glass-card p-6 md:p-8 rounded-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Video className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold">AI Video Generator</h3>
          <p className="text-sm text-muted-foreground">Create realistic videos from text or images</p>
        </div>
      </div>

      {/* Style Selection */}
      <div className="mb-6">
        <label className="text-sm font-medium mb-3 block">Choose Style</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {styleOptions.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                selectedStyle === style.id
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50 hover:bg-secondary/50"
              }`}
            >
              <span className="text-2xl mb-2 block">{style.icon}</span>
              <span className="font-medium text-sm block">{style.label}</span>
              <span className="text-xs text-muted-foreground line-clamp-2">{style.description}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Prompt Input */}
      <div className="mb-4">
        <label className="text-sm font-medium mb-2 block">
          {uploadedImage ? "Describe the Motion" : "Describe Your Video"}
        </label>
        <div className="relative">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={uploadedImage
              ? "Camera slowly zooms in, the subject blinks and smiles, gentle wind blowing..."
              : "A serene mountain landscape with clouds rolling through valleys, golden hour lighting..."
            }
            className="min-h-[120px] resize-none bg-background/50 border-border focus:border-primary pr-12 pb-12"
          />
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-secondary/80 hover:bg-primary/20 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-200 group"
            title="Attach starting frame image"
          >
            <Paperclip className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>

        {uploadedImage && (
          <div className="mt-2 flex items-center gap-3 p-2 rounded-lg bg-primary/5 border border-primary/20">
            <img src={uploadedImage} alt="Attached" className="w-10 h-10 rounded-md object-cover" />
            <span className="text-xs text-muted-foreground truncate flex-1">{uploadedFileName}</span>
            <button onClick={clearUploadedImage} className="w-6 h-6 rounded-full bg-destructive/10 hover:bg-destructive/20 flex items-center justify-center">
              <X className="w-3 h-3 text-destructive" />
            </button>
          </div>
        )}
      </div>

      {/* Example Prompts */}
      {!uploadedImage && (
        <div className="mb-6">
          <label className="text-xs text-muted-foreground mb-2 block">Try an example:</label>
          <div className="flex flex-wrap gap-2">
            {examplePrompts.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setPrompt(example)}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors truncate max-w-[200px]"
              >
                {example.slice(0, 35)}...
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Generate Button */}
      <Button
        variant="hero"
        size="lg"
        className="w-full mb-8"
        onClick={handleGenerate}
        disabled={isGenerating || (!prompt.trim() && !uploadedImage)}
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Generating Video...
          </>
        ) : (
          <>
            <Wand2 className="w-5 h-5 mr-2" />
            {uploadedImage ? "Animate Image" : "Generate Video"}
          </>
        )}
      </Button>

      {/* Loading State */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8"
          >
            <div className="aspect-video rounded-xl bg-secondary/50 border border-border flex flex-col items-center justify-center">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="text-sm font-medium text-foreground">{statusMessage}</p>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-xs">~{estimatedTime}s remaining</span>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center max-w-sm">
                Video generation takes 2-5 minutes. Please be patient for the best quality results.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Generated Video */}
      <AnimatePresence>
        {generatedVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-heading font-semibold flex items-center gap-2">
                <Play className="w-4 h-4 text-primary" />
                Your Generated Video
              </h4>
            </div>
            <div className="relative group">
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors bg-white">
                <video src={generatedVideo.videoUrl} controls autoPlay loop className="w-full h-full object-contain" poster={generatedVideo.thumbnail} />
              </div>
              <div className="mt-4 flex justify-center gap-3">
                <Button variant="hero" onClick={() => handleDownload(generatedVideo.videoUrl)}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Video
                </Button>
                <Button variant="outline" onClick={handleGenerate} disabled={isGenerating}>
                  <Wand2 className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {!isGenerating && !generatedVideo && (
        <div className="text-center py-8 border-2 border-dashed border-border rounded-xl">
          <Video className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Your generated video will appear here</p>
        </div>
      )}
    </div>
  );
};

export default AIVideoGenerator;
