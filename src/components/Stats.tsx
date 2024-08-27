import React from "react";

type Props = {
  stats: {
    stat: string;
    text: string;
  }[];
  title: string;
  description: string;
};

const Stats = ({ stats, title, description }: Props) => {
  return (
    <section className="bg-slate-900 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {title}
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
            {description}
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ stat, text }: { stat: string; text: string }) => (
            <li
              key={stat}
              className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
            >
              <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                {text}
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                {stat}
              </dd>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
