import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Collapse, Nav, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import './style.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          <Link className="nav-item-link" to="/home">
            <FiShoppingCart className="mr-2" color="white"/>E-Commerce-App
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Produtos</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className="nav-item-link" to="/produto/cadastro">Cadastro</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="nav-item-link" to="/produtos">Lista</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Usuarios</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className="nav-item-link" to="/usuarios">Lista</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <DropdownItem divider />
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FiUser size={20} color="gray" className="avatar-user" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className="nav-item-link" to="/usuarios/:id">Cadastro</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="nav-item-link" to="/">Sair</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

/*
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Collapse, Nav, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import './style.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand >
          <Link className="nav-item-link" to="/home">E-Commerce-App</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Produtos</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className="nav-item-link" to="/produto-cadastro">Cadastro</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="nav-item-link" to="/produto-lista">Lista</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Usuarios</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className="nav-item-link" to="/usuario-cadastro">Cadastro</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="nav-item-link" to="/usuario-lista">Lista</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
*/