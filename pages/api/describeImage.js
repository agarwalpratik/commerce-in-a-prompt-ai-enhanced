export default async function handler(req, res) {
  const { image } = req.body;
  const openaiKey = process.env.OPENAI_API_KEY;
  const result = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openaiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "Describe this product for an e-commerce site in 50 words:" },
            { type: "image_url", image_url: { url: `data:image/jpeg;base64,${image}` } }
          ]
        }
      ]
    })
  });
  const json = await result.json();
  const description = json.choices?.[0]?.message?.content || "No description found";
  res.status(200).json({ description });
}