"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import burgerImg from "../../assets/burger.jpg";
import curryImg from "../../assets/curry.jpg";
import dumplingsImg from "../../assets/dumplings.jpg";
import macncheeseImg from "../../assets/macncheese.jpg";
import pizzaImg from "../../assets/pizza.jpg";
import schnitzelImg from "../../assets/schnitzel.jpg";
import tomatoSaladImg from "../../assets/tomato-salad.jpg";
import Styles from "./image-slideshow.module.css";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

const ImageSlideshow = () => {
  const [imageIndex, setimageIndex] = useState(0);

  useEffect(() => {
    const changeImage = setInterval(() => {
      setimageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(changeImage);
  }, []);

  return (
    <div className={Styles.slideshow}>
      {images.map((item, index) => {
        return (
          <Image
            src={item.image}
            key={index}
            className={index === imageIndex ? Styles.active : ""}
            alt={item.alt}
          />
        );
      })}
    </div>
  );
};

export default ImageSlideshow;
