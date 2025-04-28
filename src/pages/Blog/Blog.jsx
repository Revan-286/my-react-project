import "./Blog.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import İllustration from "./illustration.png";

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

const Blog = () => {
  return (
    <div className={'blog-div-mother'}>
      <Header />


      <div className={'container-illustration-and-paragraph-div'}>
        <img src={İllustration}></img>
        
        <div>
            <p className={"marketing-strategies-paragraph"}>Marketing Strategies</p>

            <p className={'ppc-vs-oragnic-paragraph'}>PPC vs.Organic <br />Marketing: Which One Is <br />Right for Your Business? </p>

            <p>PPC and organic marketing each offer unique <br />beneffits for driving traffic and growing your <br />business. Discover  which strategy alligns best with <br />your goals and how to strike the perfect balance.</p>
        </div>
      </div>

      <div className={'line-div-end-paragraph'}></div>


      <div className={'center-write-paragraph'}>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quaerat amet rerum error, reprehenderit odio quis iure dicta repellat deleniti libero cum labore consequuntur nesciunt consectetur maiores placeat, dolorem officiis.
        Ipsum eligendi eveniet, deserunt expedita nam aspernatur doloremque temporibus facere ea quidem ipsam natus blanditiis pariatur quae quisquam vitae vero est cupiditate quod hic possimus. Eum id dolor expedita aspernatur.
        Illo velit nulla recusandae exercitationem asperiores quis voluptatem temporibus, nostrum laudantium quasi, placeat voluptatibus excepturi inventore quae, minima eaque laboriosam consectetur odit ut. Doloremque, soluta tenetur quibusdam laborum aliquid sint!</p>

        <p className={"paragraph-one-end-div"}>The Challenge of Standing Out Online</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga in corrupti nesciunt consectetur fugit dolore! Corrupti ullam aliquid expedita cumque magni veniam minus. Eaque itaque assumenda optio molestias. Ea.
        Illo mollitia est sint ut eos dignissimos magnam. Cumque, porro esse optio dolorem dicta quisquam consequuntur dolor culpa vero? Alias, harum? Eligendi itaque repellat labore exercitationem, perspiciatis libero sed tenetur.</p>

        <p className={"paragraph-two-end-div"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam ipsam tenetur accusamus dignissimos, laudantium quis quaerat tempore magnam molestiae nostrum eius eos accusantium est obcaecati dolores necessitatibus consequatur! Mollitia.</p>

        <p className={"paragraph-three-end-div"}>Comparing PPC and Organic Marketing</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, aliquid beatae et labore culpa pariatur ab hic cupiditate autem praesentium quaerat iure voluptates, repellendus itaque quisquam dignissimos vel possimus. Quisquam.
        Repellendus maiores reprehenderit molestiae asperiores quisquam non aspernatur incidunt, aliquid illum! Earum laudantium nam aliquam pariatur corporis hic cum doloribus magni maxime qui est eligendi asperiores nesciunt sunt, impedit blanditiis?
        Architecto hic sequi impedit perferendis nemo fugit dolores voluptate consectetur porro. Eaque dolorem, praesentium ab rem ipsa amet quia nemo doloribus iste ad repellat minus reiciendis sit, sed esse nisi.
        Illo, adipisci. Aspernatur optio harum, maxime enim ipsam officiis laborum quo recusandae non, alias cumque dolore sapiente voluptatem, ex dolorum dolores nesciunt pariatur officia sequi libero omnis deleniti necessitatibus tempore.</p>

        <p className={"paragraph-four-end-div"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, enim! Repellendus quaerat eum autem minima quos tempora eligendi id! Deserunt quibusdam dicta minima officia commodi veritatis ab. Unde, autem! Sed.
        Vitae libero consectetur excepturi sunt aliquam tempore odit voluptas blanditiis harum odio doloremque ratione debitis ab saepe esse rem a, atque illo nesciunt sequi explicabo cum in. Sunt, dolore culpa?
        Facere quae temporibus voluptate accusantium ipsa fuga sequi totam tempore impedit eaque beatae fugit, assumenda exercitationem! Ab totam dolores, voluptatum eos maiores eius facere debitis ea, sapiente similique dolorum hic.</p>

        <p className={'paragraph-fife-end-div'}>Striking the Right Balance</p>

        <p className={'ppc-and-organic-paragraph'}>*PPC and organic marketing aren't rivals-they're <br />teammates.The best strategies combine both to create <br />a holistic approach to growth,* says a dgital marketing <br />expert.
        </p>

        <p className={'paragraph-six-end-div'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut alias placeat odit quod, ipsum neque ex recusandae eius quis facilis aliquam, repellendus deleniti porro, vitae quo vero assumenda accusantium illo!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, enim! Repellendus quaerat eum autem minima quos tempora eligendi id! Deserunt quibusdam dicta minima officia commodi veritatis ab. Unde, autem! Sed.
        Vitae libero consectetur excepturi</p>

        <p className={'paragraph-seven-end-div'}>By the Numbers: Facts About PPC and <br />Organic Marketing</p>

      </div>








      <div className={'businesses-earn-average-div'}>

        <div className={'businesses-earn-average-paragraph'}>
            <p>Businesses earn an average of</p>
            <p className={'two-dollar-paragraph'}>$2 for every $1 spent</p>
            <p>on PPC advertising</p>
        </div>

        <div className={'clicks-paragraph'}>
            <p className={'fourty-one-faiz'}>41% of clicks</p>
            <p>on search engines go to the top three organic results, showing the <br />importance of ranking highly.</p>
        </div>

      </div>



      <div className={'content-marketing-top-div'}>

        <div className={"content-marketing-paragraph"}>
          <div className={'display-content-and-faiz'}>
            <div>
                <p>Content marketing costs</p>
            </div>

            <div className={"less-than-paid-ads"}>
                <p>62% less than paid ads</p>
            </div>
          </div>


          <div className={'display-content-and-faiz'}>
            <p>but generators</p>
            <p className={"less-than-paid-ads"}>3x as many leads</p>
          </div>
            
        </div>




        <div className={'organic-search-drives-div'}>
            <p className={'making-it-the-langest-paragraph'}>Organic search drives</p>
           
           <div className={"fifty-three-paragraph"}>
            <p className={"fifty-three-faiz"}>53%</p>
            <p>of all website traffc,</p>
           </div>

            <p className={'making-it-the-langest-paragraph'}>making it the langest single source of traffic.</p>

        </div>





      </div>







      <div className={'real-world-div-paragraph'}>
       <p className={'real-world-examples'}>Real-World Examples</p>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ut neque quae. Ducimus similique ut vel sapiente sit, libero odit incidunt rerum ex alias, saepe cum pariatur odio, repellendus dolorum!
       Soluta optio saepe repellendus rem commodi unde perferendis nemo rerum expedita. Neque accusamus error iste et incidunt! Aut quaerat itaque fugiat, animi necessitatibus rerum dolorem iusto, minus vero voluptate tenetur?
       Velit ab cumque dolore ipsam debitis blanditiis quod rem quae vero vitae magnam, quis qui consectetur fuga labore. Voluptas voluptates saepe reiciendis vel nisi labore sequi suscipit adipisci quas ratione!
       Amet, omnis. Pariatur vitae ut unde molestias. Quia non consequatur laudantium culpa asperiores nostrum praesentium. Fugiat culpa labore corporis repellat dolore rerum debitis, tempora cupiditate numquam. Vel animi amet velit!
       Nemo ab sint itaque fugiat tempora ex asperiores ipsa. Minima reprehenderit fuga impedit? Consequuntur dolore quis animi eaque! Delectus sed atque saepe itaque alias facilis beatae molestiae quibusdam architecto minima.</p>
       <p className={"key-takeaways"}>Key Takeaways for Your Marketing Strategy</p>

       <ol>
        <li>PPC is ideal for short-farm goals, like promoting sales, events, or new products.</li>
        <li>Organic marketing is better for long-harm growth, building trust, and creating lasting customer <br />relationship.</li>
        <li>A hybrid approach offers the best of both worlds, balancing quick wins with sustainable <br />development.</li>
       </ol>

       <p className={"choosing-the-best"}>Choosing the Best Strategy for Your <br />Business</p>
       <p className={"lorem-top-fife"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt nobis aspernatur ducimus natus earum, non ullam at eligendi dolor ex esse? Iste ullam odio veniam itaque, temporibus nam eveniet!
       Maiores fugiat blanditiis impedit harum corporis id nulla perspiciatis eum pariatur, neque quae fugit minima quia minus veniam amet vel quasi autem, dolores repellat nam aperiam rem dignissimos. Nostrum, perferendis.
       Corrupti iste tempore maiores et cupiditate blanditiis officiis voluptatibus expedita, ipsam obcaecati veritatis sapiente veniam atque cum illo temporibus accusantium corporis! Odit illum eaque ducimus officiis ullam inventore natus? Esse.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima, aperiam quibusdam labore porro, asperiores, cupiditate ea illo delectus ipsum adipisci. Tempora laborum similique nisi hic porro explicabo doloremque at!
       Ut deleniti eveniet esse vitae, distinctio quasi cum nostrum amet numquam rem dolorem possimus a repellat? Deserunt possimus dolore sed! Voluptas ullam eum in laudantium ab, ipsam minus eveniet quod.
       Iure quas asperiores pariatur excepturi eveniet ipsam animi quasi accusamus nam! Sequi animi accusamus earum non in corrupti, excepturi debitis alias sed architecto? Ipsa facilis neque necessitatibus magni, nemo libero!</p>
      </div>



      <div className={"explore-more-top"}>
        <p className={"explore-more-insights"}>Explore More Insights</p>
        <p>Discover expert tips strategies and stories to keep you ahead in <br />the digital landscape.</p>
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













      <Footer />
    </div>
  );
};

export default Blog;
