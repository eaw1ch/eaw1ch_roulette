import React from 'react';

import { 
    Navbar, 
    Nav, 
    Container
} from 'react-bootstrap';

import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from 'react-router-dom';

import Home from '../../Pages/Home/Home';
import styles from './Header.module.scss';

import logo from '../../assets/images/logo.svg';

function Header() {
    return (
     <>
      <Navbar>
        <Container className={styles.container}>
            <Navbar.Collapse>
                <Nav className={styles.topbar}>
                    <Navbar.Brand className={styles.menu} href='/'>
                    <img 
                        src={logo}
                        height='60'
                        width='60'
                        alt='logo'
                    />
                    </Navbar.Brand>
                    <Nav.Link className={styles.menu} href='/'> Double </Nav.Link>
                    <Nav.Link className={styles.menu} href='/service'> ______ </Nav.Link>
                    <Nav.Link className={styles.menu} href='/contacts'> ______ </Nav.Link>
                    {/* <Nav.Item className={styles.item}>
                        <text className={styles.number}>8-800-220-0-220</text><br/>
                        <text className={styles.info}>Единый номер горячей линии</text>
                    </Nav.Item> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </Router>
     </> 
    );
}

export default Header;