import React, { Component } from 'react';

import fakeAuth from '../helpers/fake-auth';

import {
  Container,
  Row, Col, Card,
  Button,Navbar,NavItem,NavbarBrand,Nav,NavLink
} from 'reactstrap';

import { Link } from 'react-router-dom';

class Home extends Component {

  onSairClick = () => {
    fakeAuth.setAuthenticated(false)
    this.props.history.push('/')
  }

  render() {
    return (
      <div><br/>
        <Container>
        <Navbar color="primary" expand="xs">
            <NavbarBrand> 
              <Link to='/'></Link>
            </NavbarBrand>
            <Nav className="">
                  <b>REACT JS</b>
            </Nav>
          </Navbar>
          <Row>
            <Col>
              <Card className="text-center" body>
                <Link to="/api/cadastrarUsuarios">
                  <Button>
                    <h6>Novo Usuario</h6> 
                  </Button>
                </Link>
              </Card>
            </Col>
            <Col>
              <Card className="text-center" body>
                <Link to="/api/usuarios">
                  <Button>
                    <h6>Lista Usuario</h6>
                  </Button>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <Card className="text-center" body>
                <Link to="/api/cadastrarTarefas">
                  <Button >
                    <h6>Nova Tarefa</h6> 
                  </Button>
                </Link>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="text-center" body>
                <Link to="/api/tarefas">
                  <Button>
                    <h6>Lista Tarefas</h6> 
                  </Button>
                </Link>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col className="text-center">
              <Button className="ml-auto" onClick={this.onSairClick}>
                Sair
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home;