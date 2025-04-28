import "./UseCases.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hubspotpng from "./hubspot.png";
import { useState } from "react";
import Let from "./Card.png";
import Smalik from "./smalikpng.png";


const data = [
    {
      title: "E-commerce Fashion Brand",
      text: "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months."
    },
    {
      title: "Local Restaurant Chain",
      text: "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic."
    },
    {
      title: "Healthcare Provider",
      text: "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings."
    },
    {
      title: "E-commerce Fashion Brand",
      text: "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months."
    },
    {
      title: "Local Restaurant Chain",
      text: "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic."
    },
    {
      title: "Healthcare Provider",
      text: "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings."
    }
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

const UseCases = () => {
  return (
    <div className={"usecases-mother-div"}>
      <Header />
    
      <div className={'img-and-proven-see'}>
        <img src={Hubspotpng}></img>

        <div className={'proven-see-how-div'}>
            <p className={'proven-success-stories'}>Proven Success <br />Stories</p>
            <p className={'see-how-digital-paragraph'}>See how innovative digital marketing <br /> strategies have transformed bussiness.<br />Whether through SEO,PPC,social media,or <br />web design,these use cases hightlite the <br />tangible impact of our work.Explore the <br />successes and envision what we can achieve <br />together.  </p>
        </div>
      </div>


      <div className="success-card">
      <div className="success-left">
        <span className="highlight-text">Featured Success Story</span>
        <h2>Scaling Success for a <br />Leading E-Commerce Brand</h2>
        <p>
          Through a comprehensive SEO and PPC strategy, we helped this e-commerce brand
          increase visibility, drive traffic, and boost sales.
        </p>
        <a href="#" className="read-more">
          <span className="arrow">➜</span> Read
        </a>
      </div>
      <div className="success-right">
        <div className="stat-box"><strong>200%</strong><br />increase in organic traffic</div>
        <div className="stat-box"><strong>150%</strong><br />rise in online sales</div>
        <div className="stat-box"><strong>75%</strong><br />reduction in cost-per-click (CPC)</div>
        <div className="stat-box"><strong>300%</strong><br />improvement in conversion rate</div>
      </div>
    </div>



    <div className={'all-success-stories-div'}>
        <p className={'all-success-stories-paragrah'}>All Success Stories</p>
        <p>Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies</p>
    </div>




    <div className="case-studies-container">
      {data.map((item, index) => (
        <div className="case-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <a href="#" className="learn-more">
            <span className="arrow">➜</span> Learn more
          </a>
        </div>
      ))}
    </div>


    <div className={'all-success-stories-div'}>
        <p className={'all-success-stories-paragrah'}>Testimonials</p>
        <p>Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies</p>
    </div>


    <TestimonialCarousel testimonials={testimonials} />



          <div className="let-photo-div">
            <img className="let-photo" src={Let} alt="" />
            <img className="smalik" src={Smalik} alt="" />
          </div>













      <Footer />
    </div>
  )
}

export default UseCases
