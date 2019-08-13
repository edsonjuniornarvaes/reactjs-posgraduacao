import React, { Component } from 'react';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

import fakeAuth from '../helpers/fake-auth';
import "./styles.css";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  onEntrarClick = () => {
    fakeAuth.setAuthenticated(true,
      this.props.history.push('/api/home'));
  }

  render() {  
    return (
      <div className="d-flex justify-content-center col">
        <Container>
          <br/>
          <h2 className="text-center">Tela de Login</h2>
          <Form className="form" onSubmit={this.handleSubmit}>
            <Col>
              <FormGroup>
              <Label for="email"><b>E-mail:</b></Label>
                <Input
                  autoFocus
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="password"><b>Senha:</b></Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button 
              color="primary"
              width="sm"
              block
              disabled={ !this.validateForm() }
              onClick={ this.onEntrarClick } >
                Login
            </Button>
            </Col>
          </Form>
        </Container>
      </div>
    );
  }

}

export default Login;