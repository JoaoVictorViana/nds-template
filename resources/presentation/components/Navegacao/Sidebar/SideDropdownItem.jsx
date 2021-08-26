import React from 'react';
import {Link} from "react-router-dom";
import {FaAngleDown, FaAngleRight} from "react-icons/fa";
import EventEmitter from "../../../../core/helpers/EventEmitter";

const SideDropdownItem = ({item}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    EventEmitter.subscribe('closeNavItens', (e) => {
        if(!isOpen)
            setIsOpen(false);
    });

    return (
        <li className="side-dropdown-item">
            <a className={"list-group-item list-group-item-action d-flex align-items-center"} onClick={toggle} data-toggle="collapse" aria-expanded="false">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    {item.icon}
                    <span>{item.name}</span>
                    { !isOpen && <FaAngleRight className="ms-auto angle-icon" /> }
                    { isOpen && <FaAngleDown className="ms-auto angle-icon" /> }
                </div>
            </a>
            <div className={ (isOpen ? 'show ' : 'collapse ') + "sidebar-submenu"}>
                {
                    item.itens.map((sub, si) => {
                        return (
                            <Link as='a' to={sub.to ?? '/'} key={si} href="#" className="list-group-item list-group-item-action bg-dark text-white text-wrap" style={{paddingLeft: '60px'}}>
                                <span className="menu-collapsed">{sub.name}</span>
                            </Link>
                        );
                    })
                }
            </div>
        </li>
    );
};

export default SideDropdownItem;
