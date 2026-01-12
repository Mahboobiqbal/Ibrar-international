import { useParams, Link } from "react-router-dom";
import productsData from "../data/products.json";

export default function ProductDetail() {
  const { category, id } = useParams();
  const numericId = parseInt(id, 10);

  const list = productsData[category] || [];
  const product = list.find((p) => p.id === numericId);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p className="text-gray-600 mb-6">
          The requested product could not be found.
        </p>
        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  const imageUrl = product.image
    ? new URL(`../../Assets/${product.image}`, import.meta.url).href
    : null;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="h-96 lg:h-auto">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100" />
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-dark mb-4">
                {product.name}
              </h1>
              <p className="text-gray-700 mb-6">{product.description}</p>
              <div className="prose text-gray-700 mb-6">
                <p>{product.details}</p>
              </div>

              <div className="flex gap-4">
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
                <Link to="/products" className="btn-outline">
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
