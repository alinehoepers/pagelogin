import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 2 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
  
  render() {
    return (
     
      <div className="Login" >
     
      <h1>Bem-vindx!</h1>
      <h2>Por favor, insira sua sigla e senha para prosseguir</h2>
     
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large" >
            
            <FormControl
             autoFocus
             type="input"
             placeholder = "Sigla"
             value={this.state.email}
             onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder = "Senha"
            />
          </FormGroup>
          <Button id= "buttonLogin"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
      
    );
  }
}