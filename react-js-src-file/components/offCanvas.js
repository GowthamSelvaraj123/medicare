import React from 'react';
import {Navbar,Offcanvas } from 'react-bootstrap';

function OffcanvasExample() {
    return (
        <div class="">
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          </div>
    );
  }
  
  export default OffcanvasExample;