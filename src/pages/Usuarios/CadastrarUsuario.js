import React, { Component } from 'react'

import fakeAuth from '../../helpers/fake-auth';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,Navbar,NavItem,NavbarBrand,Nav,
} from 'reactstrap';

class CadastrarUsuario extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nome: '',
      email: '',
      password: ''
    }
  }

  onChange = event => {
    const value = event.target.value
    const nome = event.target.nome
    const email = event.target.email
    const password = event.target.password
    this.setState({
      [nome]: value,
      [email]: value,
      [password]: password
    })
  }

  onEntrarClick = () => {
    fakeAuth.setAuthenticated(true,
      this.props.history.push('/api/home'))
  }

  render() {
    return (
      <div><br/>
      <Container>
      <Navbar color="primary" expand="xs">
            <NavbarBrand> 
            </NavbarBrand>
            <Nav className="">
                  <b>CADASTRO</b>
            </Nav>
          </Navbar>
        <h2 className="text-center"><b>Novo Usuario:</b></h2>
        <Form>
          <Col>
            <FormGroup>
            <Label for="nome"><b>Nome:</b></Label>
            <Input 
              autoFocus 
              type="text" 
              name="nome" 
              onChange={this.onChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
            <Label for="email"><b>E-mail:</b></Label>
            <Input 
              type="email" 
              name="email" 
              onChange={this.onChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="password"><b>Senha:</b></Label>
              <Input
                type="password" 
                name="password" 
                onChange={this.onChange} />
            </FormGroup>
            <Button 
            color="primary"
            block
            onClick={ this.onEntrarClick } >
              ok
          </Button>
          </Col>
        </Form>
      </Container>
    </div>
    )
  }
}

export default CadastrarUsuario;