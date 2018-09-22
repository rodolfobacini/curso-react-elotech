import React from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";

export default class Configuracoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      nomeUsuario: "",
      email: ""
    };
  }

  onChange = name => {
    return event => {
      const value = event && event.target ? event.target.value : event;
      this.setState({ [name]: value });
    };
  };

  render() {
    return (
      <Container>
        <div className="mt-2">
          <Form>
            <FormGroup>
              <Label for="nome">Nome</Label>
              <Input
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite o nome do usuário"
                value={this.state.nome}
                onChange={this.onChange("nome")}
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <Label for="nomeUsuario">Nome do Usuário</Label>
              <Input
                type="text"
                name="nomeUsuario"
                id="nomeUsuario"
                placeholder="Nome do usuário"
              />
            </FormGroup>
            <FormGroup>
              <Label for="url">Foto</Label>
              <Input
                type="text"
                name="foto"
                id="foto"
                placeholder="Insir a url da foto"
              />
            </FormGroup>
            <Button
              outline
              type="button"
              color="success"
              onClick={this.handleAddPost}
            >
              Salvar
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}
