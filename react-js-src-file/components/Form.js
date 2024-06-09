import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class ContactForm extends React.Component  {
  constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  }

  handleSubmit(event) {
    alert(`A name was submitted: 
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Phone: ${this.state.phone}
      Email: ${this.state.email}
      Message: ${this.state.message}`);
    event.preventDefault();

  }

  render (){
    return(
    <Container>
      <div className='form-wrap'>
      <Row>
        <Col>
        <h3 className='mb-4'>Kindly reach us to get<br/>
the fastest response and treatment</h3>
</Col>
      </Row>
      <Row>
      <Form onSubmit={this.handleSubmit}>
        <Col sm={12} className='text-center'>
        <Row>
        <Col sm={6}>
        <Form.Group className="mb-3">
         <Form.Label>First Name</Form.Label>
         <Form.Control type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
         </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group className="mb-3">
         <Form.Label>Last Name</Form.Label>
         <Form.Control type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
         </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={6}>
        <Form.Group className="mb-3">
         <Form.Label>Phone</Form.Label>
         <Form.Control type="tel" placeholder="Phone No" name="phone" value={this.state.phone} onChange={this.handleChange} />
         </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
        </Form.Group>
        </Col>
        </Row>
        <Col sm={12}>
        <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Message" name="message" value={this.state.message} onChange={this.handleChange} />
        </Form.Group>
        </Col>
        <Col sm={12} className='d-flex'>
        <Button className="form-button-style" variant="primary" type="submit" value="Submit">Submit</Button>
        </Col>
        </Col>
        </Form>
      </Row>
      </div>
    </Container>
);
}
}

export default ContactForm;
