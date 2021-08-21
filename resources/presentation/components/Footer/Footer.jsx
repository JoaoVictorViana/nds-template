import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center p-0 px-1 pt-1 mt-3 mb-1 border-top">
                <p className="col-md-4 text-center text-muted" style={{ fontSize: '.9rem'}}>Núcleo de Desenvolvimento de Software - NDS</p>

                <p style={{ fontSize: '.9rem'}}
                   className="col-md-4 text-center text-muted d-flex align-items-center justify-content-center">
                    IFCE Campus Maracanaú - 2021
                </p>

                <p className="col-md-4 text-center text-muted justify-content-end" style={{ fontSize: '.9rem'}}>
                    Coordenadoria de Tecnologia da Informação - CTI
                </p>
            </footer>
        </>
    );
};

export default Footer;
