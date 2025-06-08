import CheckoutButton from "../components/CheckoutButton";
export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Boho Jewelry by Anaya</h1>
      <img src="/boho-necklace.jpg" className="w-full rounded-xl mb-4" alt="jewelry" />
      <p className="mb-2">Handcrafted pieces inspired by Rajasthan. Price: ₹1299</p>
      <CheckoutButton amount={1299} />
      <div className="mt-4 flex items-center space-x-4">
        <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">✅ Trust Score: 85/100</span>
        <span className="text-sm text-gray-600">4.5⭐ (212 reviews)</span>
      </div>
    </div>
  );
}