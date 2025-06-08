export async function parsePrompt(userInput) {
  const openaiKey = process.env.OPENAI_API_KEY;
  const messages = [
    {
      role: "system",
      content: "Extract structured business info from user prompt and output JSON like this: { business_type, audience, price_range, style, location, tone, checkout_methods }",
    },
    { role: "user", content: userInput },
  ];
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openaiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model: "gpt-4", messages }),
  });
  const json = await res.json();
  return JSON.parse(json.choices[0].message.content);
}