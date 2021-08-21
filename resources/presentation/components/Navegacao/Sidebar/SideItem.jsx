import React from 'react';
import SideDropdownItem from "./SideDropdownItem";
import {Link} from "react-router-dom";

const SideItem = ({item, itemStyle}) => {
    if(item.dropdown)
        return <SideDropdownItem item={item} />

    return (<li className="side-item">
        <Link as='a' to={item.to ?? '/'} className={(item.active ? 'active ' : '') + "list-group-item list-group-item-action d-flex align-items-center"} >
            <div className="d-flex w-100 justify-content-start align-items-center">
                {item.icon}
                <span style={itemStyle} > {item.name} </span>
            </div>
        </Link>
    </li>)
};

export default SideItem;
