// import { Outlet, Route, Routes } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Navbar from "./Navbar"
// import Help from "./Help"
// import Contect from "./Contect"
// import Services from "./Services"

// function App() {
  
//   return (
//     <>
 
//     <Navbar/>
//       <Routes>

//   {/* <Route path="/"element={<Navbar />}> */}
  
//   <Route index element= {<Home /> }/>
//         <Route path="/About" element={<About />} />
//         <Route path="/servises" element={<Services />} />
//         <Route path="/help" element={<Help />} />
//         <Route path="/contect" element={<Contect />} />
//   {/* </Route> */}
      
// {/* <Outlet /> */}
//       </Routes>

//     </>
//   )
// }

// export default App



import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import './App.css';

// Header Component
const Header = () => (
  <header>
    <h1>🐘 Elephant Info 🐘</h1>
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </header>
);

// About Component with Props
const About = ({ description }) => <p>{description}</p>;

// Contact Component with State
const Contact = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => setMessage(e.target.value);
  const handleSubmit = () => alert(`Message sent: ${message}`);

  return (
    <div>
      <h2>Contact Us</h2>
      <textarea onChange={handleChange} placeholder="Type your message"></textarea>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

// Conditional Rendering
const Info = ({ showDetails }) => (
  showDetails ? <p>Elephants are the largest land animals on Earth!</p> : <p>Click to know about elephants!</p>
);

// Carousel Component
const ImageCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img src="elephant1.jpg" alt="Elephant 1" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="elephant2.jpg" alt="Elephant 2" />
    </Carousel.Item>
    <Carousel.Item>
      <img src="elephant3.jpg" alt="Elephant 3" />
    </Carousel.Item>
  </Carousel>
);

// Accordion Component for FAQ
const FAQ = () => (
  <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>What do elephants eat?</Accordion.Header>
      <Accordion.Body>Elephants are herbivores and consume grasses, fruits, and bark.</Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>How long do elephants live?</Accordion.Header>
      <Accordion.Body>They can live up to 60-70 years in the wild.</Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

// Form Component with Bootstrap
const FeedbackForm = () => (
  <Form>
    <Form.Group>
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your name" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Your Feedback</Form.Label>
      <Form.Control as="textarea" rows={3} placeholder="Your feedback" />
    </Form.Group>
    <Button variant="primary" type="submit">Submit</Button>
  </Form>
);

// Main App Component
function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setShowDetails(true)}>About</Nav.Link>
            <Nav.Link onClick={() => setShowDetails(false)}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Header />
      <Info showDetails={showDetails} />
      {showDetails ? <About description="Elephants are intelligent creatures found in Africa and Asia." /> : <Contact />}
      <ImageCarousel />
      <FAQ />
      <FeedbackForm />
    </>
  );
}

export default App;
