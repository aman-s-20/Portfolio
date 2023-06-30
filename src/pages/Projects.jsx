import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import rozgaar from "../assets/projects/rozgaar.png";
import cmsapp from "../assets/projects/cmsapp.png";
import taza from "../assets/projects/taza.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rozgaar}
              isBlog={false}
              title="Rozgaar| job-portal"
              description="
              I developed a user-friendly online platform that serves as a bridge between job seekers and employers. The platform features a dynamic dashboard that efficiently displays job listings and user profiles, ensuring up-to-date information at all times. To prioritize security, I implemented robust user authentication and authorization mechanisms using JWT (JSON Web Tokens) and bcrypt. The technology stack used for this project includes ReactJs, REST API, Nodejs, ExpressJs, MongoDB, HTML, and CSS.

In summary, I created a streamlined online platform that seamlessly connects job seekers and employers. Through the implementation of a dynamic dashboard and secure user authentication, this platform enhances the job searching and hiring experience."
              ghLink="https://github.com/aman-s-20/Rozgaar-full"
              demoLink="https://rozgaar-frontend.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cmsapp}
              isBlog={false}
              title="Contact Management System"
              description="I developed a comprehensive set of APIs that enable CRUD (Create, Read, Update, Delete) operations on contacts, which were seamlessly integrated with the front-end of the application. This allows users to interact with and manipulate their contact data effectively.

              To ensure secure access and protect user data, I implemented user authentication and authorization mechanisms using JWT (JSON Web Tokens) and bcrypt. This ensures that only authorized users can perform operations on contacts.
              
              In addition, REST API for handling server-side operations, Nodejs and ExpressJs for building the server-side application, MongoDB for storing contact data, and HTML and CSS for the overall presentation and styling of the application."
              ghLink="https://github.com/aman-s-20/cms-fullstack"
              demoLink="https://cms-frontend-dy3x.onrender.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taza}
              isBlog={false}
              title="TazaKhabar"
              description=" I developed a React app that extracts data from an external News API and dynamically displays it on a web page. The app utilizes REST API calls to fetch the latest news articles and presents them in an organized and user-friendly manner.

              To enhance the user experience, I implemented infinite loading functionality, allowing for seamless scrolling and continuous loading of news articles as the user reaches the bottom of the page. This ensures that the user can browse through a large number of articles without any interruptions.
              
              Additionally, I incorporated a loader component to provide visual feedback to the user during data retrieval. This loader indicates that the app is actively fetching data from the API and informs the user to wait momentarily."
              ghLink="https://github.com/aman-s-20/TazaKhabar"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  )
}

export default Projects