"use client";

import ImagePicker from "@/components/meal/image-picker";
import ShareMealFormButton from "@/components/meal/share-meal-form-button";
import { formHandler } from "@/lib/sharing-data";
import { useFormState } from "react-dom";
import Styles from "./share.module.css";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(formHandler, { message: null });
  return (
    <>
      <header className={Styles.header}>
        <h1>
          Share your <span className={Styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={Styles.main}>
        <form className={Styles.form} action={formAction}>
          <div className={Styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
          </p>
          <ImagePicker name="image" label="image" />
          {state.message && <p>{state.message}</p>}

          <p className={Styles.actions}>
            <ShareMealFormButton />
          </p>
        </form>
      </main>
    </>
  );
}
