import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";
import Signup from "@/components/Signup";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";

const products = [
  {
    title: "Basic Tshirt",
    image: {
      src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Basic tshirt",
    },
    price: "20.00$",
  },
  {
    title: "Basic Tshirt",
    image: {
      src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Basic tshirt",
    },
    price: "20.00$",
  },
  {
    title: "Basic Tshirt",
    image: {
      src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Basic tshirt",
    },
    price: "20.00$",
  },
  {
    title: "Basic Tshirt",
    image: {
      src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Basic tshirt",
    },
    price: "20.00$",
  },
];
const testimonialSlider = [
  {
    title: "Stayin' Alive",
    description:
      "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
    uname: "Michael Scott",
  },
  {
    title: "Stayin' Alive",
    description:
      "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
    uname: "Michael Scott",
  },
  {
    title: "Stayin' Alive",
    description:
      "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
    uname: "Michael Scott",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Products
        title="Our Products"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit"
        products={products}
      />
      <Pricing />
      <Stats
        title="2024 Statistics"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi."
        stats={[
          {
            stat: "$4.8m",
            text: "Total sales",
          },
          {
            stat: "23",
            text: "Official addons",
          },
          {
            stat: "86",
            text: "Total addons",
          },
          {
            stat: "86k",
            text: "Downloads",
          },
        ]}
      />
      <GetStarted
        title="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis."
        btn={{ text: "Get Started", href: "/get-started" }}
        image={{
          src: "https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          alt: "Get started today",
        }}
      />
      <Testimonial
        title="Don't just take our word for it..."
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro optio fugit a culpa sunt id!"
        slider={testimonialSlider}
      />
      <Signup />
    </>
  );
}
