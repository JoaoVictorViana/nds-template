import React from 'react';
import {FaArrowCircleLeft, FaBriefcase} from "react-icons/fa";
import {Link} from "react-router-dom";
import {Card } from "react-bootstrap";

const NovoCargo = () => {
    return (
        <Card.Body className="">
            <h2 className="d-flex align-items-center border-bottom mb-2 pb-3">
                <FaBriefcase className="me-3 frequencia-secondary" />
                Novo Cargo
                <Link as="a" to='/cargos' className="btn btn-md btn-success ms-auto">
                    <FaArrowCircleLeft /> Voltar
                </Link>
            </h2>

            <Card className="mt-4">
                <Card.Body>
                    FORM AQUI
                </Card.Body>
            </Card>
        </Card.Body>
    );
};

export default NovoCargo;
