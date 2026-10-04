import { Link } from "react-router-dom";
import "../css/pages/home.css";

function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-hero-eyebrow">
            Welcome to my portfolio
          </p>

          <h1 className="home-hero-title">
            Hi, I'm Julia.
            <br />
            Fullstack Developer
          </h1>

          <p className="home-hero-description">
            I'm a developer passionate about building
            creative and functional web applications.
          </p>

          <Link to="/projects" className="home-hero-button">
            View Projects
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;