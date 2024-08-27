import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  products: {
    image: {
      src: string;
      alt: string;
    };
    title: string;
    price: string;
  }[];
};

const Products = ({ title, description, products }: Props) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            {title}
          </h2>

          <p className="mt-4 max-w-md text-gray-500">{description}</p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ image, title, price },index) => {
            return (
              <li key={index}>
                <a href="#" className="group block overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    quality={100}
                    width={300}
                    height={350}
                  />

                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {title}
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {price}
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Products;
