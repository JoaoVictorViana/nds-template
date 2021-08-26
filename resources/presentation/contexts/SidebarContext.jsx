import React from "react";
import styles from "../modules/Dashboard/Dashboard.module.css";
import {useMediaQuery} from "react-responsive";
import EventEmitter from "../../core/helpers/EventEmitter";

export const SidebarContext = React.createContext({});

const SidebarProvider = ({ children }) => {

    const isMobile = useMediaQuery({ query: `(max-width: 540px)` });
    const [collapsed, setCollapsed] = React.useState(false);
    const [collapsedClass, setCollapsedClass] = React.useState("");
    const [styleSideContainer, setStyleSideContainer] = React.useState({});

    React.useEffect(() => {
        if(isMobile) {
            closeSide();
        }
        if(!isMobile) {
            openSide();
        }
    }, [isMobile]);

    const closeSide = () => {

        setCollapsed(true);

        setCollapsedClass(`sidebar-collapsed sidebar-expanded ${styles.collapsed}`);

        EventEmitter.dispatch('closeNavItens', null);
    }
    const openSide = () => {
        setCollapsed(false);
        setCollapsedClass(`sidebar-expanded`);
    }

    const toggleSide = () => {
        setCollapsed(!collapsed);
        if (!collapsed) {
            closeSide();
        }
        if (collapsed) {
            openSide();
        }
    }

    const mouseHoverSide = () => {
        if (!collapsed)
            return;
        EventEmitter.dispatch('closeNavItens', null);
    }

    const mouseLeaveSide = () => {
        if (!collapsed)
            return;
        EventEmitter.dispatch('closeNavItens', null);
    }

    return (
        <SidebarContext.Provider
            value={{
                isMobile, collapsed, setCollapsed, collapsedClass, setCollapsedClass,
                styleSideContainer, setStyleSideContainer,
                toggleSide, mouseHoverSide, mouseLeaveSide, openSide, closeSide
            }}>

            {children}
        </SidebarContext.Provider>
    );
}

export default SidebarProvider
