import { parsePrompt } from "../../utils/parsePrompt";
export default async function handler(req, res) {
  const { prompt } = req.body;
  try {
    const parsed = await parsePrompt(prompt);
    res.status(200).json(parsed);
  } catch {
    res.status(500).json({ error: "Prompt parsing failed." });
  }
}
