import React from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Galo Tweet</NavbarBrand>
      <Nav className="ml-auto" navbar>
        {props.logado ? (
           <Itens logout={props.logout}/>
        ) : (
          <NavItem>
            <NavLink onClick={props.login}>Login</NavLink>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

const  Itens = (props) => {
 return (
    <React.Fragment>
        <NavItem>
            <NavLink tag={Link} to="/usuario">Meu Perfil</NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} to="/configuracoes">Configurações</NavLink>
        </NavItem>

        <NavItem>
            <NavLink onClick={props.logout}>Logout</NavLink>
        </NavItem>
    </React.Fragment>   
  )
}

export default Header;
