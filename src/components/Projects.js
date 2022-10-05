import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import kmedr from "../assets/img/kmedr.png";
import wemwa from "../assets/img/wemwa.png";
import soln from "../assets/img/soln.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
<<<<<<< HEAD
import Chat from './Chat';
=======
import Card from "./Card";


>>>>>>> fa247984a317e434ea4f8fd37a7d239b9c462fa3



export const Projects = () => {

  const projects = [
    {
      title: "Paydigital App",
      description: "Mpesa, Airtel & Paypal API Integration",
      imgUrl: projImg1,
<<<<<<< HEAD
     
=======
      button: "Site",
      button1: "github"
>>>>>>> fa247984a317e434ea4f8fd37a7d239b9c462fa3
    },
    
    {
      title: "KEMDR",
      description: "KEMDR is a multihospital managment system with interctive UI and great functionality",
      imgUrl: kmedr,
      button: "site",
      button1: "github"
    },
    {
      title: "Wemwa Sacco",
      description: "This is a sacco managment system with interactivity between users and the system",
      imgUrl: wemwa,
      button: "site",
      button1: "github"
    },
    {
      title: "Digital Solution",
      description: "Is a software development company. I'm the founder of this institution",
      imgUrl: soln,
      button: "site",
      button1: "github"
    },
    {
      title: "JM_Movies",
      description: "Moives streaming site",
      imgUrl: projImg2,
      button: "site",
      button1: "github"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      button: "site",
      button1: "github"
    },
  ];

  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p style={{color:'#CC8899'}}>My primary objective is to facilitate the completion of a project while ensuring that standards and specifications in designing, development and deployment of a software in order to generate the maximum output of a product. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">ChatBot</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Blogs</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
<<<<<<< HEAD
                   <Chat />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More project Coming Soon 🥳 </p>
=======
                      <p>Sit back relax and see the magic 💯</p>
>>>>>>> fa247984a317e434ea4f8fd37a7d239b9c462fa3
                    </Tab.Pane>
                    <Tab.Pane eventKey="third"> 
                 
          </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="background" src={colorSharp2}></img>
    </section>
  )
}
