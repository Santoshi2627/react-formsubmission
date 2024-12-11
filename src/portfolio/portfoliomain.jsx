import myphoto from "./santu.png";
//  import Main from "./portfoliomai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./portfoliocssfile.css";

const PortfolioMain = () => {
  return (
    <main className="body" id="main">
      <section id="about-me" style={styles.section1}>
        <div style={{ marginTop:"5%"}}>
          <h1 style={{textAlign:"center"}}>Hello,I'm santoshi</h1>
          </div>
          <subsec style={{display:"flex",justifyContent:"space-between"}}>
           <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            Passionate Software Developer <br />
            Recent Graduate <br /> Eager to Apply Technical Skills in Real-World
            Projects | Seeking Entry-Level Opportunities.
          </p>
        <div>
          <img src={myphoto} alt="myphoto" style={{height:"30vh",width:"20vw", borderRadius: "50%"}} />
        </div>
        </subsec>
      </section>
      <section id="education">
        <h3>EDUCATION</h3>
        <li>
          Bachelor of Science (B. Sc) in Mathematics, Computer Science, and
          Multimedia
        </li>
        <li>2021-2024</li>
        <li>
          Government College for Women (A), Guntur , Andhra Pradesh
          percentage:85
        </li>
        {/* <img src={myphoto} alt="myphoto"/> */}
      </section>
      <section id="projects">
        <h3>PROJECTS</h3>
        <h5>Breezed Template</h5>
        <li>
          Developed a visually appealing "Breezed" template using only HTML and
          CSS
        </li>
        <li>Created a fully responsive layout for different screen sizes.</li>
        <li>
          Utilized grid and flex box techniques for an organized structure.
        </li>
        <li>Applied semantic HTML for improved code readability.</li>
        <h5>CryptoCurrency Tracker</h5>
        <li>
          Developed a dynamic cryptocurrency tracker application that fetches
          real-time data from public API s.
        </li>
        <li>
          Utilized JavaScript's Fetch API to retrieve and display cryptocurrency
          prices, market capitalization, and
        </li>
        <li>
          Designed an interactive and user-friendly UI to enhance the user
          experience
        </li>
        <li>
          Integrated error handling for failed API requests to ensure smooth
          functionality.
        </li>
        <li>
          Implemented responsive design principles for seamless usage across
          devices.
        </li>
        {/* </section> */}
        {/* <section id="projects"> */}
        <h3>INTERNSHIP</h3>
        <h5>DevOps</h5>
        <li>
          Assisted in improving software development by supporting deployment
          tasks
        </li>
        <li>
          Collaborated with team members to ensure smooth application operation
          and system efficiency.{" "}
        </li>
        <li>
          Gained foundational knowledge in DevOps practices and system
          reliability improvements.
        </li>
      </section>
      <section id="skills">
        <h3>TECHNICAL SKILLS</h3>
        <p>
          <span style={{ fontWeight: "bold" }}>Front-end:</span>HTML, CSS,
          JavaScript, React.js
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Back-end:</span>Node.js
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>DataBase:</span>MySQL
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Tools:</span>GIT,GIThub
        </p>
        <h3>SOFT SKILLS</h3>
        <p>Problem-solving and analytical thinking</p>
        <p>Effective communication and teamwork</p>
        <p>Time management and organization</p>
        <p>adaptability and willingness to learning</p>
      </section>
      <section id="certificates">
        <h3>CERTIFICATES</h3>
        <h5>National Cadet Corps (NCC) - B and C Certificates Holder</h5>
        <p>
          Successfully completed B and C certification in the National Cadet
          Corps (NCC), showcasing a commitment to discipline, leadership, and
          teamwork
        </p>
      </section>
      <section id="achievements">
        <h3>ACHIEVEMENTS</h3>
        <p>
          <span style={{ fontWeight: "bold" }}>First-prize:</span>Skit
          Competition - Undergraduate
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Second-prize:</span>Dance
          Competition – Undergraduate
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Second-prize:</span>: Telugu
          Essay Writing Competition – Undergraduate
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Special Achievement:</span>
          Received a free airplane trip from Vizag to Chennai by securing 1st
          rank in SSC exams.
        </p>
      </section>
      <section className="footer" id="contact">
        <h3>Contact-me</h3>
        <div className="icons">
          <a
            href="https://wa.me/6305436248"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="3x"
              style={{ color: "green" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/santoshi-m-b76565252">
            {/* <FontAwesomeIcon icon={faTwitter} size="2x" /> */}
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="3x"
              style={{ color: "blue" }}
            />
          </a>
          <a
            href="https://www.instagram.com/chota_package2627/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="3x"
              style={{
                color: "white",
                background:
                  " linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
                borderRadius: "5px",
              }}
            />
          </a>
          <a href="mailto:santoshimoyya@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="3x"
              style={{ color: "red" }}
            />
          </a>
          <a href="https://github.com/Santoshi2627">
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              style={{ color: "black" }}
            />
          </a>
        </div>
      </section>
    </main>
  );
};
const styles = {
  // section1:{
  //   // backgroundImage:`url(${myphoto})`,
  //   backgroundSize:"cover",
  //   opacity:"0.5",
  //   height:"80vh",
  //   width:"80vw",
  //   display:"grid",
  //   gridtemplateRows:"row",
  //   justtifyContent:"center",
  //   alignContent:"center",
  //   // position:"relative",
  //   // height:"50%"

  // },
  text: {},

  // text:{
  //   display:"flex",
  //   justtifyContent:"center",
  //   alignContent:"center",

  // }
  // }
};

export default PortfolioMain;
