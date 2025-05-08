import React from 'react';

function BirdsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Birds of the World</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Birds of Prey</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1611689342806-0863700ce1e4"
              alt="Eagle"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Eagles</h3>
            <p className="text-gray-700">
              Eagles are powerful birds of prey known for their excellent eyesight, strong talons, and impressive
              wingspan. They are skilled hunters and represent freedom in many cultures.
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/2P0VCMYZenw?si=CSGly36THTf06aqR"
              title="Eagle Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Eagle Behavior</h3>
            <p className="text-gray-700">
              Watch these majestic birds in action as they soar through the skies and demonstrate their hunting prowess.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Exotic Birds</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1623607631063-bf81caffcaa9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Macaws"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Macaws</h3>
            <p className="text-gray-700">
              Known for their vibrant colors and intelligence, macaws are among the most striking parrots in the world.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1572877183903-f6f33bbfa7c5?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Peacock"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Peacocks</h3>
            <p className="text-gray-700">
              Male peacocks are famous for their spectacular tail displays used to attract mates.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1591198936750-16d8e15edb9e"
              alt="Hummingbird"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Hummingbirds</h3>
            <p className="text-gray-700">
              These tiny birds can hover in place and are the only birds that can fly backwards.
            </p>
          </div>
        </div>
      </section>


      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Forest Birds</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1552727131-5fc6af16796d?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Toucan"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Toucan</h3>
            <p className="text-gray-700">
            Toucans are colorful, tropical birds best known for their large, vibrant bills that can be almost as long as their bodies.
           </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1683090565588-2cc392f0148d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Woodpecker"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Woodpecker</h3>
            <p className="text-gray-700">
            Woodpeckers are fascinating birds known for their unique habit of pecking at tree trunks with their strong, chisel-like beaks.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1662867146017-7df454f67f08?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hornbill"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Hornbill</h3>
            <p className="text-gray-700">
            Hornbills are striking birds known for their large, curved bills and the distinctive casque (a helmet-like structure) on top of their beaks. 
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6"> Wetland & Water Birds</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1595344253433-6baa8e8798f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Flamingo"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Flamingo</h3>
            <p className="text-gray-700">
            Flamingos are elegant wading birds known for their long, slender legs, graceful necks, and distinctive pink or reddish feathers. 
           </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1617344300322-516f431ff532?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Heron"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Heron</h3>
            <p className="text-gray-700">
            Herons are large, long-legged wading birds commonly found near freshwater habitats like lakes, rivers, and marshes.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://images.unsplash.com/photo-1521730365094-d6978fa2ac8d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Duck"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Duck</h3>
            <p className="text-gray-700">
            Ducks are versatile, water-loving birds found in a variety of environments, including ponds, lakes, rivers, and marshes.
            </p>
          </div>
        </div>
      </section>


      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Polar Birds</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1551415923-a2297c7fda79?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Penguin"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Penguin</h3>
            <p className="text-gray-700">
            Penguins are flightless birds that are uniquely adapted to life in the water. 
            Found mostly in the Southern Hemisphere, especially in Antarctica,
            penguins are excellent swimmers, using their wings like flippers to propel themselves through the water at impressive speeds.
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/855Al0-VMEo?si=eAcRPMwJxV4VHFdb"
              title="Penguin Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Penguin Behavior</h3>
            <p className="text-gray-700">
            Learn about the environmental threats penguins face, including climate change and habitat loss.
            The documentary explores how these adorable birds adapt and survive in some of the harshest conditions on Earth.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default BirdsPage;