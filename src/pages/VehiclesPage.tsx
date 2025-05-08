import React from 'react';

type Vehicle = {
  name: string;
  image: string;
  description: string;
  features: string[];
};

const vehicles: Vehicle[] = [
  {
    name: 'Electric Car',
    image: 'https://images.unsplash.com/photo-1615829386703-e2bb66a7cb7d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Electric cars are eco-friendly, quiet, and efficient for modern-day commuting.',
    features: ['Zero emissions', 'Low maintenance', 'Cost-efficient'],
  },
  {
    name: 'Motorcycle',
    image: 'https://images.unsplash.com/photo-1558980664-2cd663cf8dde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Motorcycles are ideal for quick city rides and provide a thrilling experience.',
    features: ['Fuel efficient', 'Compact design', 'Easy parking'],
  },
  {
    name: 'SUV',
    image: 'https://images.unsplash.com/photo-1622893288761-823ba60f17a6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'SUVs offer space, power, and safety for family road trips and adventures.',
    features: ['Spacious interior', 'All-terrain capability', 'Strong build'],
  },
  {
    name: 'Pickup Truck',
    image: 'https://images.unsplash.com/photo-1605504835488-e8c6d37beb43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Pickup trucks are robust, versatile, and perfect for hauling cargo or off-road driving.',
    features: ['High payload capacity', 'Rugged design', 'Towing power'],
  },
  {
    name: 'Bicycle',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Bicycles are eco-friendly, great for fitness, and perfect for short commutes.',
    features: ['No fuel required', 'Health benefits', 'Lightweight and portable'],
  },
  {
    name: 'Bus',
    image: 'https://images.unsplash.com/photo-1564694202883-46e7448c1b26?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Buses are used for public transport, offering affordable and efficient mass transit.',
    features: ['Large passenger capacity', 'Cost-effective travel', 'Scheduled routes'],
  },
  {
    name: 'Helicopter',
    image: 'https://images.unsplash.com/photo-1563561686990-f0ef5b3e0b7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Helicopters offer vertical take-off and landing, ideal for quick aerial transport and rescue missions.',
    features: ['Vertical mobility', 'Ideal for remote access', 'Versatile usage'],
  },
  {
    name: 'Sailboat',
    image: 'https://images.unsplash.com/photo-1501771924607-209f42a6e7e4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sailboats harness the power of wind for eco-friendly and leisurely travel on water.',
    features: ['Wind-powered', 'Great for leisure', 'Low environmental impact'],
  },
  {
    name: 'Airplane',
    image: 'https://images.unsplash.com/photo-1483375801503-374c5f660610?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Airplanes are fast, long-distance vehicles used for transporting people and goods across the globe.',
    features: ['High-speed travel', 'Long-distance capability', 'Global connectivity'],
  }
  
];

const VehiclesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Vehicles Around the World</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Modern Transportation</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1508798179027-a00aa5326443?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vehicles"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Diverse Vehicle Types</h3>
            <p className="text-gray-700">
              Vehicles have revolutionized the way we travel. From two-wheelers to electric cars, the world of
              transportation is vast and evolving.
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/IFVJKx8J9hs?si=8WcAC2xr94bWNPt0"
              title="Vehicles Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Evolution of Vehicles</h3>
            <p className="text-gray-700">
              Watch how vehicles have evolved over time, from steam engines to self-driving electric vehicles.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Vehicle Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
              <p className="text-gray-700 mb-4">{vehicle.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="list-disc list-inside">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VehiclesPage;
