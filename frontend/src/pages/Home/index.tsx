import { Button, Col, Label, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css";
import { FiList, FiPenTool, FiUsers } from "react-icons/fi";

export default function Home() {
  const usuario = 'Usuario';
  return (
    <>
      <Row>
        <Col md={12}>
          <h1 className="mt-5">Bem Vindo{` ${usuario}`}</h1>
        </Col>
        <Col className="mt-5 area-btn-home">
          <Link to="/produto/cadastro">
            <Button color="primary" className="btn-home">
              <FiPenTool size={50} color="white"/><br/>
              <Label>Cadastro de produtos</Label>
            </Button>
          </Link>
          <Link to="/produtos">
            <Button color="success" className="btn-home">
              <FiList size={50} color="white"/><br/>
              <Label>Lista de produtos</Label>
            </Button>
          </Link>
          <Link to="/usuarios">
            <Button color="info" className="btn-home">
              <FiUsers size={50} color="white"/><br/>
              <Label>Lista de usuarios</Label>
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}