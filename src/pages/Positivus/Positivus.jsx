import "./Positivus.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Photoone from "./Illustration.png";
import Amazon from "./amazon.png";
import Dribble from "./dribbble.png";
import Hubspot from "./hubspot.png";
import Notion from "./notion.png";
import Netflix from "./netflix.png";
import Zoom from "./zoom.png";
import { useState } from "react";
import Card1 from "./card1.png";
import Card2 from "./card2.png";
import Card3 from "./card3.png";
import Card4 from "./card4.png";
import Card5 from "./card5.png";
import Card6 from "./card6.png";
import Let from "./Card.png";
import Smalik from "./smalikpng.png";
import Line3 from "./Line 3.png";
import John from "./john.png";
import Jane from "./jane.png";
import Michael from "./michael.png";
import Emily from "./emily.png";
import Brian from "./brian.png";
import Sarah from "./sarah.png";
import Star from "./star.png";

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

const TestimonialCarousel = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-wrapper">
      <button onClick={prevSlide} className="arrow left">←</button>
      <div className="testimonial-card">
        <p className="testimonial-text">"{testimonials[current].text}"</p>
        <p className="testimonial-name">{testimonials[current].name}</p>
        <p className="testimonial-title">{testimonials[current].title}</p>
      </div>
      <button onClick={nextSlide} className="arrow right">→</button>
    </div>
  );
};

const Positivus = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="positivus-container">
      <Header />

      <div className="navigating-photo-one">
        <div>
          <p className="navigating">
            Navigating the digital landscape for success
          </p>
          <p className="our-digital-marketing">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div className="book-consultation">
            <p>Book a consultation</p>
          </div>
        </div>
        <div>
          <img className="photo-one" src={Photoone} alt="illustration" />
        </div>
      </div>

      <div className="imgs-part">
        <img src={Amazon} alt="Amazon" />
        <img src={Dribble} alt="Dribble" />
        <img src={Hubspot} alt="Hubspot" />
        <img src={Notion} alt="Notion" />
        <img src={Netflix} alt="Netflix" />
        <img src={Zoom} alt="Zoom" />
      </div>

      <div className="services-and-at-our-digital">
        <p className="services">Services</p>
        <p>
          At our digital marketing agency, we offer a range of services to <br />
          help businesses grow and succeed online.
        </p>
      </div>

      <div className="card-one-and-card-two">
        <img className="card-one" src={Card1} alt="" />
        <img className="card-two" src={Card2} alt="" />
      </div>
      <div className="card-three-and-card-four">
        <img className="card-one" src={Card3} alt="" />
        <img className="card-two" src={Card4} alt="" />
      </div>
      <div className="card-fife-and-card-six">
        <img className="card-one" src={Card5} alt="" />
        <img className="card-two" src={Card6} alt="" />
      </div>

      <div className="let-photo-div">
        <img className="let-photo" src={Let} alt="" />
        <img className="smalik" src={Smalik} alt="" />
      </div>

      <div className="case-explore">
        <p className="case-studies">Case Studies</p>
        <p className="explore-real">
          Explore Real-Life Examples of our Proven Digital Marketing <br />
          Success through Our Case Studies
        </p>
      </div>

      <div className="learns-mores-top">
        <div>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a href="#">Learn more</a>
        </div>

        <img src={Line3} alt="" />

        <div>
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first-page ranking and 200% increase in traffic.
          </p>
          <a href="#">Learn more</a>
        </div>

        <img src={Line3} alt="" />

        <div>
          <p>
            For a national retail chain, we created a social media campaign that
            increased followers by 25% and online sales by 20%.
          </p>
          <a href="#">Learn more</a>
        </div>
      </div>

      <div className="our-working-and-step-by-step">
        <p className="our-working-process">Our Working Process</p>
        <p>
          Step-by-Step Guide to Achieving <br /> Your Business Goals
        </p>
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

      <div className="team-div">
        <p className="team">Team</p>
        <p>
          Meet the skilled and experienced team behind our <br /> successful
          digital marketing strategies
        </p>
      </div>

      <div className="john-jane-michael">
        <img className="johns" src={John} alt="John" />
        <img className="johns" src={Jane} alt="Jane" />
        <img className="johns" src={Michael} alt="Michael" />
      </div>
      <div className="emily-brian-sarah">
        <img className="johns" src={Emily} alt="Emily" />
        <img className="johns" src={Brian} alt="Brian" />
        <img className="johns" src={Sarah} alt="Sarah" />
      </div>

      <div className="see-all-big-div">
        <div className="see-all-div">
          <p className="see-all-teams">See all team</p>
        </div>
      </div>

      <div className="team-div">
        <p className="team">Testimonials</p>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn
          More about Our Digital Marketing Services
        </p>
      </div>

      <TestimonialCarousel testimonials={testimonials} />



      <div className="team-div">
        <p className="team">Contact Us</p>
        <p>
        Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs
        </p>
      </div>

      <div className={'say-hi-get-quote'}>

        <div>
        <label className={'checkbox-div'}>
            <input className={'checkbox-one'} type="checkbox" />
            <p>Say Hi</p>
            <input className={'checkbox-two'} type="checkbox" />
            <p>Get</p>
        </label>

        <label>
          Name <br />
          <input className={'name-email'} type="text" placeholder={'Name'}  />
        </label>

        </div>

        <br />

        <div>
          
        <label className={'email-input'}>
          Email* <br />
          <input className={'name-email'} type="text" placeholder={'Email'}  />
        </label>
        </div>

        <div className={'textarea'}>
          <label>
            Message* <br />
            <textarea name="message" id="message " placeholder={"Message"}></textarea>
          </label>
        </div>

        <div className={'send-message-input'}>
          <p>Send Message</p>
        </div>

        <div className={'star-div'}>
          <img className={'star-img'} src={Star}></img>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Positivus;