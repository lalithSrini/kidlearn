import React from 'react';

function VegetablesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Vegetables: Nature's Powerhouse</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Leafy Greens</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999"
              alt="Leafy Greens"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">The Power of Greens</h3>
            <p className="text-gray-700">
              Leafy greens are among the most nutritious foods on the planet. They're packed with vitamins,
              minerals, and fiber while being low in calories.
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/KM1FP8Avutk?si=mBGMOHDNc_E-5fof"
              title="Growing Vegetables"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Growing Your Own Greens</h3>
            <p className="text-gray-700">
              Learn how to grow your own nutritious leafy greens at home, from seed to harvest.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Vegetable Guide</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {vegetablesLeafy.map((vegetable) => (
            <div key={vegetable.name} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={vegetable.image}
                alt={vegetable.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{vegetable.name}</h3>
              <p className="text-gray-700 mb-4">{vegetable.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Nutrition Facts</h4>
                <ul className="list-disc list-inside">
                  {vegetable.nutrients.map((nutrient, index) => (
                    <li key={index} className="text-gray-700">{nutrient}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Flower Vegetables</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://assets.grok.com/users/2d929318-21db-41d0-b951-1c2297d96d3f/generated/DJbbVH0BkuDx5k6r/image.jpg"
              alt="Flower Vegetables"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">The Power of Flower Vegetables</h3>
            <p className="text-gray-700">
            Flower vegetables are the edible flowering parts of certain plants. These vegetables are harvested before the flowers fully bloom.
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/taYY0L33ajg?si=QAKDRuTIAr5fUqsP"
              title="Growing Vegetables"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Growing Your Own Greens</h3>
            <p className="text-gray-700">
              Learn how to grow your own nutritious Flower Vegetables at home, from seed to harvest.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Vegetable Guide</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {vegetables.map((vegetable) => (
            <div key={vegetable.name} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={vegetable.image}
                alt={vegetable.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{vegetable.name}</h3>
              <p className="text-gray-700 mb-4">{vegetable.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Nutrition Facts</h4>
                <ul className="list-disc list-inside">
                  {vegetable.nutrients.map((nutrient, index) => (
                    <li key={index} className="text-gray-700">{nutrient}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Seasonal Growing Guide</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {seasons.map((season) => (
            <div key={season.name} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{season.name}</h3>
              <ul className="list-disc list-inside">
                {season.vegetables.map((veg, index) => (
                  <li key={index} className="text-gray-700">{veg}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
const vegetablesLeafy = [
  {
    name: 'Spinach',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Spinach is a leafy green vegetable that’s widely used in salads, soups, and smoothies. It has a mild, slightly earthy flavor and is packed with essential vitamins and minerals. ',
    nutrients: ['High in iron',

      'Boosts immunity',
      
     'Supports eye health'
      
     , 'Rich in fiber']
  },
  {
    name: 'Swiss Chard',
    image: 'https://images.unsplash.com/photo-1679595044391-3c42b0f351b5?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Swiss Chard is a leafy green vegetable with large, colorful stems and dark green leaves. ',
    nutrients: ['High in iron', 'Boosts immunity', 'Supports bone health', 'Rich in fiber']
  },
  {
    name: 'Arugula',
    image: 'https://plus.unsplash.com/premium_photo-1673469223112-235e51d1dfb0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Arugula is a leafy green with a peppery, mustard-like flavor. It’s commonly used in salads, sandwiches, and as a garnish.',
    nutrients: ['High in vitamin K', 'Rich in antioxidants', 'Supports bone health', 'Good source of folate']
  }
];
const vegetables = [
  {
    name: 'Broccoli',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc',
    description: 'A nutrient-dense cruciferous vegetable with cancer-fighting properties.',
    nutrients: ['Vitamin C', 'Vitamin K', 'Fiber', 'Antioxidants']
  },
  {
    name: 'Cauliflower',
    image: 'https://images.unsplash.com/photo-1692956706779-576c151ec712?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'It can be roasted, steamed, mashed, or even used as a low-carb substitute for rice or pizza crust.',
    nutrients: ['Vitamin C', 'Vitamin K', 'Fiber', 'B vitamins']
  },
  {
    name: 'Zucchini',
    image: 'https://images.unsplash.com/photo-1580294672675-91afc00ee7b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Zucchini is a summer squash with smooth green skin and a mild, slightly sweet flavor. It technically a fruit but is commonly treated as a vegetable in cooking. ',
    nutrients: ['Vitamin A', 'Potassium', 'Fiber', 'Vitamin C']
  }
];

const seasons = [
  {
    name: 'Spring',
    vegetables: ['Peas', 'Lettuce', 'Radishes', 'Spinach']
  },
  {
    name: 'Summer',
    vegetables: ['Tomatoes', 'Cucumbers', 'Peppers', 'Eggplant']
  },
  {
    name: 'Fall',
    vegetables: ['Pumpkins', 'Carrots', 'Brussels Sprouts', 'Kale']
  },
  {
    name: 'Winter',
    vegetables: ['Cabbage', 'Turnips', 'Winter Squash', 'Leeks']
  }
];

export default VegetablesPage;