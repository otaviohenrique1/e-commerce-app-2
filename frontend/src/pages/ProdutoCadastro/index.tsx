import { Container, Row, Col, Button, Alert } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./style.css"
import Campo from "../../components/Campo";
import { useHistory } from "react-router-dom";

export default function ProdutoCadastro() {
  const history = useHistory();

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

  return (
    <Container>
      <Row>
        <Col md={12} className="mb-5 mt-5">
          <h1>Cadastro de Produtos</h1>
        </Col>
      </Row>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const data = new FormData();
          data.append('nome', values.nome);
          data.append('descricao', values.descricao);
          data.append('preco', values.preco);
          data.append('publicacao', values.publicacao);
          console.log(data);
          alert('Cadastro realizado com sucesso!');
          history.push('/produto-lista');
        }}
      >
        {({errors, touched}) => (
          <Form>
            <Campo
              htmlFor="nome"
              label="Nome"
              typeInput="text"
              nameInput="nome"
              idInput="nome"
              placeholderInput="Digite o nome do produto"
              erro={(errors.nome && touched.nome) ? (<Alert color="danger">{errors.nome}</Alert>) : null}
            />
            <Campo
              htmlFor="descricao"
              label="Descrição"
              typeInput="textarea"
              nameInput="descricao"
              idInput="descricao"
              placeholderInput="Digite a descricao do produto"
              erro={(errors.descricao && touched.descricao) ? (<Alert color="danger">{errors.descricao}</Alert>) : null}
            />
            <Campo
              htmlFor="preco"
              label="Preço"
              typeInput="number"
              nameInput="preco"
              idInput="preco"
              placeholderInput="Digite o preço do produto"
              erro={(errors.preco && touched.preco) ? (<Alert color="danger">{errors.preco}</Alert>) : null}
            />
            <Campo
              htmlFor="publicacao"
              label="Publicação"
              typeInput="date"
              nameInput="publicacao"
              idInput="publicacao"
              placeholderInput="Digite a data de publicacao do produto"
              erro={(errors.publicacao && touched.publicacao) ? (<Alert color="danger">{errors.publicacao}</Alert>) : null}
            />
            <div className="button-container">
              <Button color="primary" type="submit">Salvar</Button>
              <Button color="danger" type="reset">Limpar</Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}