// Service card component for displaying services
export default function ServiceCard({ service }) {
  return (
    <div className="card-service">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-3">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}
