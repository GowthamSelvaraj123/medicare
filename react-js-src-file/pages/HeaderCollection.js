import React from 'react';
import SiteLogoComponent from '../components/Logo';
import NewMenuComponent from '../components/MainMenu';
import OffcanvasExample from '../components/offCanvas';
import { Navbar, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonComponent from '../components/ButtonComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const collageComponent = () => {
  return (
  <header>
   <Navbar>
   <Container>
    <div class="menu-wrap">
   <OffcanvasExample/>
  <NewMenuComponent />
  </div>
  <div class="site-logo-wrap">
  <div class="site-logo"><div><SiteLogoComponent /></div></div>
  </div>
  <div  class="button-wrap">
  <ButtonComponent buttontext="Appointment now" buttonstyle="primary"><Link to="/contact">Appointment now</Link>
</ButtonComponent>
  <ButtonComponent buttontext="9807654321" buttonstyle="primary" />
  </div>
    </Container>
    </Navbar>
</header>   
  );
};

export default collageComponent;