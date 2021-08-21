import React from 'react';
import Navbar from "../../components/Navegacao/Navbar/Navbar";
import {Card, Col, Row} from "react-bootstrap";
import Sidebar from "../../components/Navegacao/Sidebar/Sidebar";

import {Route, Switch} from "react-router-dom";

import routes from './Dashboard.routes';
import Footer from "../../components/Footer/Footer";

import styles from './Dashboard.module.css';
import {SidebarContext} from "../../contexts/SidebarContext";

const Dashboard = () => {
    const context = React.useContext(SidebarContext);

    const [contentClass, setContentClass] = React.useState(styles.content);

    React.useEffect(() => {
        if(!context.collapsed) {
            setContentClass(styles.content)
        }

        if(context.collapsed) {
            setContentClass(styles.contentCollapsed + ' ' + styles.content)
        }
    }, [context.collapsed]);

    return (
        <>
            <Navbar />
            <Row id="body-row">
                <Sidebar />
                <Col id="content" className={contentClass}>
                    <Card className="" style={{minHeight: (!context.isMobile ? 'calc(100vh - 148px)' : 'calc(100vh - 75px)')}}>
                        <Switch>
                            {routes.map((route, i) => {
                                return <Route {...route} key={i} />
                            })}
                        </Switch>
                    </Card>
                    {!context.isMobile && <Footer />}
                </Col>
            </Row>
        </>
    );
};

export default Dashboard;
