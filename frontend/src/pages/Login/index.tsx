import { Button, Card, Col, Container, Input, Label, Row } from "reactstrap";

export default function ListaProdutos() {
  return (
    <Container>
      <Card>
        <h1 className="mb-5 mt-5">Login</h1>
        <Row>
          <Col md={12}>
            <Label>Login</Label>
            <Input type="text" placeholder="Digite o login" />
          </Col>
          <Col md={12}>
            <Label>Senha</Label>
            <Input type="password" placeholder="Digite a senha" />
          </Col>
          <Button
            type="button"
            color="primary"
            className="mt-5"
          >Entrar</Button>
        </Row>
      </Card>
    </Container>
  );
}