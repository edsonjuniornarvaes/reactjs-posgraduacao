# React
Trabalho do curso de Pós-Graduação em Desenvolvimento Web e Dispositivos Móveis.

        <BrowserRouter>
          <Container>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/api/cadastrarUsuarios" component={CadastrarUsuario} />
            <PrivateRoute path="/api/usuarios" component={ListarUsuario} />
            <PrivateRoute path="/api/cadastrarTarefas" component={CadastrarTarefas} />
            <PrivateRoute path="/api/tarefas" component={ListarTarefas} />
            <PrivateRoute path="/api/home" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        </BrowserRouter>
