import React from 'react';
import image1 from './image/image6.jpg';
import image2 from './image/image7.jpg';
import image3 from './image/image9.jpg';

const HGallery = () => {
  const gallery = [
    {
      image: image1,
      height: 'h-64', // Customize height for each image
      width: 'w-full', // Customize width for each image
    },
    {
      image: image2,
      height: 'h-96', // Customize height for each image
      width: 'w-full', // Customize width for each image
    },
    {
      image: image3,
      height: 'h-72', // Customize height for each image
      width: 'w-full', // Customize width for each image
    },
   
  ];

  return (
    <div className="container  px-5 py-2 lg:px-32 lg:pt-24">
      <div className="text-xl mb-5 font-semibold">
        Create a dynamic image gallery using Tailwind CSS in React -{' '}
        <a
          href="https://www.cluemediator.com"
          target="_blank"
          className="text-blue-500 hover:underline"
          rel="noopener noreferrer"
        >
          Clue Mediator
        </a>
      </div>
      <div className="grid  grid-cols-3 gap-4">
        {gallery.map((item, index) => (
          <div key={index} className="flex justify-center">
            <img
              className={`${item.height} ${item.width} object-cover object-center shadow-md`}
              src={item.image}
              alt={`Image ${index + 1}`}
            />

          </div>
        ))}
      </div>
    </div>
  );
};

export default HGallery;
