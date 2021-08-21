import React from 'react';
import {Link} from "react-router-dom";

import MediaQuery from "react-responsive";
import {Nav, NavDropdown} from "react-bootstrap";
import {FaBars, FaRegBell, FaTh, FaUser} from "react-icons/fa";

import {SidebarContext} from "../../../contexts/SidebarContext";

import styles from './Navbar.module.css';
import SysFrequenciaIcon from "../../../assets/images/SysFrequenciaIcon.png";


const Navbar = () => {
    const context = React.useContext(SidebarContext);

    const outrosSistemas = [
        {
            name: 'SysOutro',
            image: SysFrequenciaIcon
        },
        {
            name: 'SysOutro',
            image: SysFrequenciaIcon
        },
        {
            name: 'SysOutro',
            image: SysFrequenciaIcon
        },
        {
            name: 'SysOutro',
            image: SysFrequenciaIcon
        },
        {
            name: 'SysOutro',
            image: SysFrequenciaIcon
        },
        {
            name: 'SysOutro',
            image: SysFrequenciaIcon
        },
        {
            name: 'SysOutro',
            image: SysFrequenciaIcon
        },
        {
            name: 'SysOutro',
            image: SysFrequenciaIcon
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
                    <NavDropdown title={<FaTh size="25" title="Outros Sistemas" />} className={styles.navDropdown} id="outrosSistemas">
                        {outrosSistemas.map((sistema, i) => {
                            return (
                                <NavDropdown.Item title={sistema.name} key={i} className="d-flex align-items-center">
                                    <img src={sistema.image} width="30" style={{filter: 'invert(100%)'}}  alt={sistema.name} />
                                </NavDropdown.Item>
                            );
                        })}
                    </NavDropdown>
                </li>
                <li className="nav-item">
                    <NavDropdown title={<FaRegBell size="25" title="Notificações" />} className={styles.navDropdown} id="notificacoes">
                        <NavDropdown.Item href="#action3">Fulano de Tal</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">20176446551255</NavDropdown.Item>
                    </NavDropdown>
                </li>
                <li className="nav-item">
                    <NavDropdown title={<FaUser size="25" title="Informações da Conta" />} className={styles.navDropdown} id="conta">
                        <h5>
                            Seja Bem Vindo, 201720849118 <br />
                            <small className="text-muted">
                                Administrador <br />
                                Servidor
                            </small>
                        </h5>
                    </NavDropdown>
                </li>
            </ul>
        </Nav>
    );
};

export default Navbar;
