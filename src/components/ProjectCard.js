import { Col } from "react-bootstrap";
import styled from "styled-components";


const Button= styled.button`
background-color: #1b5e20;
color: white;
padding: 5px 15px;
border-radius: 5px;
outline: 0;
text-transform: uppercase;
cursor: pointer;
box-shadow: 0px 2px 2px lightgray;
transition: ease background-color 250ms;
margin: 10px 0px;

&:hover {
background-color: #00e676;

}
`



export const ProjectCard = ({ title, description, imgUrl, button }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>< br/>< br/>< br/>
          <a href="https://paydigital.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <Button>{button}</Button>
          </a>
        </div>
      </div>
    </Col>
  )
}
