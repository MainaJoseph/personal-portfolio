import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import MAINA from "../assets/img/MAINA.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={MAINA} alt="Logo" href="/"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/joseph-mainajm/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/sirjoseh" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/juniour.king.773/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/MainaJoseph"  target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Icon" /></a>
              
            </div>
            <p>@2022 Joseph Maina. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
