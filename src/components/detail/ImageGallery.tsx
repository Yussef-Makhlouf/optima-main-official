import React, { useState } from 'react';

export interface GalleryImage {
    url: string;
    title: string;
    description?: string;
}

interface ImageGalleryProps {
    images: GalleryImage[];
    title?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title = "Project Gallery" }) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const closeModal = () => setSelectedImage(null);

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + images.length) % images.length);
        }
    };

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return;

            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    if (images.length === 0) return null;

    return (
        <section className="py-24 md:py-40 bg-slate-50 dark:bg-surface/20 transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-[10px] md:text-xs font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4 flex items-center">
                        <span className="w-8 h-[1px] bg-primary mr-4" /> VISUAL_SHOWCASE
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                        {title}
                    </h3>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className="group relative aspect-video bg-slate-200 dark:bg-surface/40 overflow-hidden cursor-pointer border border-slate-300 dark:border-white/10 transition-all hover:border-primary"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">{image.title}</h4>
                                    {image.description && (
                                        <p className="text-white/70 text-xs mt-1">{image.description}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-6 text-white/70 hover:text-white transition-colors"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-6 text-white/70 hover:text-white transition-colors"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image */}
                    <div onClick={(e) => e.stopPropagation()} className="max-w-6xl w-full">
                        <img
                            src={images[selectedImage].url}
                            alt={images[selectedImage].title}
                            className="w-full h-auto max-h-[85vh] object-contain"
                        />
                        <div className="mt-6 text-center">
                            <h3 className="text-white font-bold text-xl uppercase tracking-wide">
                                {images[selectedImage].title}
                            </h3>
                            {images[selectedImage].description && (
                                <p className="text-white/70 mt-2">{images[selectedImage].description}</p>
                            )}
                            <p className="text-white/40 text-sm mt-4 font-mono">
                                {selectedImage + 1} / {images.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ImageGallery;
