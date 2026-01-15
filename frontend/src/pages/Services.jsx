import { Link } from "react-router-dom";
import ServiceCard from "../components/common/ServiceCard";
import servicesData from "../data/services.json";

export default function Services() {
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
            <span className="text-primary font-semibold">Services</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-dark mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg mb-12">
          Comprehensive solutions to support your business needs and ensure
          quality at every step
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Detailed Service Descriptions */}
        <div className="bg-light rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-dark mb-8">
            Why Choose Our Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-secondary text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  Quality Assured
                </h3>
                <p className="text-gray-600">
                  Every product undergoes rigorous quality inspection to meet
                  international standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-secondary text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  Global Network
                </h3>
                <p className="text-gray-600">
                  Our worldwide logistics and supply network ensures timely
                  delivery anywhere.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-secondary text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  Custom Solutions
                </h3>
                <p className="text-gray-600">
                  Tailored packaging and services designed specifically for your
                  requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-secondary text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  Expert Consultation
                </h3>
                <p className="text-gray-600">
                  Get guidance from our experienced team on product selection
                  and specifications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl text-white font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg mb-6 text-gray-100">
            Let's discuss how our services can benefit your business
          </p>
          <Link to="/contact" className="btn-secondary">
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
