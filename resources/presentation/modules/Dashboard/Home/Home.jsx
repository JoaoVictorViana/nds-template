import React from 'react';
import {
    FaBinoculars,
    FaBriefcase,
    FaCalendarMinus,
    FaCalendarPlus,
    FaClock,
    FaFile,
    FaHome, FaPencilAlt,
    FaUser
} from "react-icons/fa";
import {Card, Col, Row} from "react-bootstrap";
import CardItem from "./components/CardItem";

const Home = () => {

    const itensAdmins = [
        {
            icon: <FaUser size="40" className="frequencia-secondary" />,
            name: 'Pessoas no Frequência',
            to: '/pessoas'
        },
        {
            icon: <FaClock size="40" className="frequencia-secondary" />,
            name: 'Cargas Horárias',
            to: '/cargas-horarias'
        },
        {
            icon: <FaBriefcase size="40" className="frequencia-secondary" />,
            name: 'Cargos',
            to: '/cargos'
        },
        {
            icon: <FaFile size="40" className="frequencia-secondary" />,
            name: 'Frequências'
        },
        {
            icon: <FaCalendarMinus size="40" className="frequencia-secondary" />,
            name: 'Feriados'
        }
    ];

    const itensColaboradores = [
        {
            icon: <FaCalendarPlus size="40" className="frequencia-secondary" />,
            name: 'Horários'
        },
        {
            icon: <FaFile size="40" className="frequencia-secondary" />,
            name: 'Frequência'
        },
        {
            icon: <FaBinoculars size="40" className="frequencia-secondary" />,
            name: 'Ocorrências'
        },

        {
            icon: <FaPencilAlt size="40" className="frequencia-secondary" />,
            name: 'Relatório Diário'
        }
    ];

    return (
        <Card.Body>
            <h2 className="d-flex align-items-center">
                <FaHome className="me-3 frequencia-secondary" />
                Página Inicial
            </h2>
            <h4 className="text-muted">Encontre aqui alguns dos recursos mais utilizados do sistema</h4>

            <Card className="mt-4">
                <Card.Header className="text-center text-uppercase fw-bold">
                    FUNÇÕES PARA ADMINISTRADORES
                </Card.Header>
                <Card.Body>
                    <Row className="d-flex align-items-start justify-content-center">
                        {itensAdmins.map((item, i) => {
                            return <CardItem {...item} key={i} />;
                        })}
                    </Row>
                </Card.Body>
            </Card>

            <Card className="mt-4 ">
                <Card.Header className="text-center text-uppercase fw-bold">
                    FUNÇÕES PARA COLABORADORES
                </Card.Header>
                <Card.Body>
                    <Row className="d-flex align-items-start justify-content-center">
                        {itensColaboradores.map((item, i) => {
                            return <CardItem {...item} key={i} />;
                        })}
                    </Row>
                </Card.Body>
            </Card>
            <Card className="mt-4 ">
                <Card.Header className="text-center text-uppercase fw-bold">
                    FUNÇÕES PARA COLABORADORES
                </Card.Header>
                <Card.Body>
                    <Row className="d-flex align-items-start justify-content-center">
                        {itensColaboradores.map((item, i) => {
                            return <CardItem {...item} key={i} />;
                        })}
                    </Row>
                </Card.Body>
            </Card>
        </Card.Body>
    );
};

export default Home;
