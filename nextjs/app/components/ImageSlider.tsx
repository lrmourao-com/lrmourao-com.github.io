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
    <div className="float-right relative bg-[url('/images/slider.png')] bg-no-repeat mt-20 mb-[13px] w-[420px] h-[234px]">
      <div className="absolute top-[18px] left-[18.5px] w-[383px] h-[198px] bg-white">
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Slide ${index + 1}`}
            width={383}
            height={198}
            className={`absolute top-0 left-0 w-[383px] h-[198px] transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}

