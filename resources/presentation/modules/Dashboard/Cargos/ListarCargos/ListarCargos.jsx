import React from 'react';
import {FaBriefcase, FaPencilAlt, FaPlus, FaTrash} from "react-icons/fa";
import {Button, ButtonGroup, Card, Col, Row, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const ListarCargos = () => {

    const cargos = [
        { nome: 'ADMINISTRADOR' },
        { nome: 'ASSISTENTE DE ALUNOS' },
        { nome: 'ASSISTENTE EM ADMINISTRAÇÃO' },
        { nome: 'ASSISTENTE SOCIAL' },
        { nome: 'AUX. DE MANUTENÇÃO' },
        { nome: 'AUX. DE SERVIÇOS OPERACIONAIS' },
        { nome: 'AUXILIAR EM ADMINISTRAÇÃO' },
    ];

    return (
        <Card.Body className="">
            <h2 className="d-flex align-items-center border-bottom mb-2 pb-3">
                <FaBriefcase className="me-3 frequencia-secondary" />
                Cargos
                <Link as="a" to='/cargos/novo' className="btn btn-md btn-success ms-auto">
                    <FaPlus /> Novo
                </Link>
            </h2>

            <Card className="mt-4">
                <Card.Body>
                    <Table responsive >
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cargos.map((cargo, i) => {
                            return (
                                <tr key={i}>
                                    <td>{(i+1)}</td>
                                    <td>{cargo.nome}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button variant={"warning"} title="Alerar">
                                                <FaPencilAlt />
                                            </Button>
                                            <Button variant={"danger"} title="Remover">
                                                <FaTrash />
                                            </Button>
                                        </ButtonGroup>

                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Card.Body>
    );
};

export default ListarCargos;
