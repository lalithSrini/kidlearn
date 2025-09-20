import React from 'react';

function CPage() {

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <h1 className="text-4xl font-bold mb-8">Programming Languages</h1>
      
      <section id="lions" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">C Language</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/051/336/371/small_2x/c-programming-transparent-logo-free-png.png"
              alt="Clanguage"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">C</h3>
            <p className="text-gray-700">
              C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.

It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.

C is strongly associated with UNIX, as it was developed to write the UNIX operating system.


            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/irqbmMNs2Bo?si=fB_AVXqqAmrIK7LZ"
              title="Lion Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">C Language Tutorial for Beginners</h3>
            <p className="text-gray-700">
             You should watch “C Language Tutorial for Beginners (with Notes & Practice Questions)” because it gives you a complete and structured introduction to C programming, starting from the basics and moving step by step with clear explanations, notes for quick revision, and practice questions to strengthen your understanding—making it perfect whether you’re a beginner trying to build strong fundamentals or someone revisiting C to sharpen your coding skills.
            </p>
          </div>
        </div>
      </section>

      <section id="endangered-species" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Endangered Species</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Umhpbm98ZW58MHx8MHx8fDA%3D"
              alt="Rhino"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">White Rhinoceros</h3>
            <p className="text-gray-700">
              The white rhinoceros is one of the largest land mammals. Despite their name, they are actually gray in color.
              They are heavily threatened by poaching for their horns.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://images.unsplash.com/photo-1581281863883-2469417a1668?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R29yaWxsYXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Gorilla"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Mountain Gorilla</h3>
            <p className="text-gray-700">
              Mountain gorillas are gentle giants that share 98% of their DNA with humans. They live in the mountain forests
              of central Africa and are endangered due to habitat loss.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGlnZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Tiger"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Bengal Tiger</h3>
            <p className="text-gray-700">
              The Bengal tiger is one of the most magnificent big cats, known for its distinctive orange coat with black stripes.
              Each tiger's stripe pattern is unique, like human fingerprints.
            </p>
          </div>
        </div>
      </section>

      <section id="reptiles" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Reptiles</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1661843714194-62e7bc511d8b?q=80&w=1211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Komodo Dragon"
            className="rounded-lg mb-4 w-full h-72 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Komodo Dragons</h3>
          <p className="text-gray-700 mb-4">
            Komodo dragons are the largest living species of lizard in the world. These powerful predators can grow up to 
            10 feet in length and weigh up to 150 pounds. They are found exclusively on several islands in Indonesia.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Habitat</h4>
              <p>Indonesian islands</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Diet</h4>
              <p>Carnivorous - They hunt deer, pigs, and even water buffalo</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cheethah" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Cheetah</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1664304362237-8040f0ecac98?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q0hFRVRBSFN8ZW58MHx8MHx8fDA%3D"
              alt="Cheetah"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Cheetah</h3>
            <p className="text-gray-700">
            The cheetah (Acinonyx jubatus) is renowned as the fastest land animal, capable of accelerating from 0 to 70 km/h in
             just two seconds. This incredible speed is facilitated by its lightweight frame, long legs, and semi-retractable 
             claws that provide excellent traction. Unlike other big cats, cheetahs are diurnal hunters, primarily active during the day.
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/k-Me1T9Pz40"
              title="Cheetah Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Cheetah Behavior</h3>
            <p className="text-gray-700">
            You should watch this video because it shows a cheetah running in slow motion, 
            letting you see every powerful movement as it sprints. It's short, super clear, 
            and beautifully filmed by BBC Earth. You'll get to understand why cheetahs are the fastest animals on land, 
            and it's just really cool to watch how their bodies work in such an amazing way.
            </p>
          </div>
        </div>
      </section>

      <section id="monkey" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Monkey</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1531989417401-0f85f7e673f8?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW9ua2V5fGVufDB8fDB8fHww"
              alt="Monkey"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Monkey</h3>
            <p className="text-gray-700">
            Monkeys are intelligent, playful animals known for their agility and curiosity.
             They belong to the primate family and are closely related to humans.
              There are two main types: Old World monkeys (like baboons and macaques, found in Africa and Asia) 
              and New World monkeys (like capuchins and howler monkeys, found in Central and South America).
               Monkeys use their hands and tails to climb, grab food, and interact with each other. 
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src = "https://www.youtube.com/embed/icd_ob8UWgQ?si=c18JTtPp7nxMeUia"
              title="Monkey Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Monkey Behavior</h3>
            <p className="text-gray-700">
            You should watch this video if you want to learn faster and understand complex topics better.
             It explains the Feynman Technique, a proven method to boost comprehension by simplifying concepts,
              teaching them to others, and refining your knowledge. It's short, practical, and offers clear examples,
               making it useful for students, professionals, or anyone tackling new subjects. If you're struggling with
                retention or clarity, this could help you study smarter.
            </p>
          </div>
        </div>
      </section>

      {/* <Quiz questions={animalQuestions} category="Animals" /> */}
    </div>
  );
}

export default CPage;