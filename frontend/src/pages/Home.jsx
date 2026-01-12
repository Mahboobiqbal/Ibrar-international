import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/common/ProductCard";
import ServiceCard from "../components/common/ServiceCard";
import productsData from "../data/products.json";
import servicesData from "../data/services.json";
import fehmalRiceImg from "../../Assets/Fehmal rice.png";
import marbelsImg from "../../Assets/Marbels.jpg";
import servicesImg from "../../Assets/Services.jpg";

export default function Home() {
  const featuredRice = productsData.rice.slice(0, 3);
  const featuredMarbles = productsData.marbles.slice(0, 3);
  const featuredServices = servicesData.slice(0, 3);

  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderItems = [
    { type: "rice", label: "Premium Rice", items: featuredRice },
    { type: "marbles", label: "Marble & Granite", items: featuredMarbles },
    { type: "services", label: "Our Services", items: featuredServices },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % sliderItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setSliderIndex(index);
  const nextSlide = () =>
    setSliderIndex((prev) => (prev + 1) % sliderItems.length);
  const prevSlide = () =>
    setSliderIndex(
      (prev) => (prev - 1 + sliderItems.length) % sliderItems.length
    );

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative text-white py-20 px-4 overflow-hidden">
        {/* Slider Background Images */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="transition-transform duration-500 ease-out flex h-full"
            style={{
              transform: `translateX(-${sliderIndex * 100}%)`,
            }}
          >
            {sliderItems.map((slide, idx) => (
              <div key={idx} className="min-w-full h-full flex-shrink-0">
                <img
                  src={
                    slide.type === "rice"
                      ? fehmalRiceImg
                      : slide.type === "marbles"
                      ? marbelsImg
                      : servicesImg
                  }
                  alt={slide.label}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="h-96 flex flex-col items-center justify-center text-center">
            {/* Text Content */}
            <div className="mb-8 max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {sliderItems[sliderIndex].label}
              </h3>
              <p className="text-gray-100 text-lg md:text-xl">
                {sliderItems[sliderIndex].type === "rice"
                  ? "Discover our premium selection of rice varieties sourced from the finest farms worldwide."
                  : sliderItems[sliderIndex].type === "marbles"
                  ? "Explore our luxurious marble and granite collection for architectural and design excellence."
                  : "Experience our comprehensive range of professional services and solutions."}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-3 transition z-20"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-3 transition z-20"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {sliderItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition ${
                sliderIndex === idx
                  ? "bg-secondary scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                WHAT IS IBRAR INTERNATIONAL PURPOSE?
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                At Ibrar International, our purpose is to provide premium
                quality rice and marble products that empower businesses and
                drive growth across industries worldwide. We are dedicated to
                delivering excellence through innovative supply solutions,
                maintaining the highest standards of product quality, and
                fostering long-term partnerships built on integrity and
                reliability.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                With over two decades of industry expertise, we have established
                ourselves as a trusted global partner. Our commitment to
                sustainable sourcing, rigorous quality control, and exceptional
                customer service ensures that every product meets international
                standards. We continuously invest in improving our processes to
                support our clients' success.
              </p>
              <Link
                to="/about"
                className="inline-block btn-primary px-8 py-3 font-semibold"
              >
                READ MORE
              </Link>
            </div>

            {/* Right Visual Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-gradient-to-br from-primary to-purple-800 rounded-xl overflow-hidden shadow-lg">
                {/* Header Section */}
                <div className="bg-green-600 text-white p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-pattern"></div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 relative z-10">
                    IBRAR
                    <br />
                    INTERNATIONAL
                  </h3>
                  <p className="text-green-100 font-bold text-lg relative z-10">
                    PREMIUM GLOBAL SUPPLIER
                  </p>
                </div>

                {/* Content Section */}
                <div className="p-8 text-white">
                  <div className="space-y-6">
                    {/* Stat Item */}
                    <div className="border-l-4 border-secondary pl-4">
                      <div className="text-4xl font-bold mb-1">20+</div>
                      <p className="text-gray-100 font-medium">
                        Years of Service
                      </p>
                    </div>

                    {/* Stat Item */}
                    <div className="border-l-4 border-secondary pl-4">
                      <div className="text-4xl font-bold mb-1">500+</div>
                      <p className="text-gray-100 font-medium">
                        Trusted Clients
                      </p>
                    </div>

                    {/* Stat Item */}
                    <div className="border-l-4 border-secondary pl-4">
                      <div className="text-4xl font-bold mb-1">50+</div>
                      <p className="text-gray-100 font-medium">
                        Premium Products
                      </p>
                    </div>

                    {/* Feature Badges */}
                    <div className="pt-4 border-t border-purple-600 flex flex-wrap gap-2">
                      <span className="bg-secondary text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        QUALITY ASSURED
                      </span>
                      <span className="bg-secondary text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        GLOBAL REACH
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">
            Our Product Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rice Category */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition p-8 border-l-4 border-secondary">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Premium Rice
              </h3>
              <p className="text-gray-600 mb-6">
                Our selection of premium rice varieties sourced from the finest
                farms worldwide. Each grain meets international quality
                standards.
              </p>
              <Link to="/products/rice" className="btn-primary">
                Explore Rice Products
              </Link>
            </div>

            {/* Marbles Category */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition p-8 border-l-4 border-secondary">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Marble & Granite
              </h3>
              <p className="text-gray-600 mb-6">
                Luxurious marble and granite collection for architectural and
                interior design projects with superior finish and durability.
              </p>
              <Link to="/products/marbles" className="btn-primary">
                Explore Marble Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Variants Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Featured Products</h2>

          {/* Rice Variants */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Rice Varieties
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredRice.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Marble Variants */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">
              Marble Collection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredMarbles.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 text-gray-100">
            Get in touch with our team to discuss your requirements and discover
            how we can serve you.
          </p>
          <Link to="/contact" className="btn-secondary text-lg">
            Get in Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
}
