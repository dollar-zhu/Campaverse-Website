import "./App.css";
import campaverse from "./assets/Campaverse.png";
import quad from "./assets/Quad.png";
import explore from "./assets/Explore.png";
import brown from "./assets/Brown.png";

function App() {
  function sendEmail() {
    window.location.href =
      "mailto:dollar@campa-verse.com?subject=Let's collaborate!&body=Hi! I'm interested in learning more about CampaVerse and how we can work together.";
  }
  return (
    <div className="app">
      <div className="logo">
        <h1>CampaVerse</h1>
        <hr className="horizontal-line" />
      </div>
      <div className="home-page">
        <div className="flex-row">
          <div className="flex-column">
            <h2>
              Hi! We are CampaVerse, <br></br>We turn your campus tour into a
              game,so more students can “live” through the experience wherever
              they are!
            </h2>
            <h2>
              We are starting an era of “Show not tell” for college admissions.
            </h2>
          </div>
          <img
            className="large-image"
            src={campaverse}
            alt="birds eye view of a campus"
          />
        </div>
        <div className="flex-row">
          {window.innerWidth > 768 ? (
            <img
              className="small-image"
              src={quad}
              alt="a student exploring the quad"
            />
          ) : null}

          <div className="flex-column">
            <h2>What our work looks like</h2>
            <h3>
              We work with universities and programs to create a digital
              simulation of student life, essentially condensing the time at the
              university into a digestible 30-minute game-like experience.
              Students start out as a day one student, study, socialize,
              explore, and ultimately graduate in the virtual world.
            </h3>
          </div>
        </div>

        <div className="flex-row">
          <div className="flex-column">
            <h2>Who are we</h2>
            <h3>
              We are a group of recent graduates from Brown University with
              experience designing educational games. We made it our mission to
              make college tours more fun, engaging, and accessible for
              students.
            </h3>
          </div>
          <img
            className="small-image"
            src={explore}
            alt="a student exploring campus"
          />
        </div>

        <div>
          <h2 style={{ textAlign: "center" }}>Why are we doing this</h2>
          <div className="grid-1x2">
            <div className="flex-column">
              <h3>Helping Students</h3>
              <h4>
                As students who went through the admissions, we understand the
                application season can be challenging and choosing the right
                school daunting.
                <br></br>We can test and try when we buy clothes and cars. Why
                can’t we have a “trial” for higher education?
              </h4>
            </div>
            <div className="flex-column">
              <h3>Solving a Problem for Universities</h3>
              <h4>
                We realized that Universities are always competing qualified
                students. We want to help universities stand out by letting
                students “live” through the best parts of the universities.
                These are experiences not found on the internet or campus tours,
                but we can make them happen.
              </h4>
            </div>
          </div>
        </div>

        <div className="flex-row">
          <div className="flex-column">
            <h2>Case Study - Life @ PRIME</h2>
            <h3>
              We built a product for the Master in Innovation Management &
              Entrepreneurship program (PRIME) at Brown University. PRIME is a
              unique program with a blend of industry and start-up paths.{" "}
              <br></br>
              <br></br>Our product focuses on this aspect and allows students to
              build their own startup and careers in the simulation, where they
              learn first-hand the unique resources Brown provides.
            </h3>
            <button
              className="primary-button"
              onClick={() => {
                window.open("https://life-at-prime.web.app", "_blank");
              }}
            >
              Try it!
            </button>
          </div>
          {window.innerWidth > 768 ? (
            <img
              className="small-image"
              src={brown}
              alt="Brown University Seal"
            />
          ) : null}
        </div>

        <div className="contact-area">
          <h2>
            We would love to hear from you!<br></br>
            Let’s reimagine admissions together
          </h2>
          <button className="primary-button" onClick={sendEmail}>
            Reach out to us!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
