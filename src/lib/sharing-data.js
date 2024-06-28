"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meas-datal";

export const formHandler = async (formData) => {
  const sharingMealData = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    image: "image",
    instructions: formData.get("instructions"),
  };

  await saveMeal(sharingMealData);
  redirect("/meal");
};
