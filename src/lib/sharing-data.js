"use server";

import { redirect } from "next/navigation";
import { saveSharingMeal } from "./meas-datal";

const inValidMessage = (text) => {
  return !text || text.trim() === "";
};

export const formHandler = async (prevState, formData) => {
  const sharingMealData = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
  };

  if (
    inValidMessage(sharingMealData.creator) ||
    inValidMessage(sharingMealData.instructions) ||
    inValidMessage(sharingMealData.summary) ||
    inValidMessage(sharingMealData.title) ||
    inValidMessage(sharingMealData.creator_email) ||
    !sharingMealData.creator_email.includes("@") ||
    !sharingMealData.image
  ) {
    return {
      message: "Invalis input field...",
    };
  }

  await saveSharingMeal(sharingMealData);
  redirect("/meal");
};
