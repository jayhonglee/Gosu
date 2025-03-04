import React from 'react';

import config from '../config/index.json';

interface Section {
  title: string;
  description: string;
  img: string;
  imagePosition: string;
}

const Product = () => {
  const { product } = config;
  const { sections } = product;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        {sections.map((section: Section, index) => (
          <div
            key={section.title}
            className={`flex flex-wrap items-center ${
              index !== 0 ? 'mt-20' : ''
            }`}
          >
            <div
              className={`w-full lg:w-1/2 p-4 ${
                section.imagePosition === 'right' ? '' : 'lg:order-2'
              }`}
            >
              <h2 className="text-3xl tracking-tight font-black text-gray-900 sm:text-4xl md:text-5xl leading-tight mb-8">
                {section.title}
              </h2>
              <p className="text-xl text-gray-500 sm:text-2xl md:text-3xl leading-relaxed max-w-2xl">
                {section.description}
              </p>
            </div>
            <div
              className={`w-full lg:w-1/2 p-4 ${
                section.imagePosition === 'right' ? 'lg:pl-12' : 'lg:order-1'
              }`}
            >
              <img
                className={`w-full h-[300px] sm:h-[400px] lg:h-[600px] ${
                  index === 0
                    ? 'rounded-lg shadow-xl object-cover'
                    : 'object-contain'
                }`}
                src={section.img}
                alt={section.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
