import React from 'react';
import SideItem from "./SideItem";
import {FaClock, FaFile, FaHome, FaMagic, FaPlus, FaQuestion, FaRegArrowAltCircleLeft, FaUsers} from "react-icons/fa";
import {SidebarContext} from "../../../contexts/SidebarContext";

const Sidebar = () => {
    const context = React.useContext(SidebarContext);
    const itens = [
        {
            icon: <FaClock />,
            name: 'Intranet',
            to: ''
        },
        {
            icon: <FaHome />,
            name: 'Página Inicial',
            to: '/',
            active: true,
        },
        {
            icon: <FaRegArrowAltCircleLeft />,
            name: 'Voltar'
        },
        {
            icon: <FaPlus />,
            name: 'Cadastros',
            dropdown: true,
            itens: [
                {
                    name: 'Pessoas',
                    to: '/pessoas'
                },
                {
                    name: 'Cargos',
                    to: '/cargos'
                },
                {
                    name: 'Funções',
                    to: '/funcoes'
                },
                {
                    name: 'Feriados',
                    to: '/feriados'
                },
                {
                    name: 'Cargas Horárias',
                    to: 'cargas-horarias'
                },
                {
                    name: 'Terminais',
                    to: '/terminais'
                },
                {
                    name: 'Motivos de Ocorr.',
                    to: '/motivos-de-ocorrencias'
                },
            ]
        },
        {
            icon: <FaFile />,
            name: 'Frequências',
            dropdown: true,
            itens: [
                {
                    name: 'Geração'
                },
                {
                    name: 'Frequência Vazia'
                },
                {
                    name: 'Ver Devoluções'
                },
                {
                    name: 'Listagem Ocorrências'
                }
            ]
        },
        {
            icon: <FaUsers />,
            name: 'Colaborador',
            dropdown: true,
            itens: [
                { name: 'Devoluções' },
                { name: 'Frequências' },
                { name: 'Horários' },
                { name: 'Ocorrências' },
                { name: 'Relatórios' },
            ]
        },
        {
            icon: <FaMagic />,
            name: 'Extras',
            dropdown: true,
            itens: [
                { name: 'Calendário Acadêmico' },
                { name: 'Novidades' },
            ]
        },
        {
            icon: <FaQuestion />,
            name: 'Ajuda',
            dropdown: true,
            itens: [
                { name: 'Sobre o Sistema' },
                { name: 'Reporte um problema' },
                { name: 'Manuais' },
            ]
        }
    ];

    return (
        <div id="sidebar-container" onMouseEnter={context.mouseHoverSide} onMouseLeave={context.mouseLeaveSide} className={ context.collapsedClass }>
            <ul className="list-group">
                {
                    itens.map((item, i) => <SideItem item={item} key={i} />)
                }
            </ul>
        </div>
    );
};

export default Sidebar;
