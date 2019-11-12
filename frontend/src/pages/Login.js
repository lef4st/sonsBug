import React, { Component } from 'react';
import './css/Login.css';
import {
  Form,
  FormGroup, 
  Label, 
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Input,
  Row,
} from 'reactstrap';

export default class Login extends Component {

  state = {
    username: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem('@SonsBug:username', username);

    this.props.history.push('/main');
  }

  handleInputChange = e => {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <Container fluid className="login-wrapper full-height bg-light">
        <Row className="h-100 justify-content-center full-height align-items-center bg-light">
          <Col sm={5} className="inner-login-wrapper">
            <Card>
              <CardBody>
                <CardTitle>LOGIN</CardTitle>
                <CardText>Faça login com a sua conta</CardText>
                <Form className="form-login" onSubmit={this.handleSubmit}>
                  <Col>
                    <FormGroup>
                      <Label>E-mail</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="myemail@email.com"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <Button type="submit" color="primary">Entrar</Button>
                  </Col>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}