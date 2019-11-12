import React, { Component } from 'react';
import api from '../services/api';
import BarraNavegacao from '../components/BarraNavegacao';
import './css/AdicionarSom.css';
import Select from 'react-select';
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

const options = [
    { value: '#ff0000', label: 'vermelho claro' },
    { value: '#aa0000', label: 'vermelho' },
    { value: '#aabbcc', label: 'vermelho escuro' },
    { value: '#0000ff', label: 'azul claro' },
    { value: '#0000aa', label: 'azul' },
    { value: '#000055', label: 'azul escuro' },
    { value: '#00ff00', label: 'verde claro' },
    { value: '#00aa00', label: 'verde' },
    { value: '#005500', label: 'verde escuro' }
];

export default class AdicionarSom extends Component {

    state = {
        nome: '',
        selectedOption: null,
        file: []
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleFileChange = e => {
        this.setState({ file: e.target.files[0] })
    }

    handleSelectChange = (selectedOption) => {
        this.setState({ selectedOption });
    }

    handleNovoSom = async e => {

        e.preventDefault();

        let formData = new FormData();
        formData.append("nome", this.state.nome);
        formData.append("cor", this.state.selectedOption.value);
        formData.append("file", this.state.file);

        await api.post('adicionar_som', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        this.setState({ nome: '' });
        this.setState({ selectedOption: null });
        this.setState({ file: [] });
        document.getElementById("adicionar-som-form").reset();
    };

    render() {
        return (
            <Container fluid className="adicionar-som-wrapper full-height bg-light">
                <BarraNavegacao />
                <br /><br />
                <Row className="h-100 justify-content-center align-items-center bg-light">
                    <Col sm={5} className="inner-adicionar-som-wrapper">
                        <Card>
                            <CardBody>
                                <CardTitle>Adicionar Novo Som</CardTitle>
                                <CardText>Selecione nome, cor e arquivo .mp3</CardText>
                                <Form className="form-adicionar-som" id="adicionar-som-form" onSubmit={this.handleNovoSom}>

                                    <Col>
                                        <FormGroup>
                                            <Label>Nome do som</Label>
                                            <Input
                                                type="text" name="nome" id="nome"
                                                value={this.state.nome}
                                                onChange={this.handleInputChange}
                                                placeholder=""
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>Selecione a cor do botão</Label>
                                            <Select
                                                placeholder="Selecione a cor do botão"
                                                value={this.state.selectedOption}
                                                onChange={this.handleSelectChange}
                                                options={options}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>Selecione o arquivo .mp3</Label>
                                            <br />
                                            <Input
                                                type="file" name="file" id="file"
                                                accept="audio/*"
                                                onChange={this.handleFileChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <br />
                                    <Col>
                                        <FormGroup>
                                            <Button color="danger" type="submit">Salvar</Button>
                                        </FormGroup>
                                    </Col>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}