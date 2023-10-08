import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";

import poke from '../img/poke.png';
import pokeball from '../img/pokeball.png';

export default function Navegador() {
    return (
        <Navbar bg="secondary" variant="dark" expand="lg" className="fixed-top">
            <Container>
                <div className="d-flex justify-content-between w-100">
                    <div className="d-flex">
                        <img src={poke} alt="pokemongo" style={{ width: '44px', height: '44px' }} />
                    </div>
                <div className="d-flex">
                    <NavLink to="/" className="nav-link nav-link-custom" activeClassName="active">
                        Home 🏠
                    </NavLink>
                    <NavLink to="/pokemones" className="nav-link nav-link-custom" activeClassName="active">
                        Pokemones <img src={pokeball} alt="pokeball" style={{ width: '18px', height: '18px' }} />
                    </NavLink>
                </div>
            </div>
        </Container>
        </Navbar >
    );
}





