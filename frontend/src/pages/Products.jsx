import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/common/ProductCard";
import productsData from "../data/products.json";

export default function Products() {
  const { category } = useParams();

  // Determine which products to show
  let displayProducts = [];
  let categoryTitle = "";

  if (category === "rice") {
    displayProducts = productsData.rice;
    categoryTitle = "Rice Products";
  } else if (category === "marbles") {
    displayProducts = productsData.marbles;
    categoryTitle = "Marble Products";
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Breadcrumb */}
      <div className="bg-light py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-600">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">
              Products
            </Link>
            {category && (
              <>
                <span>/</span>
                <span className="text-primary font-semibold">
                  {categoryTitle}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* If no category selected, show category selection */}
        {!category ? (
          <>
            <h1 className="text-4xl font-bold text-dark mb-8">Our Products</h1>
            <p className="text-gray-600 text-lg mb-12">
              Choose a category to explore our premium product range
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rice Category Card */}
              <Link to="/products/rice" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-full border-l-4 border-secondary p-8">
                  <div className="text-6xl mb-4">🍚</div>
                  <h2 className="text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition">
                    Rice Products
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Explore our premium collection of rice varieties including
                    Basmati, Sella, Brown, and Long Grain rice.
                  </p>
                  <div className="btn-primary inline-block">View Rice →</div>
                </div>
              </Link>

              {/* Marbles Category Card */}
              <Link to="/products/marbles" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-full border-l-4 border-secondary p-8">
                  <div className="text-6xl mb-4">💎</div>
                  <h2 className="text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition">
                    Marble & Granite
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Discover our exclusive collection of Italian marble, white
                    marble, granite, and onyx.
                  </p>
                  <div className="btn-primary inline-block">View Marbles →</div>
                </div>
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-dark mb-2">
              {categoryTitle}
            </h1>
            <p className="text-gray-600 text-lg mb-12">
              Discover our complete range of {categoryTitle.toLowerCase()}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-light rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold text-dark mb-4">
                Interested in These Products?
              </h2>
              <p className="text-gray-600 mb-6">
                Contact us for more information, pricing, and bulk orders
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us Now
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
