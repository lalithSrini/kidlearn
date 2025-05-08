import React from 'react';

type Flower = {
  name: string;
  image: string;
  description: string;
  symbolism: string[];
};

const flowers: Flower[] = [
  {
    name: 'Rose',
    image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=1001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Classic symbol of love and beauty, widely used in celebrations.',
    symbolism: ['Love', 'Romance', 'Passion'],
  },
  {
    name: 'Lotus',
    image: 'https://plus.unsplash.com/premium_photo-1664303754150-7a776a1f28bd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sacred flower often associated with purity and rebirth in Eastern cultures.',
    symbolism: ['Purity', 'Spiritual awakening', 'Rebirth'],
  },
  {
    name: 'Sunflower',
    image: 'https://images.unsplash.com/photo-1552160793-cbaf3ebcba72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Bright and cheerful, sunflowers represent positivity and admiration.',
    symbolism: ['Happiness', 'Loyalty', 'Warmth'],
  },
  {
    name: 'Lily',
    image: 'https://images.unsplash.com/photo-1561897519-6e4fbd1fbc41?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lilies are elegant flowers often associated with purity and renewal.',
    symbolism: ['Purity', 'Rebirth', 'Grace'],
  },
  {
    name: 'Tulip',
image: 'https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
description: 'Tulips are spring blooms that come in many colors, each symbolizing different emotions.',
symbolism: ['Perfect love', 'Hope', 'Charity'],


  },
  {
    name: 'Marigold',
image: 'https://images.unsplash.com/photo-1695301737779-abb0802bf47c?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
description: 'Marigolds are bright orange and yellow flowers often used in celebrations and rituals.',
symbolism: ['Creativity', 'Passion', 'Remembrance'],


  },
  {
    name: 'Lavender',
    image: 'https://images.unsplash.com/photo-1498998754966-9f72acbc85b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lavender is known for its calming scent and soft purple blooms.',
    symbolism: ['Calm', 'Devotion', 'Serenity'],
    
    
  },
  {
    name: 'Hydrangea',
image: 'https://images.unsplash.com/photo-1621518856558-9b2ce2d0660d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
description: 'Hydrangeas are full, bushy flowers with layered petals, symbolizing gratitude and understanding.',
symbolism: ['Gratitude', 'Grace', 'Apology'],


  },
  {
    name: 'Cherry Blossom',
    image: 'https://images.unsplash.com/photo-1538943186303-104afadcbb16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Cherry blossoms bloom briefly in spring, representing the beauty and fragility of life.',
    symbolism: ['Renewal', 'Beauty', 'Impermanence'],
    
    
  }
];

const FlowersPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Flowers Around the World</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Popular Flower Types</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Flowers"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Global Blooms</h3>
            <p className="text-gray-700">
              From the romantic rose to the cheerful sunflower, flowers have been a symbol of emotion and beauty across cultures.
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/i810CxN5Q6Q?si=AVhMFNADW_35Ruy"
              title="Flowers Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">How Flowers Grow</h3>
            <p className="text-gray-700">
              Discover the fascinating growth cycle of different types of flowers and how they thrive in diverse environments.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Symbolism & Benefits</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {flowers.map((flower) => (
            <div key={flower.name} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={flower.image}
                alt={flower.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{flower.name}</h3>
              <p className="text-gray-700 mb-4">{flower.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Symbolism</h4>
                <ul className="list-disc list-inside">
                  {flower.symbolism.map((symbol, index) => (
                    <li key={index} className="text-gray-700">{symbol}</li>
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

export default FlowersPage;
