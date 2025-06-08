const CheckoutButton = ({ amount }) => {
  const handleCheckout = () => {
    const pineLabsUrl = `https://checkout.pinelabs.com/pay?amount=${amount}&currency=INR&method=upi,cards,emi`;
    window.location.href = pineLabsUrl;
  };
  return (
    <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700" onClick={handleCheckout}>
      Pay Now
    </button>
  );
};
export default CheckoutButton;