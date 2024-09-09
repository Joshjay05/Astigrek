/* eslint-disable react/no-unescaped-entities */
const CenterTwo = () => {
  return (
    <div className="bg-white py-10 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Children's Day Center "Atsivrek"
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          The Children's Day Center "Atsivrek" has been serving the community
          since 2005, located in the Vilnius Naujininkai borough. The day
          center's mission is to provide social services for children aged 7 to
          18 years old, primarily those from social risk families or lacking
          parental care, as well as children from the "Turn to the Children"
          care home.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <p className="text-gray-700 text-lg mb-2">
            The center welcomes 15 children, referred by schools, the Child
            Rights Protection Service, and social workers. These children can
            stay at the center five days a week, where they are supervised and
            provided with free meals, including lunch. Additional services
            include access to bathing, laundry, clothing, hygiene products,
            toys, and stationery.
          </p>
          <p className="text-gray-700 text-lg mb-2">
            Social services offered include information, counseling, mediation
            and representation, and socio-cultural activities such as lesson
            preparation, artistic skill training (drawing, needlework,
            decoupage, origami), music classes, discussions, holiday events,
            trips, and physical activity promotion classes.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Individual Psychologist Consultations & Social Skills Development
          </h2>
          <p className="text-gray-700 text-lg mb-2">
            The center also offers individual psychologist consultations and
            group communication classes, psychosocial skills development,
            computer literacy training, and art therapy.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How to Apply for Services
          </h2>
          <p className="text-gray-700 text-lg mb-2">
            To apply for day care services, parents or guardians should contact
            the social worker in the Social Support Department of their
            registered location. Required documents include:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
            <li>Request-application for social services</li>
            <li>Need-assessment form</li>
            <li>Identity document of one parent/guardian (passport or ID)</li>
            <li>Child’s birth certificate</li>
            <li>Marriage/divorce/death certificate</li>
            <li>
              Application for admission to the day care center (filled on-site)
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Working Hours
          </h2>
          <p className="text-gray-700 text-lg mb-2">
            Mondays to Thursdays: 10:00 AM - 6:00 PM <br />
            Fridays: 10:00 AM - 5:00 PM <br />
            (Note: Pre-holiday days end 1 hour earlier.)
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Volunteer & Intern Opportunities
          </h2>
          <p className="text-gray-700 text-lg mb-2">
            Volunteers and interns are encouraged to contribute to the
            activities at the Children's Day Center, gaining valuable experience
            and skills while assisting in organizing programs for the children.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 text-lg">
            Head of VDC: Bronė Kairaitienė <br />
            Individual Care Worker <br />
            Phone:{" "}
            <a href="tel:+867317380" className="text-blue-600 underline">
              8 673 17380
            </a>{" "}
            <br />
            Email:{" "}
            <a
              href="mailto:dc.atsigrezk@gmail.com"
              className="text-blue-600 underline"
            >
              dc.atsigrezk@gmail.com
            </a>{" "}
            <br />
            Address: Brolių st. 4, Vilnius, LT-02157
          </p>
        </div>
      </div>
    </div>
  );
};

export default CenterTwo;
