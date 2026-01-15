import { Link } from "react-router-dom";

export default function About() {
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
            <span className="text-primary font-semibold">About Us</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Company Introduction */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-[#3A1F5C] mb-6">
            About Ibrar International
          </h1>
          <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-12 shadow-lg">
            <p
              className="text-lg leading-relaxed font-light"
              style={{ color: "#ffbf00" }}
            >
              Ibrar International is a premium supplier of rice and marble
              products with a commitment to excellence, quality, and customer
              satisfaction. With over 20 years of industry experience, we have
              established ourselves as a trusted partner for businesses
              worldwide.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-light rounded-lg p-8 border-l-4 border-secondary">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide premium quality rice and marble products while
              maintaining the highest standards of integrity, reliability, and
              customer service. We aim to be the preferred supplier for clients
              who value quality and professionalism.
            </p>
          </div>

          <div className="bg-light rounded-lg p-8 border-l-4 border-secondary">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become a globally recognized leader in the supply of premium
              rice and marble products, known for innovation, sustainability,
              and excellence in every transaction.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Quality",
                desc: "Uncompromising standards in every product",
              },
              {
                title: "Integrity",
                desc: "Honest dealings in all business relations",
              },
              {
                title: "Innovation",
                desc: "Continuous improvement and adaptation",
              },
              {
                title: "Reliability",
                desc: "Consistent delivery and service excellence",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md border-t-4 border-secondary"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-light rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-dark mb-8">
            Why Choose Ibrar International?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Extensive industry experience with proven track record",
              "Premium quality products meeting international standards",
              "Global supply network ensuring worldwide delivery",
              "Expert team dedicated to customer satisfaction",
              "Customized solutions tailored to client needs",
              "Competitive pricing without compromising quality",
              "Transparent communication and reliable partnerships",
              "24/7 customer support and technical assistance",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-secondary text-2xl font-bold">→</div>
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "20+", label: "Years Experience" },
            { number: "500+", label: "Clients Worldwide" },
            { number: "50+", label: "Product Variants" },
            { number: "100%", label: "Quality Guarantee" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-primary text-white rounded-lg p-8 text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-purple-700 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Growing Network
          </h2>
          <p className="text-lg text-white mb-6">
            Partner with Ibrar International for premium quality and reliable
            service
          </p>
          <Link to="/contact" className="btn-secondary">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
