import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Services.css";
import Videoman from "./_1 1.png";
import Line4 from "./Line 3.png";

const steps = [
  {
    number: "01",
    title: "Website Audit & Analysis",
    description:
      "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.",
  },
  {
    number: "02",
    title: "Keyword Research & Strategy",
    description:
      "Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic.",
  },
  {
    number: "03",
    title: "On-Page Optimization",
    description:
      "We optimize your website’s structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance.",
  },
  {
    number: "04",
    title: "Content Creation & Optimization",
    description:
      "High-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms.",
  },
  {
    number: "05",
    title: "Link Building",
    description:
      "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings.",
  },
  {
    number: "06",
    title: "Monitoring & Reporting",
    description:
      "We continuously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to maintain and improve your results.",
  },
];

const Services = () => {
  return (
    <div className={"services-top-div-mother"}>
      <Header />

      <div className={"expert-digital-marketing-services"}>
        <img src={Videoman}></img>
        <div className={"cibling-export"}>
          <p className={"export-digital"}>
            Expert Digital <br />
            Marketing <br />
            Services
          </p>
          <p className={"unlock-your"}>
            Unlock your business full potential with <br />
            tallored strategies designed to drive growth <br />
            and deliver rseults.
          </p>
        </div>
      </div>

      <div className={"sarch-seo-div-top"}>
        <div className={"search-seo-div"}>
          <div>
            <p className={"optimization-div"}>
              Search engine <br />
              optimization
            </p>
          </div>

          <div>
            <p>
              SEO is the process of improving your website's visibility on
              search <br />
              Google.By optimizating your content and site structure, we help
              your business rank <br />
              higher in search results, driving more organic traffic and
              potential customers.
            </p>

            <div className={"boost-my-ramkings"}>
              <p>Boost My Ramkings</p>
            </div>
          </div>
        </div>
      </div>

      <div className={"step-by-step-div"}>
        <p className={"step-by-step-paragraph"}>How We Work:SEO Process</p>
        <p>
          Our step-by-step SEO process ensures your website <br />
          ranks higher, attracts more traffic and drives lasting <br />
          results.
        </p>
      </div>

      <div className="seo-steps">
        {steps.map((step, index) => (
          <div className="seo-card" key={index}>
            <div className="seo-number">{step.number}</div>
            <div>
              <h3 className="seo-title">{step.title}</h3>
              <p className="seo-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={"step-by-step-div"}>
        <p className={"use-cases-paragraph"}>Use Cases</p>
        <p>
          Explore Real-Life Exampless of Our Proven Digital Marketing <br />
          Success through Our Case Studies
        </p>
      </div>

      <div className="learns-mores-top-div">
        <div>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign
            thatresulted in a 50% increase in website traffic and a 25% increase
            in sales.
          </p>
          <a href="#">Learn more</a>
        </div>

        <img src={Line4} alt="" />

        <div>
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first-page ranking and 200% increase in traffic.
          </p>
          <a href="#">Learn more</a>
        </div>

        <img src={Line4} alt="" />

        <div>
          <p>
            For a national retail chain, we created a social media campaign that
            increased followers by 25% and online sales by 20%.
          </p>
          <a href="#">Learn more</a>
        </div>
      </div>

      <div className={"step-by-step-div"}>
        <p className={"our-other-services"}>Our Other Services</p>
        <p>
          At our digital marketing agency, we offer range of services to <br />
          help businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="cards-grid">
        {[
          "Pay-per-click advertising",
          "Social Media Marketing",
          "Email Marketing",
          "Content Creation",
          "Analytics and Tracking",
          "Search Engine Optimization",
        ].map((title, index) => (
          <div className="service-card" key={index}>
            <h3>{title}</h3>
            <a href="#" className="learn-more">
              <span className="arrow">➜</span> Learn more
            </a>
          </div>
        ))}
      </div>

      
        <div className={"ready-lorem-let-start-div"}>
            <div>
          <p className={"ready-to-elevate-your-serach"}>
            Ready to Elevate Your Serach Rankings?
          </p>
          <p className={"lorem-ipsum-dolor-paragraph-ready-lorem-let-start"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            tempore reiciendis quo praesentium totam, <br /> cumque alias veniam
            aliquid vel cum incidunt numquam possimus impedit non recusandae
            nostrum temporibus vero. <br /> Autem? Consectetur voluptatibus
            nesciunt recusandae, assumenda <br /> aliquam soluta voluptates.
          </p>
          <p>Let's work together to grow your online pressence.</p>
          <p className={"start-my-seo-journey-paragraph"}>
            Start My SEO Journey
          </p>
          </div>




         <div className={"end-page-div"}>
          <img src={Videoman}></img>
         </div>

       </div>

    

       

       


      

      <Footer />
    </div>
  );
};

export default Services;
