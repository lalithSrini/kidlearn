import React from 'react';

const fruits = [
  {
    name: 'Blueberries',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e',
    description: 'Small but mighty, blueberries are packed with antioxidants.',
    benefits: ['High in antioxidants', 'Improves memory', 'Heart healthy']
  },
  {
    name: 'Oranges',
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f',
    description: 'Citrus fruits known for their immune-boosting properties.',
    benefits: ['Rich in Vitamin C', 'Boosts immunity', 'Aids digestion']
  },
  {
    name: 'Pomegranate',
    image: 'https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Ancient fruit with modern super-food status.',
    benefits: ['Anti-inflammatory', 'Heart healthy', 'Rich in antioxidants']
  }
];

const fruit1 = [
  {
    name: 'Strawberry',
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?q=80&w=1060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Strawberries are sweet, juicy fruits that are not only delicious but also packed with health benefits',
    benefits: ['High in antioxidants','Improves memory','Heart healthy']
  },
  {
    name: 'Raspberry',
    image: 'https://plus.unsplash.com/premium_photo-1675731118509-ab902002dbac?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Raspberries are small, red, juicy berries known for their sweet-tart flavor. They are aggregate fruits made up of tiny drupelets and are often eaten fresh, added to desserts, or blended into smoothies. ',
    benefits: ['Rich in fiber',

'High in antioxidants','Supports healthy digestion',

'Boosts immune system']
  },
  {
    name: 'Blackberry',
    image: 'https://images.unsplash.com/photo-1669562064740-e7d35af4cdb3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Blackberries are dark, juicy berries that have a sweet-tart flavor. They grow on thorny bushes and are commonly used in jams, desserts, and smoothies. Rich in vitamins and minerals, blackberries are known for their high nutritional value and versatility in the kitchen.',
    benefits: ['Rich in vitamins C and K',

'High in antioxidants',

'Supports brain health'

,'Promotes healthy skin']
  }
];

function FruitsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Fruits Around the World</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Tropical Fruits</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1487376480913-24046456a727?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tropical Fruits"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Exotic Varieties</h3>
            <p className="text-gray-700">
              Tropical fruits offer unique flavors and essential nutrients. From sweet mangoes to creamy avocados,
              these fruits are both delicious and nutritious.
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/zT-dbgVoA48?si=8a86tA3ihNSRyl-x"
              title="Tropical Fruits Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Growing Tropical Fruits</h3>
            <p className="text-gray-700">
              Learn about how tropical fruits are grown and harvested in different parts of the world.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Nutritional Benefits</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {fruits.map((fruit) => (
            <div key={fruit.name} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={fruit.image}
                alt={fruit.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{fruit.name}</h3>
              <p className="text-gray-700 mb-4">{fruit.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Benefits</h4>
                <ul className="list-disc list-inside">
                  {fruit.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Aggregate Fruits</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1595456040477-fabe3bb71455?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Aggregate Fruits"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Exotic Varieties</h3>
            <p className="text-gray-700">
            Aggregate fruits are formed from multiple ovaries of a single flower.
            Each ovary develops into a small fruit, and together they form a cluster.
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/33rolSsj7cA?si=89Yx2mz3GVDku33S"
              title="Tropical Fruits Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Growing Aggregate fruits</h3>
            <p className="text-gray-700">
            Tropical fruits grow best in warm, humid, and frost-free climates with plenty of sunlight and well-drained,
             nutrient-rich soil. They usually need a lot of rain throughout the year. Farmers often grow them using methods
              like intercropping, where different crops like bananas and coffee are planted together, or agroforestry,
               which combines fruit trees with other trees for a more natural environment. 
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Nutritional Benefits</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {fruit1.map((fruit1) => (
            <div key={fruit1.name} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={fruit1.image}
                alt={fruit1.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{fruit1.name}</h3>
              <p className="text-gray-700 mb-4">{fruit1.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Benefits</h4>
                <ul className="list-disc list-inside">
                  {fruit1.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}



export default FruitsPage;