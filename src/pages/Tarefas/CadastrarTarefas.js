import React, { Component } from 'react'
import fakeAuth from '../../helpers/fake-auth';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,Navbar,NavItem,NavbarBrand,Nav,
} from 'reactstrap';

class CadastrarTarefas extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nomeTarefa: '',
      descricao: ''
    }
  }

  onChange = event => {
    const value = event.target.value
    const nomeTarefa = event.target.nomeTarefa
    const descricao = event.target.descricao
    this.setState({
      [nomeTarefa]: value,
      [descricao]: descricao
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
        <h2 className="text-center"><b>Nova Tarefa:</b></h2>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
            <Label for="nomeTarefa"><b>Tarefa:</b></Label>
            <Input 
              type="text" 
              name="nomeTarefa"
              onChange={this.onChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="descricao"><b>Descreva a Tarefa:</b></Label>
              <Input 
                type="text" 
                name="descricao" 
                onChange={this.onChange} />
            </FormGroup>
            <Button 
            color="primary"
            block
            onClick={ this.onEntrarClick } >
              Salvar
          </Button>
          </Col>
        </Form>
      </Container>
    </div>
    )
  }
}

export default CadastrarTarefas;