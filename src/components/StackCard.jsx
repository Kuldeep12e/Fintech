export default function StackCard({ card, index }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl shadow px-6 py-5 mb-6 max-w-xl mx-auto">
      
      <span className="absolute -top-3 left-4 text-xs bg-blue-100 text-secondary px-2 py-0.5 rounded-full">
        {index + 1}
      </span>

      {card.imageUrl && (
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      )}

      <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>

      <p className="text-sm text-gray-600 mt-1">{card.description}</p>

      {card.url && (
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary text-sm font-medium mt-3 inline-block"
        >
          Learn more →
        </a>
      )}
    </div>
  );
}
