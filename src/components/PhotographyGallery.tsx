import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Users, Utensils, Wine, Sparkles, Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { photos, photoCategories, type PhotoCategory, type Photo } from "@/data/photographyData";

const iconMap: Record<string, React.ReactNode> = {
  Camera: <Camera className="w-4 h-4" />,
  Heart: <Heart className="w-4 h-4" />,
  Users: <Users className="w-4 h-4" />,
  Utensils: <Utensils className="w-4 h-4" />,
  Wine: <Wine className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
};

const PhotographyGallery = () => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const filteredPhotos = useMemo(() => 
    activeCategory === "all" ? photos : photos.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  // Group photos by category for "all" view (sorted, not mixed)
  const groupedCategories = useMemo(() => {
    if (activeCategory !== "all") return null;
    const order: PhotoCategory[] = ["wedding", "family", "food", "beverages", "product"];
    return order.map(cat => ({
      info: photoCategories.find(c => c.id === cat)!,
      photos: photos.filter(p => p.category === cat),
    }));
  }, [activeCategory]);

  const openLightbox = (photo: Photo, globalIndex: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(globalIndex);
  };

  const closeLightbox = () => setSelectedPhoto(null);

  const goToPrevious = () => {
    const newIndex = selectedIndex === 0 ? filteredPhotos.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const goToNext = () => {
    const newIndex = selectedIndex === filteredPhotos.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const getCategoryCount = (categoryId: PhotoCategory) => {
    if (categoryId === "all") return photos.length;
    return photos.filter(p => p.category === categoryId).length;
  };

  const renderPhotoGrid = (photoList: Photo[], startIndex: number = 0) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {photoList.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.03 }}
          className="group relative cursor-pointer"
          onClick={() => openLightbox(photo, startIndex + index)}
        >
          <div className="relative overflow-hidden rounded-xl border border-border/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.15)]">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-heading font-semibold text-foreground truncate">{photo.title}</p>
                <p className="text-xs text-muted-foreground truncate mt-0.5">{photo.alt}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="space-y-10">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <span className="text-primary font-heading text-sm uppercase tracking-[0.2em]">Professional Photography</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-3">
          Visual <span className="text-gradient">Storytelling</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Capturing moments that matter with artistic precision and professional quality
        </p>
      </motion.div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {photoCategories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-heading font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-card/60 text-muted-foreground border border-border/50 hover:border-primary/40 hover:text-foreground hover:bg-card"
            }`}
          >
            <span className={activeCategory === category.id ? "text-primary-foreground" : "text-muted-foreground"}>
              {iconMap[category.iconName]}
            </span>
            <span>{category.label}</span>
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              activeCategory === category.id 
                ? "bg-primary-foreground/20 text-primary-foreground" 
                : "bg-muted text-muted-foreground"
            }`}>
              {getCategoryCount(category.id)}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Gallery Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activeCategory === "all" && groupedCategories ? (
            // Sorted sections view - photos grouped by category, NOT mixed
            <div className="space-y-16">
              {groupedCategories.map((group) => {
                const startIndex = photos.indexOf(group.photos[0]);
                return (
                  <div key={group.info.id}>
                    {/* Section divider */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        {iconMap[group.info.iconName]}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-foreground">{group.info.label}</h3>
                        <p className="text-xs text-muted-foreground">{group.info.description} • {group.photos.length} photos</p>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
                    </div>
                    {renderPhotoGrid(group.photos, startIndex)}
                  </div>
                );
              })}
            </div>
          ) : (
            // Single category view
            renderPhotoGrid(filteredPhotos)
          )}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors z-10">
              <X className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goToPrevious(); }} className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goToNext(); }} className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors z-10">
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={selectedPhoto.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-[90vw] max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl shadow-primary/20"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent rounded-b-lg">
                <h3 className="font-heading font-semibold text-lg text-foreground">{selectedPhoto.title}</h3>
                <p className="text-sm text-muted-foreground max-w-md mt-1">{selectedPhoto.alt}</p>
                <p className="text-xs text-primary/70 mt-2">{selectedIndex + 1} of {filteredPhotos.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotographyGallery;
