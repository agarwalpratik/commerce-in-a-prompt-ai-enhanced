import { useState } from "react";
export default function ImageUploader({ onGenerate }) {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const uploadAndDescribe = async () => {
    const base64 = await toBase64(file);
    const res = await fetch("/api/describeImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: base64 }),
    });
    const data = await res.json();
    setDesc(data.description);
    onGenerate(data.description);
  };
  return (
    <div className="p-4 border rounded-xl bg-white shadow mb-6">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={uploadAndDescribe}>
        Generate Description
      </button>
      {desc && <p className="mt-2 text-gray-700 italic">Suggested: {desc}</p>}
    </div>
  );
}
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = (error) => reject(error);
  });