import React, { Component } from "react";
import { FaGithubAlt, FaPlus, FaSpinner } from "react-icons/fa";

import api from "../../services/api";

import { Container, Form, SubmitButton, List } from "./styles";

export class Main extends Component {
  state = {
    newRepo: "",
    repositories: [],
    loading: false
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault(); //evita que o formulario faca refresh na pagina

    this.setState({ loading: true });

    // const {newRepo, repositories} = this.state;

    const response = await api.get(`/repos/${this.state.newRepo}`);

    // console.log(response.data);

    const data = {
      name: response.data.full_name
    };

    this.setState({
      repositories: [...this.state.repositories, data],
      newRepo: "",
      loading: false
    });
  };

  render() {
    // const { newRepo } = this.state;

    return (
      <>
        <Container>
          <h1>
            <FaGithubAlt />
            Repositórios
          </h1>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Adicionar repositório"
              value={this.state.newRepo}
              onChange={this.handleInputChange}
            />
            <SubmitButton loading={this.state.loading}>
              {this.state.loading ? (
                <FaSpinner color="#FFF" size={14} />
              ) : (
                <FaPlus color="#FFF" size={14} />
              )}
            </SubmitButton>
          </Form>

          <List> 
            {this.state.repositories.map(repository=>(
              <li key={repository.name}>
                <span>{repository.name}</span>
                <a href="">Detalhes</a>

              </li>
            ))}
          </List>
        </Container>
      </>
    );
  }
}

export default Main;
