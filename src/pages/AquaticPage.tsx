import React from 'react';

function AquaticPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <h1 className="text-4xl font-bold mb-8">Aquatic Life</h1>

      <section id="ocean-ecosystems" className="mb-12 ">
        <div className="bg-white rounded-lg shadow-md p-6 ">
          <h2 className="text-2xl font-semibold mb-6">Ocean Ecosystems</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1661841439995-1706237c83dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coral Reef"
                className="rounded-lg mb-4 w-full h-64 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Coral Reefs</h3>
              <p className="text-gray-700">
                Coral reefs are diverse underwater ecosystems that provide habitat for countless marine species.
                They are often called the "rainforests of the sea" due to their rich biodiversity.
              </p>
            </div>
            <div>
              <iframe
                className="w-full h-64 rounded-lg mb-4"
                src="https://www.youtube.com/embed/J2BKd5e15Jc"
                title="Coral Reef Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-xl font-semibold mb-2">Life on the Reef</h3>
              <p className="text-gray-700">
                Explore the fascinating world of coral reefs and learn about the incredible variety of life they support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="marine-mammals" className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Marine Mammals</h2>
          <img
            src="https://plus.unsplash.com/premium_photo-1661847613093-bbb6d1c0f73a?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Humpback Whale"
            className="rounded-lg mb-4 w-full h-64 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Whales</h3>
          <p className="text-gray-700">
            Whales are the largest animals on Earth. These magnificent creatures are known for their intelligence,
            complex social structures, and haunting songs that can travel for miles underwater.
          </p>
        </div>
        <div id="deep-sea" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Deep Sea Creatures</h2>
          <img
            src="https://images.unsplash.com/photo-1545671913-b89ac1b4ac10"
            alt="Deep Sea Creature"
            className="rounded-lg mb-4 w-full h-64 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Mysterious Depths</h3>
          <p className="text-gray-700">
            The deep ocean remains one of Earth's last frontiers. New species are discovered regularly in these
            dark waters, where creatures have evolved fascinating adaptations to survive.
          </p>
        </div>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div id="frogs" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Amphibians</h2>
          <img
            src="https://images.unsplash.com/photo-1682097548906-88eff998ae17?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Frogs"
            className="rounded-lg mb-4 w-full h-64 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Frogs</h3>
          <p className="text-gray-700">
          Frogs are small, tailless amphibians known for their powerful hind legs, bulging eyes, and croaky calls. 
          Found in a variety of habitats ranging from tropical rainforests to temperate ponds, frogs play a vital role 
          in maintaining ecological balance by feeding on insects and serving as prey for many animals.
           Their permeable skin allows them to absorb water and oxygen, making them highly sensitive to environmental changes.
            Frogs undergo a fascinating transformation from tadpoles to adults through metamorphosis, symbolizing growth and adaptability.   
          </p>
        </div>
        <div id="mollusks" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Mollusks</h2>
          <img
            src="https://plus.unsplash.com/premium_photo-1723733104322-827186b5eb9e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Octopus"
            className="rounded-lg mb-4 w-full h-64 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Octopus</h3>
          <p className="text-gray-700">
            Octopuses are highly intelligent, soft-bodied marine animals known for their eight flexible arms lined with suction cups. Belonging to the class Cephalopoda, they possess incredible problem-solving skills, excellent eyesight, and the ability to change color and texture to blend into their surroundings. This camouflage helps them evade predators and sneak up on prey. Octopuses are also escape artists, often slipping through tiny openings thanks to their boneless bodies. Found in oceans around the world, they play a key role in marine ecosystems.
            Their fascinating behavior and alien-like appearance make them one of the most intriguing creatures of the sea.
          </p>
        </div>
      </section>

      <section id="echinoderms" className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Echinoderms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1721330271062-b78de2227fa3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sea urchins"
                className="rounded-lg mb-4 w-full h-64 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sea urchins</h3>
              <p className="text-gray-700">
              Sea urchins are small, spiny marine animals found on the ocean floor, often in rocky or coral reef environments. 
              They have round, hard shells called "tests," which are covered in movable spines used for protection and movement. 
              Despite their slow pace, sea urchins play a vital role in marine ecosystems by grazing on algae, 
              helping maintain the balance of coral reefs. They move using tube feet and spines, and some species have specialized 
              jaws called "Aristotle's lantern" to scrape food off rocks. 
              While some sea urchins are edible and considered a delicacy in many cultures, 
              others can be venomous and should be handled with care.
              </p>
            </div>
            <div>
              <iframe
                className="w-full h-64 rounded-lg mb-4"
                src="https://www.youtube.com/embed/ihvKwVDw8Pc?si=QapxBZDB-vWwTwjf"
                title="Sea urchins Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-xl font-semibold mb-2">Life of the Sea urchins</h3>
              <p className="text-gray-700">
                Explore the fascinating world, Sea urchins gather in large enough numbers to form an army.
                sea urchins moving together in massive numbers, almost like an army. It's a surprising sight, especially since we often think of sea urchins as slow, solitary creatures.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AquaticPage;