import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/common/ProductCard";
import ServiceCard from "../components/common/ServiceCard";
import productsData from "../data/products.json";
import servicesData from "../data/services.json";
import fehmalRiceImg from "../../Assets/Fehmal rice.png";
import marbelsImg from "../../Assets/Marbels.jpeg";
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

  const [hacked, setHacked] = useState(false);

  useEffect(() => {
    const hackTimer = setTimeout(() => setHacked(true), 1000);
    return () => clearTimeout(hackTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % sliderItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderItems.length]);

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
      <section className="slider relative text-white py-20 px-4 overflow-hidden">
        {sliderItems.map((slide, idx) => {
          const isActive = sliderIndex === idx;
          const bg =
            slide.type === "rice"
              ? fehmalRiceImg
              : slide.type === "marbles"
              ? marbelsImg
              : servicesImg;
          return (
            <div
              key={idx}
              className={`slider__slide ${
                isActive ? "slider__slide--active" : ""
              }`}
              data-slide={idx + 1}
            >
              <div
                className={`slider__wrap ${
                  hacked ? "slider__wrap--hacked" : ""
                }`}
              >
                <div
                  className="slider__back"
                  style={{ backgroundImage: `url(${bg})` }}
                />

                <div
                  className="slider__inner"
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  <div className="slider__content text-center">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
                      {slide.label}
                    </h3>
                    <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-6 text-center">
                      {slide.type === "rice"
                        ? "Discover our premium selection of rice varieties sourced from the finest farms worldwide."
                        : slide.type === "marbles"
                        ? "Explore our luxurious marble and granite collection for architectural and design excellence."
                        : "Experience our comprehensive range of professional services and solutions."}
                    </p>
                    {/* <button
                      onClick={nextSlide}
                      className="go-to-next btn-primary"
                    >
                      Next
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <button onClick={prevSlide} className="slider-nav-btn left-4">
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

        <button onClick={nextSlide} className="slider-nav-btn right-4">
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

        <div className="slider__indicators">
          {sliderItems.map((_, idx) => (
            <div
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`slider__indicator ${
                sliderIndex === idx ? "active" : ""
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
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">
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
              <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                <img
                  src={fehmalRiceImg}
                  alt="Ibrar International"
                  className="w-full h-50px object-cover"
                />
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
              <h3 className="text-3xl font-bold text-white">Premium Rice</h3>
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
          <h2 className="text-4xl text-white font-bold mb-6">
            Ready to Work With Us?
          </h2>
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
