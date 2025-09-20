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

     
      
      <section id="cheethah" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Python Programming</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D12AQGgKjnYU0mUyw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693994613077?e=2147483647&v=beta&t=NPsWxw9oXt5IiZ8urQ188msw-Hw4Bqm-wye6p2JFZqY"
              alt="Cheetah"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Python</h3>
            <p className="text-gray-700">
            Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.<br />
  • Web development (server-side)<br />
  • Software development<br />
  • Mathematics<br />
  • System scripting
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.youtube.com/embed/g4Ffdh41vRQ?si=bP9UFkx6tHbxOxsY"
              title="Cheetah Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Complete Python Programming Roadmap (Zero to Expert)</h3>
            <p className="text-gray-700">
            Python in a simple and beginner-friendly way, explaining concepts step by step with clear notes for quick learning and practice questions to test your understanding, making it an ideal resource to build a strong foundation in Python whether you’re completely new to coding or looking to improve your skills.
            </p>
          </div>
        </div>
      </section>

      <section id="monkey" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Java Programming</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://www.finoit.com/wp-content/uploads/2022/10/top-java-use-cases.jpg"
              alt="Java"
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Java</h3>
            <p className="text-gray-700">
           Java is a popular and powerful programming language, created in 1995.<br />
  It is owned by Oracle, and more than 3 billion devices run Java.<br /><br />
  It is used for:<br />
  • Mobile applications (specially Android apps)<br />
  • Desktop applications<br />
  • Web applications<br />
  • Web servers and application servers<br />
  • Games<br />
  • Database connection<br />
  • And much, much more!
            </p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src = "https://www.youtube.com/embed/BGTx91t8q50?si=5eZCt4lm0dCE_loj"
              title="Java"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mb-2">Java</h3>
            <p className="text-gray-700">
            Java from the ground up in a clear and structured way, covering the core concepts with easy-to-follow notes and practical questions that help you apply what you learn, making it a great resource for anyone starting with Java or wanting to strengthen their programming basics.
            </p>
          </div>
        </div>
      </section>

      {/* <Quiz questions={animalQuestions} category="Animals" /> */}
    </div>
  );
}

export default CPage;