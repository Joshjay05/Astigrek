// import React from 'react';
import { useParams, Link } from "react-router-dom";
// import "./CategoryDetail.css";

const categoryDetails = {
  aging: {
    title: "Aging",
    content:
      "The dramatic growth in the number of adults aged 65 and older, combined with overall population aging, affects not only families and workplaces, but also health care and social service delivery systems. Meeting the needs and leveraging the contributions of an increasingly diverse older population presents both challenges and opportunities to social workers and other service providers.Find tools, information, and resources to enhance social workers’ capacity to support both older adults and family caregivers.",
    image: "/images/aging.jpg",
  },
  "behavioral-health": {
    title: "Behavioral Health",
    content:
      "Social work practice in behavioral health promotes well-being through by assessment, diagnosis, treatment, and prevention of mental illness, substance use, and other addictions. Social work practice in behavioral health incorporates knowledge of human behavior, sociology, psychiatry, psychology, and many other social science disciplines. Individual, group and family therapy are common treatment modalities. Social workers who provide behavioral health services may be required to be licensed or certified in their jurisdiction of practice. Behavioral health clinicians perform services in a variety of settings including private practice, hospitals, community mental health, primary care, treatment centers, and other agencies.",
    image: "/images/behavioral.jpg",
  },
  "child-welfare": {
    title: "Child Welfare",
    content:
      "Nurturing families and permanent connections are critical to a child’s well-being. While most parents want to do what is best for their families, they cannot always do it alone. Child welfare social workers specialize in building upon the strengths within a family and their community to help provide a safe and loving environment for their children. However, in some instances, social workers must intervene to protect children from harm.",
    image: "/images/child.jpg",
  },
  health: {
    title: "Health",
    content:
      "Social work is an integral component of the U.S. health care system. Social workers are present in settings across the health care continuum, providing services to individuals and families throughout the lifespan, and addressing the full range of bio-psychosocial issues that impact well-being. Social workers play a critical role in advocating for policies that reduce health disparities and improve access to health care, especially for vulnerable populations. Get tools, information, and resources to enhance social workers’ capacity to improve the health of patients, families and communities.",
    image: "/images/health.jpg",
  },
  "school-social-work": {
    title: "School Social Work",
    content:
      " Clinical social work is a specialty practice area of social work which focuses on the assessment, diagnosis, treatment, and prevention of mental illness, emotional, and other behavioral disturbances. Individual, group and family therapy are common treatment modalities. Social workers who provide these services are required to be licensed or certified at the clinical level in their state of practice. Clinical social workers perform services in a variety of settings including private practice, hospitals, community mental health, primary care, and agencies. NASW advocates for clinical social workers through the legislative and regulatory process.",
    image: "/images/school.jpg",
  },
  "ethnicity-race": {
    title: "Ethnicity & Race",
    content:
      "ENASW is committed to social justice for all and ending racism. Discrimination and prejudice directed against any group are damaging to the social, emotional, and economic well-being of the affected group and to society as a whole. NASW has a strong DE&I program that fosters inclusion and belonging among all national and chapter staff and volunteer leadership. We support three national committees on equity issues: the National Committee on Women's Issues, National Committee on Racial and Ethnic Diversity, and the National Committee on Gay, Lesbian, Bisexual and Transgender Issues. And our 55 chapters offer a wide range of programming through diverse taskforces, committees and partnerships. Learn how NASW is leading efforts to fight racism and racial violence.",
    image: "/images/ethnicity.jpg",
  },
};

const CategoryDetail = () => {
  const { category } = useParams(); // Get the category name from the URL
  const selectedCategory = categoryDetails[category] || {};

  return (
    <div className="category-detail-container flex flex-row-reverse">
      {/* Sidebar for navigation */}
      <div className="sidebar">
        <h3>Practice Areas</h3>
        <ul className="">
          {Object.keys(categoryDetails).map((cat, index) => (
            <li key={index} className="p-1">
              <Link to={`/practice/${cat}`}>{categoryDetails[cat].title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content section */}
      <div className="category-content">
        <h1>{selectedCategory.title}</h1>
        <img src={selectedCategory.image} alt={selectedCategory.title} />
        <p>{selectedCategory.content}</p>

        {/* Related categories section */}
        <div className="grid sm:grid-cols-1 lg:flex-row gap-4">
          <h2>Related Categories</h2>
          <div className="grid sm:grid-cols-1 lg:flex-row">
            {Object.keys(categoryDetails)
              .filter((cat) => cat !== category) // Exclude current category
              .slice(0, 3) // Show 3 related categories
              .map((cat, index) => (
                <Link
                  to={`/practice/${cat}`}
                  key={index}
                  className="related-card"
                >
                  <img
                    src={categoryDetails[cat].image}
                    alt={categoryDetails[cat].title}
                  />
                  <h4>{categoryDetails[cat].title}</h4>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
