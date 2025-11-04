'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-[520px] mx-auto lg:mx-0">
      <div 
        className="relative bg-[url('/images/slider.png')] bg-no-repeat bg-[length:100%_100%] w-full h-0" 
        style={{ paddingBottom: '55.71%' }}
      >
        <div className="absolute inset-0 top-[4.3%] left-[4.4%] right-[4.4%] bottom-[10.7%]">
          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              sizes="(max-width: 520px) 100vw, 520px"
              style={{ objectFit: 'cover' }}
              className={`transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

