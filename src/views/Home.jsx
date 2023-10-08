import React from "react";
import { Container } from "react-bootstrap";
import Pika from "../img/Pika.jpeg";


export default function Home() {
    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div>
                <h1 className="pt-5 text-center">
                    Bienvenido <span className="fw-bold">Maestro Pókemon</span>
                </h1>
                <img
                    className="text-center display-1"
                    src={Pika}
                    alt="pikachu"
                    width="595"
                    height="460"
                />
            </div>
        </Container>
    );
}


