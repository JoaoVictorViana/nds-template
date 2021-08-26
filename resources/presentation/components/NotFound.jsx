import React from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {FaHome} from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="d-flex align-self-center align-items-center " style={{ minHeight: 'calc(100vh - 148px)' }}>
            <Row>
                <Col className="text-center">
                    <h1 className="fs-2">Página não encontrada!</h1>
                    <Link to='/' as="button" className="btn btn-lg btn-success mt-3">
                        <FaHome />{' '}
                        Ir para home
                    </Link>
                </Col>
            </Row>

        </div>
    );
};

export default NotFound;
