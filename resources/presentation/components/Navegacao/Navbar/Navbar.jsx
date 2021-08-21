import React from 'react';
import {Link} from "react-router-dom";

import MediaQuery from "react-responsive";
import {Button, ButtonGroup, Col, Image, Nav, NavDropdown} from "react-bootstrap";
import {FaBars, FaRegBell, FaTh, FaUser} from "react-icons/fa";

import {SidebarContext} from "../../../contexts/SidebarContext";

import './Navbar.css';
import SysFrequenciaIcon from "../../../assets/images/SysFrequenciaIcon.png";
import SysFrequencia from "../../../assets/images/SysFrequencia.png";
import UserAvatar from "../../../assets/images/useravatar.jpg";


const Navbar = () => {
    const context = React.useContext(SidebarContext);

    const outrosSistemas = [
        {
            name: 'SysOutro',
            image: SysFrequencia
        },
        {
            name: 'SysOutro',
            image: SysFrequencia
        },
        {
            name: 'SysOutro',
            image: SysFrequencia
        },
        {
            name: 'SysOutro',
            image: SysFrequencia
        },
        {
            name: 'SysOutro',
            image: SysFrequencia
        },
        {
            name: 'SysOutro',
            image: SysFrequencia
        },
        {
            name: 'SysOutro',
            image: SysFrequencia
        },
        {
            name: 'SysOutro',
            image: SysFrequencia
        },
    ]

    return (
        <Nav className='navbar navbar-dark bg-frequencia-primary' id="wrapper">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" onClick={context.toggleSide} aria-current="page" href="#">
                        <FaBars size="25" title="Colapsar" />
                    </a>
                </li>
            </ul>

            <Link as='a' to='/' className="navbar-brand" href="#">
                <img src={SysFrequenciaIcon} width="30" height="30" className="d-inline-block align-top" style={{ marginRight: '.50rem' }} alt="" />
                <MediaQuery minWidth="490px" >
                    <span>
                        SysFrequencia
                    </span>
                </MediaQuery>
            </Link>

            <ul className="navbar-nav d-flex flex-row  ms-auto">
                <li className="nav-item">
                    <NavDropdown title={<FaTh size="25" title="Outros Sistemas" />} align="end" className="nav-dropdown nav-dropdown-sistemas" id="outrosSistemas">
                        {outrosSistemas.map((sistema, i) => {
                            return (
                                <NavDropdown.Item title={sistema.name} key={i} className="d-flex align-items-center p-2">
                                    <img src={sistema.image} width="60" alt={sistema.name} />
                                </NavDropdown.Item>
                            );
                        })}
                    </NavDropdown>
                </li>
                <li className="nav-item">
                    <NavDropdown title={<FaRegBell size="25" title="Notificações" />} className="nav-dropdown" id="notificacoes">
                        <NavDropdown.Item href="#action3">Fulano de Tal</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">20176446551255</NavDropdown.Item>
                    </NavDropdown>
                </li>
                <li className="nav-item">
                    <NavDropdown title={<Image width="25" src={UserAvatar} roundedCircle={true}  />} align="end" className="nav-dropdown" id="conta">
                            <div className="row px-2">
                                <div className="col-6 d-grid">
                                    <h6>Olá, 201720849118!</h6>
                                    <span className="text-muted my-0 py-0">Administrador</span>
                                    <span className="text-muted my-0 py-0">Chefia</span>
                                    <span className="text-muted my-0 py-0">Colaborador</span>
                                    <span className="text-muted my-0 py-0">Servidor</span>
                                </div>
                                <div className="col-6 align-self-center text-center">
                                    <Image width="80" src={UserAvatar} roundedCircle={true} className="align-self-center"  />
                                </div>
                                <div className="col-12 mt-2 mb-0">
                                    <hr/>
                                </div>
                                <div className="col-12 d-grid gap-2">
                                    <ButtonGroup className="">
                                        <Link to="/conta" as="button" className="btn btn-outline-success">Conta</Link>
                                        <Link to="/" as="button" className="btn btn-outline-danger">Sair</Link>
                                    </ButtonGroup>
                                </div>
                            </div>
                    </NavDropdown>
                </li>
            </ul>
        </Nav>
    );
};

export default Navbar;
