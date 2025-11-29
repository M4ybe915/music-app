import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MusicCardProps {
  title?: string;
  artist?: string;
  releaseDate?: string;
  link?: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
  title = 'Canción de prueba',
  artist = 'Artista desconocido',
  releaseDate = '2023-01-01',
  link = 'https://open.spotify.com/',
}) => {
  // Imágenes locales que proporcionaste
  const images = [
    '/images/images.jpg',
    '/images/principal-barak.jpg',
    '/images/billy.jpg',
  ];

  // Seleccionamos aleatoriamente una imagen
  const imageUrl = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="bg-secondary-dark rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-700">
      <div className="relative w-full h-48 sm:h-56 lg:h-64">
        <Image
          src={imageUrl}
          alt={`Portada de ${title} por ${artist}`}
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-accent-purple mb-1 truncate">{title}</h3>
        <p className="text-text-gray text-sm mb-2 truncate">{artist}</p>
        <p className="text-gray-400 text-xs">Lanzamiento: {releaseDate}</p>
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-pink text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors duration-300"
          >
            Escuchar Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
