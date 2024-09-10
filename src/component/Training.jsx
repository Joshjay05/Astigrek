const Training = () => {
  return (
    <div className="bg-white py-10 px-6 lg:px-12 sm:mt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="lg:text-4xl font-bold text-gray-800 mb-6 text-center">
          Qualification Training
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Those who want to learn, contact{" "}
          <a
            href="mailto: informacija@vaikudienoscentras.org 
"
            className="text-blue-600 underline"
          >
            informacija@vaikudienoscentras.org
          </a>{" "}
          or call{" "}
          <a href="tel:+37068265969" className="text-blue-600 underline">
            +37068265969
          </a>
          .
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Fundamentals of Social Work
          </h2>
          <p className="text-gray-700 text-lg mb-2">
            Inaugural program for improving the professional competence of
            individual care personnel. Duration: <strong>40 ac.h</strong>.
          </p>
          <p className="text-gray-700 text-lg mb-2">
            Price: <strong>150 EUR</strong>.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Development of Positive Parenting Skills in Social Work with
            Families
          </h2>
          <p className="text-gray-700 text-lg mb-2">
            Program for improving the professional competence of social workers.
            Duration: <strong>4 p.m</strong>.
          </p>
          <p className="text-gray-700 text-lg mb-2">
            Price: <strong>80 EUR</strong>.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Working with Resistance and Aggression in Social Work Practice
          </h2>
          <p className="text-gray-700 text-lg mb-2">
            Program for improving the professional competence of social workers.
            Duration: <strong>4 p.m</strong>.
          </p>
          <p className="text-gray-700 text-lg mb-2">
            Price: <strong>80 EUR</strong>.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            The Adolescent - The Client of the Social Worker: How to Understand
            and Help?
          </h2>
          <p className="text-gray-700 text-lg">
            Program for improving the professional competence of social workers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Training;
