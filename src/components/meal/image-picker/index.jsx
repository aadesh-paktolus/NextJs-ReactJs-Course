"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Styles from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const [imageLink, setImageLink] = useState("");
  const imageInputRef = useRef();

  const ImgaeInputHandler = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImageLink(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleImgaePicker = () => {
    imageInputRef.current.click();
  };

  return (
    <div className={Styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={Styles.controls}>
        <div className={Styles.preview}>
          {imageLink ? (
            <Image src={imageLink} alt="share image" fill />
          ) : (
            "Please Select an Image"
          )}
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          className={Styles.input}
          onChange={ImgaeInputHandler}
          ref={imageInputRef}
          required
        />
      </div>
      <button
        className={Styles.button}
        type="button"
        onClick={handleImgaePicker}
      >
        Pick Image
      </button>
    </div>
  );
};

export default ImagePicker;
