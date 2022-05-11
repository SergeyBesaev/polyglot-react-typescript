import React from 'react';
import Lesson1 from "./components/lessons/lesson-1";
import {Link, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import "./styles/App.css"
import Nouns from "./components/dictionary/nouns";
import Adjectives from "./components/dictionary/adjectives";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function App() {

    return (

            <Container className="p-3">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Polly</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/lesson-1">Lessons</Nav.Link>
                                <Nav.Link href="#link">Dictionary</Nav.Link>
                                <NavDropdown title="Dictations" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div>
                    {/*<header className="header">*/}
                    {/*    <Link className="home" to='/'>Polly</Link>*/}
                    {/*    <Link className="lessons" to='/lesson-1'>Lesson 1</Link>*/}
                    {/*    <Link className="dictionary" to='/dictionary/nouns'>Существительные</Link>*/}
                    {/*    <Link className="dictations" to='/dictionary/adjectives'>Прилагательные</Link>*/}
                    {/*</header>*/}

                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/lesson-1' element={<Lesson1/>}/>
                        <Route path='/dictionary/nouns' element={<Nouns/>}/>
                        <Route path='/dictionary/adjectives' element={<Adjectives/>}/>
                    </Routes>
                </div>
            </Container>
    );
}

export default App;
