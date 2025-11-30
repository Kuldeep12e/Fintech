
const PaymentCard = ({ title, description}) => {
  return (
    <div className="bg-primary p-5 mb-10 rounded-xl border border-secondary hover:scale-[1.02] transition-transform">
    <h3 className="text-xl font-poppins font-semibold text-grey-700 mb-2">{title}</h3>
    <p className="text-dimgrey font-poppins text-sm mb-3">
      {description}
    </p>
    <button className="text-secondary font-medium hover:underline">
      View Docs →
    </button>
  </div>
  );
};

export default PaymentCard;