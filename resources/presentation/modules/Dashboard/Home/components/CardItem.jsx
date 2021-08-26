import React from 'react';
import {Card, Col} from "react-bootstrap";

import classes from './CardItem.module.css';
import {Link} from "react-router-dom";

const CardItem = ({icon, name, to}) => {
    return (
        <Col>
            <Link as='a' to={to ?? '/'} className="link-dark text-decoration-none">
                <Card className={classes.cardItem + " border-0"}>
                    <Card.Body className={"row align-items-center text-center"}>
                        {icon}
                        <Card.Title className="mt-3 fs-6">{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default CardItem;
