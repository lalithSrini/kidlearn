export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
  image?: string; // new image field
}

export const allQuestions: Question[] = [
  {
    id: 1,
    category: "Animals",
    question: "What is the largest land animal?",
    options: ["African Elephant", "White Rhinoceros", "Hippopotamus", "Giraffe"],
    correctAnswer: "African Elephant",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJLwERoOcxUaWy77zWGKffIAou6u4qprvF94FizspAWTDcWnXa-LlA7D-KuadBbR1Xr6etcGjdpYIa2o5npl8ZH5sTZO3iZe89TCCV0A"
  },
  {
    id: 2,
    category: "Animals",
    question: "Which big cat is known as the 'King of the Jungle'?",
    options: ["Tiger", "Lion", "Leopard", "Jaguar"],
    correctAnswer: "Lion",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mY_cvo6-XP-Fivsf9qUh_gIIDBZunOhq2Q&s"
  },
  {
    id: 3,
    category: "Animals",
    question: "What animal is known for having a long neck and eating leaves from tall trees?",
    options: ["Elephant", "Kangaroo", "Giraffe", "Zebra"],
    correctAnswer: "Giraffe",
    image: "https://images.unsplash.com/photo-1534567110243-8875d64ca8ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2lyYWZmZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    category: "Animals",
    question: "Which of these animals is known for its black and white stripes?",
    options: ["Zebra", "Tiger","Giraffe","Leopard"],
    correctAnswer: "Zebra",
    image: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WmVicmF8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5,
    category: "Animals",
    question: "What animal is known for storing food in its cheeks?",
    options: ["Squirrel","Rabbit","Hamster","Chipmunk"],
    correctAnswer: "Hamster",
    image: "https://images.unsplash.com/photo-1577099608295-f11bbd6fed32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhhbXN0ZXJ8ZW58MHx8MHx8fDA%3Ds"
  },
  {
    id: 6,
    category: "Aquatic",
    question: "Which of the following is the fastest fish in the ocean",
    options: ["Shark","Swordfish","Tuna","Dolphin"],
    correctAnswer: "Swordfish",
    image: "https://plus.unsplash.com/premium_photo-1708433273440-da1b1601212f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3dvcmRmaXNofGVufDB8fDB8fHww"
  },
  {
    id: 7,
    category: "Aquatic",
    question: "What is the largest species of jellyfish?",
    options: ["Lion's Mane Jellyfish","Moon Jellyfish","Box Jellyfish","Sea Nettle"],
    correctAnswer: "Lion's Mane Jellyfish",
    image: "https://plus.unsplash.com/premium_photo-1693723595968-b7d410643cbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGlvbidzJTIwTWFuZSUyMEplbGx5ZmlzaHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 8,
    category: "Aquatic",
    question: "Which animal is known to be able to regenerate its limbs?",
    options: [" Octopus","Sea Star","Whale","Shark"],
    correctAnswer: "Sea Star",
    image: "https://images.unsplash.com/photo-1534829942-6f3792b99514?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    category: "Aquatic",
    question: "What is the primary food source for most adult sea turtles?",
    options: ["Seaweed","Fish","Jellyfish","Shrimp"],
    correctAnswer: "Jellyfish",
    image: "https://plus.unsplash.com/premium_photo-1693723595870-2b8bad09b4c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SmVsbHlmaXNofGVufDB8fDB8fHww"
  },
  {
    id: 10,
    category: "Aquatic",
    question: "Which of these is a mammal that lives underwater?",
    options: ["Shark","Dolphin","Seahorse","Squid"],
    correctAnswer: "Dolphin",
    image: "https://plus.unsplash.com/premium_photo-1661876281967-bb7301964945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RG9scGhpbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 11,
    category: "Birds",
    question: "Which bird is known for its colorful feathers and ability to mimic sounds?",
    options: ["Peacock", "Parrot", "Sparrow", "Eagle"],
    correctAnswer: "Parrot",
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFycm90fGVufDB8fDB8fHww"
  },
  {
    id: 12,
    category: "Birds",
    question: "Which bird is  the fastest in the world?",
    options: ["Eagle", "Peregrine Falcon", "Ostrich", "Hawk"],
    correctAnswer: "Peregrine Falcon",
    image: "https://plus.unsplash.com/premium_photo-1664297692493-95729e262e92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGVyZWdyaW5lJTIwRmFsY29ufGVufDB8fDB8fHww"
  },
  {
    id: 13,
    category: "Birds",
    question: "What bird is known for its long migration from the northern to southern hemispheres?",
    options: ["Swallow", "Penguin", "Swan", "Duck"],
    correctAnswer: "Swallow",
    image: "https://images.unsplash.com/photo-1613492697585-e9c360e39b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3dhbGxvd3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 14,
    category: "Birds",
    question: "Which bird is known for laying the largest eggs?",
    options: ["Ostrich", "Chicken", "Eagle", "Penguin"],
    correctAnswer: "Ostrich",
    image: "https://images.unsplash.com/photo-1569979227661-459bbb0ebe84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3N0cmljaHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 15,
    category: "Birds",
    question: "Which bird is known to fly at the highest altitude?",
    options: ["Albatross", "Vulture", "Eagle", "Condor"],
    correctAnswer: "Albatross",
    image: "https://images.unsplash.com/photo-1552243048-431d0c4e1bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxiYXRyb3NzfGVufDB8fDB8fHww"
  },
  {
    id: 16,
    category: "Vegetables",
    question: "Which vegetable is known for its orange color and is rich in vitamin A?",
    options: ["Carrot", "Broccoli", "Spinach", "Cucumber"],
    correctAnswer: "Carrot",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2Fycm90fGVufDB8fDB8fHww"
  },
  {
    id: 17,
    category: "Vegetables",
    question: "Which vegetable is a key ingredient in making guacamole?",
    options: ["Tomato", "Cucumber", "Avocado", "Onion"],
    correctAnswer: "Avocado",
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXZvY2Fkb3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 18,
    category: "Vegetables",
    question: "Which vegetable is known for its green color and is often used in salads?",
    options: ["Lettuce", "Potato", "Carrot", "Pea"],
    correctAnswer: "Lettuce",
    image: "https://images.unsplash.com/photo-1640958904159-51ae08bd3412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 19,
    category: "Vegetables",
    question: "Which vegetable is known for being a rich source of potassium and is often used in fries?",
    options: ["Tomato", "Cucumber", "Potato", "Onion"],
    correctAnswer: "Potato",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG90YXRvfGVufDB8fDB8fHwwo"
  },
  {
    id: 20,
    category: "Vegetables",
    question: "Which vegetable is often used in soups and has a strong aroma when cooked?",
    options: ["Garlic", "Broccoli", "Cabbage", "Onion"],
    correctAnswer: "Onion",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T25pb258ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 21,
    category: "Flowers",
    question: "Which flower is known for its strong fragrance and is often white?",
    options: ["Jasmine", "Rose", "Tulip", "Daffodil"],
    correctAnswer: "Jasmine",
    image: "https://images.unsplash.com/photo-1612380635121-411eda9ecbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmFzbWluZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 22,
    category: "Flowers",
    question: "Which flower blooms from a bulb and comes in many colors, often seen in spring?",
    options: ["Tulip", "Lily", "Marigold", "Orchid"],
    correctAnswer: "Tulip",
    image: "https://images.unsplash.com/photo-1586968295564-92fd7572718b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHVsaXB8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 23,
    category: "Flowers",
    question: "Which flower is associated with peace and is commonly white?",
    options: ["Lily", "Rose", "Sunflower", "Hibiscus"],
    correctAnswer: "Lily",
    image: "https://images.unsplash.com/photo-1561897519-6e4fbd1fbc41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGlseXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 24,
    category: "Flowers",
    question: "Which flower is bright yellow and faces the sun?",
    options: ["Sunflower", "Marigold", "Lotus", "Daisy"],
    correctAnswer: "Sunflower",
    image: "https://images.unsplash.com/photo-1533598313300-ac574e6dd10d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 25,
    category: "Flowers",
    question: "Which flower is sacred in many cultures and grows in water?",
    options: ["Lotus", "Rose", "Tulip", "Lavender"],
    correctAnswer: "Lotus",
    image: "https://plus.unsplash.com/premium_photo-1664303754150-7a776a1f28bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG90dXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 26,
    category: "Vehicles",
    question: "Which vehicle has two wheels and is powered by pedaling?",
    options: ["Bicycle", "Car", "Bus", "Scooter"],
    correctAnswer: "Bicycle",
    image: "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 27,
    category: "Vehicles",
    question: "Which vehicle is used for public transport and carries many passengers?",
    options: ["Bus", "Car", "Bike", "Rickshaw"],
    correctAnswer: "Bus",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QnVzfGVufDB8fDB8fHww"
  },
  {
    id: 28,
    category: "Vehicles",
    question: "Which vehicle is commonly used by families and runs on four wheels?",
    options: ["Car", "Helicopter", "Train", "Bicycle"],
    correctAnswer: "Car",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2FyfGVufDB8fDB8fHww"
  },
  {
    id: 29,
    category: "Vehicles",
    question: "Which vehicle flies in the sky and transports people or goods over long distances?",
    options: ["Airplane", "Ship", "Car", "Bike"],
    correctAnswer: "Airplane",
    image: "https://images.unsplash.com/photo-1523833082115-1e8e294bd14e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWlycGxhbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 30,
    category: "Vehicles",
    question: "Which vehicle runs on tracks and is used for long-distance land travel?",
    options: ["Train", "Bus", "Bicycle", "Scooter"],
    correctAnswer: "Train",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRyYWlufGVufDB8fDB8fHww"
  },
  {
    id: 31,
    category: "Fruits",
    question: "Which fruit is yellow in color and high in potassium?",
    options: ["Banana", "Apple", "Orange", "Grapes"],
    correctAnswer: "Banana",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmFuYW5hfGVufDB8fDB8fHww"
  },
  {
    id: 32,
    category: "Fruits",
    question: "Which fruit is red and often associated with keeping the doctor away?",
    options: ["Apple", "Pear", "Mango", "Kiwi"],
    correctAnswer: "Apple",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFwcGxlfGVufDB8fDB8fHww"
  },
  {
    id: 33,
    category: "Fruits",
    question: "Which fruit is known for its spiky outer skin and sweet yellow inside?",
    options: ["Pineapple", "Watermelon", "Papaya", "Coconut"],
    correctAnswer: "Pineapple",
    image: "https://images.unsplash.com/photo-1587883012610-e3df17d41270?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGluZUFwcGxlfGVufDB8fDB8fHww"
  },
  {
    id: 34,
    category: "Fruits",
    question: "Which fruit is commonly used to make orange juice?",
    options: ["Orange", "Lemon", "Grapefruit", "Tangerine"],
    correctAnswer: "Orange",
    image: "https://plus.unsplash.com/premium_photo-1675667408018-3b64dbc55db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JhbmdlfGVufDB8fDB8fHww"
  },
  {
    id: 35,
    category: "Fruits",
    question: "Which small purple or green fruit grows in bunches on vines?",
    options: ["Grapes", "Blueberries", "Cherries", "Dates"],
    correctAnswer: "Grapes",
    image: "https://plus.unsplash.com/premium_photo-1666270423730-9af384b9cb0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JhcGVzfGVufDB8fDB8fHww"
  },  
  {
    id: 41,
    category: "Math",
    question: "How many apples are present in he above image?",
    options: ["10", "20", "6", "7"],
    correctAnswer: "6",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOvt3dqd8Nx6rNGzRu8bFUMaZtanm-3rI-w&s"
  },
  {
    id: 36,
    category: "Math",
    question: 'How many grapes are present in he above image?',
    options: ['9', '12', '13', '14'],
    correctAnswer: '9',
    image:"https://content.lessonplanet.com/resources/thumbnails/177674/large/cgrmlwnvbnzlcnqymdezmdmzmc0ymzywos0xytz0mxlzlmpwzw.jpg?1414276004",
  },
  {
    id: 37,
    category: "Math",
    question: 'What is 9 × 3?',
    options: ['27', '18', '21', '24'],
    correctAnswer: '27',
  },
  {
    id: 38,
    category: "Math",
    question: 'What is the square root of 64?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
  },
  {
    id: 39,
    category: "Math",
    question: 'What is 15 - 6?',
    options: ['9', '8', '7', '6'],
    correctAnswer: '9',
  },  
];
