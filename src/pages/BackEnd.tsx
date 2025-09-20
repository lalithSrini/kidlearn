import React from 'react';

function BackPage() {

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
    <h1 className="text-4xl font-bold mb-8">Backend Technologies</h1>
      
      <section id="lions" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frameworks</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/ohIAiuHMKMI?si=hdEe6EfPNLfryr2M"
              title="Nodejs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Node Js</h3>
            <p className="text-gray-700">
                 • Node.js is a free, open-source JavaScript runtime that runs on Windows, Mac, Linux, and more.<br />
  • It lets you execute JavaScript code outside of a web browser, enabling server-side development with JavaScript.<br />
  • Built on Chrome's V8 JavaScript engine, Node.js is designed for building scalable network applications efficiently.
</p>

            
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/fBzm9zja2Y8?si=nHBchkbJvTIv2Wyv"
              title="Express"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Express.js</h3>
            <p className="text-gray-700">
              Express.js is a minimal and flexible Node.js web application framework that provides a list of features for building web and mobile applications easily.<br />
               It simplifies the development of server-side applications by offering an easy-to-use API for routing, middleware, and HTTP utilities.
            </p>
          </div>
        </div>
      </section>

      
      <section id="cheethah" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Databases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/yE6tIle64tU?si=tjAdE-70HIjQMGO_"
              title=" Cascading Style Sheets"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2"> MySql</h3>
            <p className="text-gray-700">
            <p className="text-gray-700">
   • MySQL is a relational database management system<br />
  • MySQL is open-source<br />
  • MySQL is free<br />
  • MySQL is ideal for both small and large applications<br />
  • MySQL is very fast, reliable, scalable, and easy to use<br />
  • MySQL is cross-platform<br />
  • MySQL is compliant with the ANSI SQL standard
</p>

            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/q1V1A9ZcpKo?si=-ujFiwYugq4ieapz"
              title=" Cascading Style Sheets"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">MongoDB</h3>
            <p className="text-gray-700">
          MongoDB is used as a flexible, high-performance database for modern applications, particularly those handling large, rapidly changing, or unstructured data like mobile apps, web applications, and big data platforms. </p>
          </div>
        </div>
      </section>

      
     

      {/* <Quiz questions={animalQuestions} category="Animals" /> */}
    </div>
  );
}

export default BackPage;