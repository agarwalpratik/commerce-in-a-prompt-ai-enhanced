import { useState } from "react";
export default function PromptBuilder({ onResult }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const handleGenerate = async () => {
    setLoading(true);
    const res = await fetch("/api/parsePrompt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });
    const data = await res.json();
    onResult(data);
    setLoading(false);
  };
  return (
    <div className="p-4 border rounded-xl bg-white shadow mb-6">
      <textarea className="w-full p-2 border rounded mb-2" placeholder="Describe your business..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleGenerate} disabled={loading} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        {loading ? "Generating..." : "Generate Store Setup"}
      </button>
    </div>
  );
}