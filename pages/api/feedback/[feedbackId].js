import { extractFileData, extractFilePath } from ".";

const feedbackIdHandler = (req, res) => {
  const feedbackId = req.query.feedbackId;
  const filepath = extractFilePath();
  const fileData = extractFileData(filepath);

  const selectedData = fileData.find((item) => item.id === feedbackId);
  res.status(200).json({ feedback: selectedData });
};

export default feedbackIdHandler;
