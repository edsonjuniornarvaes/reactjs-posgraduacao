import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';
import { Table } from 'reactstrap';
import axios from 'axios';
import {
  Navbar,NavItem,NavbarBrand,Nav,NavLink,
}from 'reactstrap';

class ListarTarefas extends Component {

  state = {
    tasks: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      const { data } = response;
      this.setState({
        tasks: data
      })
    })
    .catch(err => {
      console.warn(err);
      alert(err.message)
    })
  }

  renderTasks = () => {
    const { tasks } = this.state;
    const taskItems = tasks.map(task => {
      return (
        <tr>
          <td>{task.id}</td>
          <td>
            <Link to={'/api/tarefas/' + task.id}>
              {task.title}
            </Link>
          </td>
          <td>{task.userId}</td>
          <td>{task.completed ? 'Sim' : 'Não'}</td>
        </tr>
      )
    });
    return taskItems;
  }

  renderTaskDescription = (routeProps) => {
    const { tasks } = this.state;
    const taskId = parseInt(routeProps.match.params.taskId);
    const task = tasks.find( ( task )  => {
      return task.id === taskId;
    })

    if (!task) {
      return (
        <p><b>Erro!</b></p>
      )
    }

    return(
      <p>
        {task.id} ----- {task.title} ----- {task.completed ? 'Sim' : 'Não'}
      </p>
    )
  }
  
  render() {
    return (
      <div><br/>
              <Navbar color="primary" expand="xs">
            <NavbarBrand> 
            </NavbarBrand>
            <Nav className="">
                  <b>TAREFAS</b>
            </Nav>
          </Navbar>
        <Table bordered striped>
          <thead>
            <tr>
              <th><b>Id:</b></th>
              <th><b>Nome:</b></th>
              <th><b>Usuário:</b></th>
              <th><b>Concluída?</b></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTasks()}
          </tbody>
        </Table>

        <br />

        <div>
          {/* passando uma função invés de um componente */}
          <Route path="/tasks/:taskId" render={this.renderTaskDescription} />
        </div>
      </div>
    )
  }
}

export default ListarTarefas;