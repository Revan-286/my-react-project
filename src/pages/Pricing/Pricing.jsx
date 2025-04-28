import "./Pricing.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    content: "Content for Research and Strategy Development",
  },
  { id: 3, title: "Implementation", content: "Content for Implementation" },
  {
    id: 4,
    title: "Monitoring and Optimization",
    content: "Content for Monitoring and Optimization",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    content: "Content for Reporting and Communication",
  },
  {
    id: 6,
    title: "Continual Improvement",
    content: "Content for Continual Improvement",
  },
];

const testimonials = [
  {
    id: 1,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    text: "The team is professional, responsive, and truly cares about the success of our business.",
    name: "Jane Doe",
    title: "CEO at Creative Agency",
  },
  {
    id: 3,
    text: "Positivus helped our business grow our online presence and convert more leads. Highly recommended!",
    name: "Michael Lee",
    title: "Founder at Startup Inc.",
  },
];






const plans = [
  {
    name: "Basic Plan",
    price: "$500",
    period: "/month",
    features: [
      "Website optimization",
      "Social media setup and management (1 platform)",
      "Monthly progress report",
      "Email support",
      "Basic competitor analysis",
      "Initial SEO audit",
    ],
    highlighted: false,
  },
  {
    name: "Pro Plan",
    price: "$1000",
    period: "/month",
    features: [
      "Includes all from the Basic Plan",
      "Social media setup and management (up to 3 platforms)",
      "PPC ad campaign management",
      "Email and phone support",
      "On-page SEO improvements",
      "Monthly content recommendations",
    ],
    highlighted: true,
    badge: "Popular",
  },
  {
    name: "Elite Plan",
    price: "$2000",
    period: "/month",
    features: [
      "Includes all from the Pro Plan",
      "Website design and development",
      "Comprehensive SEO strategy",
      "Social media setup and management (up to 5 platforms)",
      "Content marketing strategy and implementation",
      "In-depth analytics and reporting",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (id) => {
        setOpenSection(openSection === id ? null : id);
    }


  return (
    <div className="pricing-mother-div">
      <Header />

      <div className="pricing-header">
        <p className="pricing-paragraph">Pricing</p>
        <p>
          Elevate Your Online Presence: Competitive Pricing <br /> for
          Exceptional Results
        </p>
      </div>

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.highlighted ? "highlighted" : ""}`}
          >
            {plan.badge && <div className="badge">{plan.badge}</div>}
            <h2>{plan.name}</h2>
            <p className="price">
              {plan.price}
              <span>{plan.period}</span>
            </p>
            <button className="get-started">Get Started</button>
            <button className="quote">Request a quote</button>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check">✔️</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>


      <div className={'frequantly-asked-questions'}>
        <p>Frequantly Asked <br />Questions</p>
      </div>



      <div className="accordion-container">
        {sections.map((section) => (
          <div key={section.id} style={{ marginBottom: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "50px",
                padding: "10px",
                backgroundColor:
                  openSection === section.id ? "#a6e22e" : "#e0e0e0",
                cursor: "pointer",
                borderRadius: "10px",
              }}
              onClick={() => toggleSection(section.id)}
            >
              <span style={{ fontWeight: "bold" }}>
                {section.id < 10 ? `0${section.id}` : section.id}{" "}
                {section.title}
              </span>
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                {openSection === section.id ? "−" : "+"}
              </span>
            </div>
            {openSection === section.id && (
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "5px",
                }}
              >
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>

    













      <Footer />
    </div>
  );
};

export default Pricing;