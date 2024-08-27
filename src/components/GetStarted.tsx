import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  btn: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

const GetStarted = ({ title, description, btn, image }: Props) => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {title}
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">{description}</p>

          <div className="mt-4 md:mt-8">
            <a
              href={btn.href}
              className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {btn.text}
            </a>
          </div>
        </div>
      </div>

      <Image
        alt={image.alt}
        src={image.src}
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        quality={100}
        width={1000}
        height={1000}
      />
    </section>
  );
};

export default GetStarted;
