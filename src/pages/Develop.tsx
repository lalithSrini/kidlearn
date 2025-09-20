import React from 'react';

function DevPage() {

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
    <h1 className="text-4xl font-bold mb-8">Developments Tools</h1>
      
      <section id="lions" className="mb-12">
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/NMOdEHyMXBo?si=R6uMsJtB3mKNSdcRv"
              title="Nodejs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-2xl font-semibold mb-6">Android Studios</h3>
            <p className="text-gray-700">
                 Android Studio provides performance profilers so you can easily track your app's memory and CPU usage, find deallocated objects, locate memory leaks, optimize graphics performance, and analyze network requests.
</p>

            
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/7Kw-lrG7o1I?si=7xsskTB0Fss__VNK"
              title="Android"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">visual studio code</h3>
            <p className="text-gray-700">
              Visual Studio Code (VS Code) is a lightweight but powerful code editor developed by Microsoft. It supports multiple programming languages and frameworks, making it ideal for web, mobile, and cross-platform app development. </p>
          </div>
        </div>
      </section>

      
     

      
     

      {/* <Quiz questions={animalQuestions} category="Animals" /> */}
    </div>
  );
}

export default DevPage;