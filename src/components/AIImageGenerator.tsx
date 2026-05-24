import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wand2, Download, Loader2, ImageIcon, RefreshCw, Paperclip, X, ZoomIn, Eye, Trash2, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type StyleOption = "hyper-realistic" | "cartoon" | "cinematic" | "paint";
type AspectRatio = "1:1" | "9:16" | "16:9" | "4:5" | "3:4" | "2:3";

interface GeneratedImage {
  variation: number;
  imageUrl: string;
  description: string;
  id?: string;
}

const ACCESS_PASSWORD = "ronnie";

const styleOptions: { id: StyleOption; label: string; icon: string; description: string }[] = [
  { id: "hyper-realistic", label: "Hyper Realistic", icon: "🎨", description: "Ultra-detailed photorealistic portraits" },
  { id: "cartoon", label: "Cartoon Portrait", icon: "✨", description: "Vibrant Pixar-style character art" },
  { id: "cinematic", label: "Cinematic", icon: "🎬", description: "Dramatic movie poster quality" },
  { id: "paint", label: "Oil Painting", icon: "🖌️", description: "Classical oil painting masterpiece" },
];

const aspectRatios: { id: AspectRatio; label: string; description: string; width: number; height: number }[] = [
  { id: "1:1", label: "1:1", description: "Square", width: 40, height: 40 },
  { id: "4:5", label: "4:5", description: "Portrait", width: 32, height: 40 },
  { id: "3:4", label: "3:4", description: "Photo", width: 30, height: 40 },
  { id: "2:3", label: "2:3", description: "Tall", width: 26, height: 40 },
  { id: "9:16", label: "9:16", description: "Story", width: 22, height: 40 },
  { id: "16:9", label: "16:9", description: "Landscape", width: 40, height: 22 },
];

const variationOptions = [1, 2, 3, 4];

const examplePrompts = [
  "A young woman with flowing red hair, green eyes, freckles, natural lighting",
  "A wise old wizard with a long silver beard, mystical blue eyes, ornate robes",
  "A cyberpunk warrior with neon tattoos, futuristic armor, urban backdrop",
  "A fantasy elf princess with pointed ears, golden crown, enchanted forest",
];

const AIImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<StyleOption>("hyper-realistic");
  const [selectedRatio, setSelectedRatio] = useState<AspectRatio>("1:1");
  const [selectedVariations, setSelectedVariations] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [previewImage, setPreviewImage] = useState<GeneratedImage | null>(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [savedImages, setSavedImages] = useState<GeneratedImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Check localStorage for password
  useEffect(() => {
    if (localStorage.getItem("ai-lab-unlocked") === "true") {
      setIsUnlocked(true);
    }
  }, []);

  // Load saved images from DB
  useEffect(() => {
    if (isUnlocked) loadSavedImages();
  }, [isUnlocked]);

  const loadSavedImages = async () => {
    try {
      const { data } = await supabase
        .from("generated_images" as any)
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50);
      if (data) {
        setSavedImages((data as any[]).map((img: any) => ({
          variation: img.variation_number,
          imageUrl: img.image_url,
          description: img.prompt || "",
          id: img.id,
        })));
      }
    } catch (e) {
      console.error("Failed to load saved images:", e);
    }
  };

  const handleUnlock = () => {
    if (password === ACCESS_PASSWORD) {
      setIsUnlocked(true);
      localStorage.setItem("ai-lab-unlocked", "true");
      setPasswordError(false);
      toast({ title: "Access Granted! 🔓", description: "Welcome to the AI Image Generator" });
    } else {
      setPasswordError(true);
      toast({ title: "Access Denied", description: "Incorrect password", variant: "destructive" });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast({ title: "Invalid file type", description: "Please upload an image file", variant: "destructive" });
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast({ title: "File too large", description: "Please upload under 10MB", variant: "destructive" });
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      setUploadedFileName(file.name);
      toast({ title: "Image Uploaded! 📷", description: "Describe how to transform it" });
    };
    reader.readAsDataURL(file);
  };

  const clearUploadedImage = () => {
    setUploadedImage(null);
    setUploadedFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const saveImageToDB = async (image: GeneratedImage) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from("generated_images" as any).insert({
        user_id: user.id,
        prompt: prompt.trim() || null,
        style: selectedStyle,
        aspect_ratio: selectedRatio,
        image_url: image.imageUrl,
        variation_number: image.variation,
      } as any).select().single();
      if (data) {
        return (data as any).id;
      }
    } catch (e) {
      console.error("Failed to save image:", e);
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim() && !uploadedImage) {
      toast({ title: "Enter a prompt or upload an image", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    setGeneratedImages([]);

    try {
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: {
          prompt: prompt.trim(),
          style: selectedStyle,
          aspectRatio: selectedRatio,
          sourceImage: uploadedImage || null,
          variations: selectedVariations,
        }
      });

      if (error) throw new Error(error.message || 'Failed to generate images');
      if (data?.error) throw new Error(data.error);

      if (data?.images) {
        // Save each image to DB and attach ID
        const imagesWithIds = await Promise.all(
          data.images.map(async (img: GeneratedImage) => {
            const id = await saveImageToDB(img);
            return { ...img, id };
          })
        );
        setGeneratedImages(imagesWithIds);
        loadSavedImages();
        toast({
          title: uploadedImage ? "Image Transformed! 🎨" : "Images Generated! 🎨",
          description: `${imagesWithIds.length} unique variation${imagesWithIds.length > 1 ? 's' : ''} ready`,
        });
      }
    } catch (error) {
      console.error('Generation error:', error);
      toast({ title: "Generation Failed", description: error instanceof Error ? error.message : "Please try again", variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEnhance = async (imageUrl: string, variation: number) => {
    setIsEnhancing(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: { prompt: "Enhance", style: selectedStyle, sourceImage: imageUrl, enhance: true }
      });
      if (error) throw new Error(error.message);
      if (data?.error) throw new Error(data.error);
      if (data?.images?.[0]) {
        setGeneratedImages(prev => prev.map(img =>
          img.variation === variation ? { ...img, imageUrl: data.images[0].imageUrl } : img
        ));
        toast({ title: "Image Enhanced! ✨" });
      }
    } catch (error) {
      toast({ title: "Enhancement Failed", description: error instanceof Error ? error.message : "Please try again", variant: "destructive" });
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleDownload = (imageUrl: string, variation: number) => {
    try {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `ai-generated-${selectedStyle}-${selectedRatio.replace(':', 'x')}-v${variation}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      toast({ title: "Download Failed", variant: "destructive" });
    }
  };

  const handleDelete = async (image: GeneratedImage) => {
    if (image.id) {
      try {
        await supabase.from("generated_images" as any).delete().eq("id", image.id);
      } catch (e) {
        console.error("Failed to delete from DB:", e);
      }
    }
    setGeneratedImages(prev => prev.filter(i => i.variation !== image.variation));
    setSavedImages(prev => prev.filter(i => i.id !== image.id));
    toast({ title: "Image Deleted 🗑️" });
  };

  const openPreview = (image: GeneratedImage, allImages: GeneratedImage[]) => {
    setPreviewImage(image);
    setPreviewIndex(allImages.findIndex(i => i.imageUrl === image.imageUrl));
  };

  const navigatePreview = (direction: 1 | -1, allImages: GeneratedImage[]) => {
    const newIndex = (previewIndex + direction + allImages.length) % allImages.length;
    setPreviewIndex(newIndex);
    setPreviewImage(allImages[newIndex]);
  };

  const getAspectClass = () => {
    switch (selectedRatio) {
      case "1:1": return "aspect-square";
      case "4:5": return "aspect-[4/5]";
      case "3:4": return "aspect-[3/4]";
      case "2:3": return "aspect-[2/3]";
      case "9:16": return "aspect-[9/16]";
      case "16:9": return "aspect-video";
      default: return "aspect-square";
    }
  };

  const isVertical = ["4:5", "3:4", "2:3", "9:16"].includes(selectedRatio);

  // Password Gate
  if (!isUnlocked) {
    return (
      <div className="glass-card p-8 md:p-12 rounded-2xl max-w-md mx-auto text-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-2">AI Image Generator</h3>
          <p className="text-muted-foreground mb-6">Enter the access password to launch the generator</p>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setPasswordError(false); }}
              onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
              className={`text-center text-lg ${passwordError ? "border-destructive" : ""}`}
            />
            {passwordError && (
              <p className="text-sm text-destructive">Incorrect password. Please try again.</p>
            )}
            <Button variant="hero" size="lg" className="w-full" onClick={handleUnlock}>
              <Sparkles className="w-5 h-5 mr-2" />
              Launch Generator
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  const allDisplayImages = [...generatedImages, ...savedImages.filter(s => !generatedImages.some(g => g.id === s.id))];

  return (
    <div className="glass-card p-6 md:p-8 rounded-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Wand2 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold">AI Portrait Generator</h3>
          <p className="text-sm text-muted-foreground">Create or transform images with AI</p>
        </div>
      </div>

      {/* Style Selection */}
      <div className="mb-6">
        <label className="text-sm font-medium mb-3 block">Choose Style</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {styleOptions.map((style) => (
            <button key={style.id} onClick={() => setSelectedStyle(style.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                selectedStyle === style.id
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50 hover:bg-secondary/50"
              }`}>
              <span className="text-2xl mb-2 block">{style.icon}</span>
              <span className="font-medium text-sm block">{style.label}</span>
              <span className="text-xs text-muted-foreground line-clamp-2">{style.description}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Aspect Ratio Selection */}
      <div className="mb-6">
        <label className="text-sm font-medium mb-3 block">Aspect Ratio</label>
        <div className="flex flex-wrap gap-3">
          {aspectRatios.map((ratio) => (
            <button key={ratio.id} onClick={() => setSelectedRatio(ratio.id)}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                selectedRatio === ratio.id
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50 hover:bg-secondary/50"
              }`}>
              <div className="flex items-center justify-center w-8 h-8">
                <div className={`rounded-sm border-2 transition-colors duration-300 ${
                  selectedRatio === ratio.id ? "border-primary bg-primary/20" : "border-muted-foreground/40 group-hover:border-primary/50"
                }`} style={{ width: `${ratio.width * 0.5}px`, height: `${ratio.height * 0.5}px` }} />
              </div>
              <div className="text-left">
                <span className="font-semibold text-sm block">{ratio.label}</span>
                <span className="text-[10px] text-muted-foreground">{ratio.description}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Variation Count */}
      <div className="mb-6">
        <label className="text-sm font-medium mb-3 block">Number of Variations</label>
        <div className="flex gap-3">
          {variationOptions.map((num) => (
            <button key={num} onClick={() => setSelectedVariations(num)}
              className={`w-14 h-14 rounded-xl border-2 font-bold text-lg transition-all duration-300 ${
                selectedVariations === num
                  ? "border-primary bg-primary/10 text-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50 hover:bg-secondary/50 text-muted-foreground"
              }`}>
              {num}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-1">Each variation uses unique creative direction for different results</p>
      </div>

      {/* Prompt Input */}
      <div className="mb-4">
        <label className="text-sm font-medium mb-2 block">
          {uploadedImage ? "Describe Your Transformation" : "Describe Your Portrait"}
        </label>
        <div className="relative">
          <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)}
            placeholder={uploadedImage 
              ? "Transform into an anime character, add dramatic lighting..."
              : "A young warrior with braided hair, piercing blue eyes, battle scars..."
            }
            className="min-h-[120px] resize-none bg-background/50 border-border focus:border-primary pr-12 pb-12" />
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
          <button onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-secondary/80 hover:bg-primary/20 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-200 group"
            title="Attach image">
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
              <button key={idx} onClick={() => setPrompt(example)}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors truncate max-w-[200px]">
                {example.slice(0, 40)}...
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Generate Button */}
      <Button variant="hero" size="lg" className="w-full mb-8" onClick={handleGenerate}
        disabled={isGenerating || (!prompt.trim() && !uploadedImage)}>
        {isGenerating ? (
          <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Generating {selectedVariations} Variation{selectedVariations > 1 ? 's' : ''}...</>
        ) : (
          <><Sparkles className="w-5 h-5 mr-2" />{uploadedImage ? "Transform Image" : `Generate ${selectedVariations} Variation${selectedVariations > 1 ? 's' : ''}`}</>
        )}
      </Button>

      {/* Loading State */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="mb-8">
            <div className={`grid ${isVertical ? "grid-cols-2" : "grid-cols-1 md:grid-cols-2"} gap-4`}>
              {Array.from({ length: selectedVariations }).map((_, i) => (
                <div key={i} className={`${getAspectClass()} rounded-xl bg-secondary/50 border border-border animate-pulse flex items-center justify-center`}>
                  <div className="text-center">
                    <Loader2 className="w-8 h-8 text-primary/50 animate-spin mx-auto mb-2" />
                    <span className="text-xs text-muted-foreground">Creating V{i + 1}...</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Generated Images */}
      <AnimatePresence>
        {generatedImages.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <h4 className="font-heading font-semibold flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-primary" />
                Your Variations
              </h4>
              <Button variant="ghost" size="sm" onClick={handleGenerate} disabled={isGenerating}>
                <RefreshCw className="w-4 h-4 mr-1" />Regenerate
              </Button>
            </div>
            <div className={`grid ${generatedImages.length === 1 ? "grid-cols-1 max-w-md mx-auto" : isVertical ? "grid-cols-2" : "grid-cols-1 md:grid-cols-2"} gap-4`}>
              {generatedImages.map((image) => (
                <ImageCard key={image.variation} image={image} aspectClass={getAspectClass()} isEnhancing={isEnhancing}
                  onPreview={() => openPreview(image, generatedImages)}
                  onEnhance={() => handleEnhance(image.imageUrl, image.variation)}
                  onDownload={() => handleDownload(image.imageUrl, image.variation)}
                  onDelete={() => handleDelete(image)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Saved Images History */}
      {savedImages.length > 0 && generatedImages.length === 0 && (
        <div className="space-y-4">
          <h4 className="font-heading font-semibold flex items-center gap-2 text-muted-foreground">
            <ImageIcon className="w-4 h-4" />
            Previous Generations
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {savedImages.map((image) => (
              <ImageCard key={image.id} image={image} aspectClass="aspect-square" isEnhancing={false}
                onPreview={() => openPreview(image, savedImages)}
                onDownload={() => handleDownload(image.imageUrl, image.variation)}
                onDelete={() => handleDelete(image)} compact />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!isGenerating && generatedImages.length === 0 && savedImages.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed border-border rounded-xl">
          <ImageIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Your generated images will appear here</p>
        </div>
      )}

      {/* Lightbox Preview */}
      <AnimatePresence>
        {previewImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/90 flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}>
            <button onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/10 hover:bg-white/20 flex items-center justify-center z-10">
              <X className="w-6 h-6 text-black" />
            </button>

            {/* Nav arrows */}
            {allDisplayImages.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); navigatePreview(-1, allDisplayImages); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/10 hover:bg-white/20 flex items-center justify-center z-10">
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); navigatePreview(1, allDisplayImages); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/10 hover:bg-white/20 flex items-center justify-center z-10">
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              </>
            )}

            <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              src={previewImage.imageUrl} alt="Preview"
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()} />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              <Button variant="hero" size="sm" onClick={(e) => { e.stopPropagation(); handleDownload(previewImage.imageUrl, previewImage.variation); }}>
                <Download className="w-4 h-4 mr-1" />Download
              </Button>
              <Button variant="destructive" size="sm" onClick={(e) => { e.stopPropagation(); handleDelete(previewImage); setPreviewImage(null); }}>
                <Trash2 className="w-4 h-4 mr-1" />Delete
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Image Card Component
const ImageCard = ({ image, aspectClass, isEnhancing, onPreview, onEnhance, onDownload, onDelete, compact }: {
  image: GeneratedImage; aspectClass: string; isEnhancing: boolean;
  onPreview: () => void; onEnhance?: () => void; onDownload: () => void; onDelete: () => void; compact?: boolean;
}) => (
  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: image.variation * 0.1 }} className="relative group">
    <div className={`${compact ? "aspect-square" : aspectClass} rounded-xl overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors`}>
      <img src={image.imageUrl} alt={`Variation ${image.variation}`} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-3 gap-2">
        <div className="flex gap-1.5 flex-wrap justify-center">
          <Button variant="glass" size="sm" onClick={onPreview} className="h-8">
            <Eye className="w-4 h-4 mr-1" />Preview
          </Button>
          {onEnhance && !compact && (
            <Button variant="hero" size="sm" onClick={onEnhance} disabled={isEnhancing} className="h-8">
              {isEnhancing ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ZoomIn className="w-4 h-4 mr-1" />Enhance</>}
            </Button>
          )}
          <Button variant="glass" size="sm" onClick={onDownload} className="h-8">
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="destructive" size="sm" onClick={onDelete} className="h-8">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
    {!compact && (
      <div className="mt-2 text-center">
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">Variation {image.variation}</span>
      </div>
    )}
  </motion.div>
);

export default AIImageGenerator;
