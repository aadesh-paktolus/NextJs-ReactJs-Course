import fs from "fs";
import path from "path";

export function extractFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFileData(filepath) {
  const fileData = fs.readFileSync(filepath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date(),
      email,
      text: feedbackText,
    };

    const filepath = extractFilePath();
    const data = extractFileData(filepath);
    data.push(newFeedback);
    fs.writeFileSync(filepath, JSON.stringify(data));
    res.status(201).json({ message: "Seccess", feedback: newFeedback });
  } else {
    const filepath = extractFilePath();
    const data = extractFileData(filepath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;
