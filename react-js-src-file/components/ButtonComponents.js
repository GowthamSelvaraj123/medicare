import React from 'react';
import Button from 'react-bootstrap/Button';


const ButtonComponent = ({buttontext, buttonstyle, children}) => {

  return (
    <>
        <Button variant={buttonstyle}>{children || buttontext}
        </Button>
        </>
  );
};

export default ButtonComponent;