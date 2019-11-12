import React, { Component } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class BarraNavegacao extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="warning" light expand="md">
                    <NavbarBrand href="/">SONSBUG</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/adicionar_som/">Adicionar Som+</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Main/">Listar Sons</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <LinkContainer to="/adicionar_som/">
                                        <DropdownItem>
                                            Adicionar Som+
                                        </DropdownItem>
                                    </LinkContainer>
                                    <LinkContainer to="/Main/">
                                        <DropdownItem>
                                            Listar Sons
                                        </DropdownItem>
                                    </LinkContainer>

                                    <DropdownItem divider />

                                    <IndexLinkContainer to="/">
                                        <DropdownItem>
                                            Deslogar
                                        </DropdownItem>
                                    </IndexLinkContainer>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}