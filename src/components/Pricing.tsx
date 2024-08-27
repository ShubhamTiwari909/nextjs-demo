import React from "react";

const plans = [
  {
    title: "Starter",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: "20$",
    included: [
      {
        text: "10 users",
        access: true,
      },
      {
        text: "Basic Support",
        access: true,
      },
      {
        text: "2gb of storage",
        access: true,
      },
      {
        text: "Help center access",
        access: false,
      },
      {
        text: "Phone support",
        access: false,
      },
      {
        text: "Community access",
        access: false,
      },
    ],
  },
  {
    title: "Pro",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: "30$",
    included: [
      {
        text: "10 users",
        access: true,
      },
      {
        text: "Basic Support",
        access: true,
      },
      {
        text: "2gb of storage",
        access: true,
      },
      {
        text: "Help center access",
        access: true,
      },
      {
        text: "Phone support",
        access: false,
      },
      {
        text: "Community access",
        access: false,
      },
    ],
  },
  {
    title: "Enterprise",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: "100$",
    included: [
      {
        text: "10 users",
        access: true,
      },
      {
        text: "Basic Support",
        access: true,
      },
      {
        text: "2gb of storage",
        access: true,
      },
      {
        text: "Help center access",
        access: true,
      },
      {
        text: "Phone support",
        access: true,
      },
      {
        text: "Community access",
        access: true,
      },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        {plans.map(({ title, description, price, included }) => (
          <div
            key={title}
            className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                {title}
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">{description}</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {price}
                </strong>

                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>

              <a
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                What&rsquo;s included:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                {included.map(({ text, access }) => (
                  <li key={text} className="flex items-center gap-1">
                    {access ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}

                    <span className="text-gray-700"> {text} </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
