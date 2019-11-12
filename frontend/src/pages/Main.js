import React, { Component } from "react";
import api from "../services/api";
import BarraNavegacao from "../components/BarraNavegacao";
import BarraPaginacao from "../components/BarraPaginacao";
import "./css/Main.css";
import { Container } from "reactstrap";

export default class Main extends Component {
  state = {
    sons: []
  };

  async componentDidMount() {
    const response = await api.get("listar_sons");
    this.setState({ sons: response.data });
  }

  playSound(filename) {
    const soundButtonObj = new Audio(
      "http://localhost:3000/uploads/" + filename
    );
    soundButtonObj.play();
  }

  render() {
    return (
      <Container fluid className="main-wrapper full-height bg-light">
        <BarraNavegacao />

        <h2>Lista de ButtonsSound</h2>
        <br />
        <div className="sounds-wrapper">
          {this.state.sons.map(som => (
            <div
              key={som._id}
              className="sound-wrapper"
              style={{ position: "relative" }}
            >
              <div
                className="circle small-button-background"
                style={{ backgroundColor: som.cor }}
              />
              <div
                className="small-button"
                onMouseDown={() => this.playSound(som.filename)}
              />
              <div
                className="small-button-shadow"
                style={{ marginBottom: "5px" }}
              />
              <span>{som.nome}</span>
            </div>
          ))}
        </div>

        <div className="pagination-wrapper">
          <BarraPaginacao />
        </div>
      </Container>
    );
  }
}
