// Product card component for displaying products
export default function ProductCard({ product }) {
  return (
    <div className="card-product overflow-hidden bg-white">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <svg
          className="w-24 h-24 text-white opacity-20"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
        </svg>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>

        {/* Button */}
        <button className="w-full btn-primary text-sm">
          Contact for Details
        </button>
      </div>
    </div>
  );
}
