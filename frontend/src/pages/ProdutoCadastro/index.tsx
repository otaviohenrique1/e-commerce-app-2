import { Container, Row, Col, Button, Alert, Label, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./style.css"

export default function ProdutoCadastro() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>Cadastro de Produtos</h1>
        </Col>
      </Row>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({errors, touched}) => (
          <Form>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Label htmlFor="nome">Nome</Label>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="text" name="nome" id="nome" placeholder="Digite o nome do produto" />
              </InputGroup>
              <span>{(errors.nome && touched.nome) ? (<Alert color="danger">{errors.nome}</Alert>) : null}</span>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Label htmlFor="descricao">Descrição</Label>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="textarea" name="descricao" id="descricao" placeholder="Digite a descricao do produto" />
              </InputGroup>
              <span>{(errors.descricao && touched.descricao) ? (<Alert color="danger">{errors.descricao}</Alert>) : null}</span>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Label htmlFor="preco">Preço</Label>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="number" name="preco" id="preco" placeholder="Digite o preço do produto" />
              </InputGroup>
              <span>{(errors.preco && touched.preco) ? (<Alert color="danger">{errors.preco}</Alert>) : null}</span>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Label htmlFor="publicacao">Publicação</Label>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="date" name="publicacao" id="publicacao" placeholder="Digite a data de publicacao do produto" />
              </InputGroup>
              <span>{(errors.publicacao && touched.publicacao) ? (<Alert color="danger">{errors.publicacao}</Alert>) : null}</span>
            </FormGroup>
            <Button color="primary" type="submit">Salvar</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

const initialValues = {
  nome: '',
  descricao: '',
  preco: '',
  publicacao: '',
};

const validationSchema = Yup.object().shape({
  nome: Yup.string().required('O campo nome é obrigatorio'),
  descricao: Yup.string().required('O campo descricao é obrigatorio'),
  preco: Yup.number().required('O campo preco é obrigatorio'),
  publicacao: Yup.date().required('O campo publicação é obrigatorio'),
});