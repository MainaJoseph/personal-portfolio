import { Col } from "react-bootstrap";
import styled from "styled-components";


const theme = {
  green: {
    default: '#1b5e20',
    hover: '#00e676',
  },
  pink: {
    default: '#263238',
    hover: '#546e7a',
    }
}


const Button= styled.button`
background-color: ${props => theme[props.theme].default};
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
background-color: ${props => theme[props.theme].hover};

}
`
Button.defaultProps ={
  theme: 'green'
}



export const ProjectCard = ({ title, description, imgUrl, button, button1 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>< br/>< br/>< br/>
        
          <div>
          <a href="https://paydigital.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <Button  title="Paydigital App"
        onPress={() => console.log("clicked")}>{button}</Button>
          </a>
          </div>

          <div>
          <a href="https://github.com/MainaJoseph/Mpesa_intergration" target="_blank" rel="noopener noreferrer">
          <Button theme="pink" title="Github" onPress={() => console.log("clicked")}>{button1}</Button>
          </a>
          </div>
          
        </div>
      </div>
    </Col>
  )
}
