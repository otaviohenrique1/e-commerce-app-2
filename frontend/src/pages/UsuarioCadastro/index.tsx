import { Container, Row, Col, Button, Alert } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./style.css"
import Campo from "../../components/Campo";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

interface FormTypes {
    nome: string;
    email: string;
    senha: string;
}

export default function CadastroUsuarios() {
  const history = useHistory();

  const initialValues = {
    nome: '',
    email: '',
    senha: '',
  };
  
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatorio'),
    descricao: Yup.string().required('O campo email é obrigatorio'),
    preco: Yup.string().required('O campo senha é obrigatorio'),
  });

  async function handleSubmitForm(values: FormTypes) {
    const data = new FormData();
    data.append('nome', values.nome);
    data.append('email', values.email);
    data.append('senha', values.senha);
    await api.post('produtos', data);
    // console.log(data);
    alert('Cadastro realizado com sucesso!');
    history.push('/usuarios');
  }

  return (
    <Container>
      <Row>
        <Col md={12} className="mb-5 mt-5">
          <h1>Cadastro de Usuários</h1>
        </Col>
      </Row>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmitForm(values)}
      >
        {({errors, touched}) => (
          <Form>
            <Campo
              htmlFor="nome"
              label="Nome"
              typeInput="text"
              nameInput="nome"
              idInput="nome"
              placeholderInput="Digite o nome do usuario"
              erro={(errors.nome && touched.nome) ? (<Alert color="danger">{errors.nome}</Alert>) : null}
            />
            <Campo
              htmlFor="email"
              label="Email"
              typeInput="email"
              nameInput="email"
              idInput="email"
              placeholderInput="Digite a email do usuario"
              erro={(errors.email && touched.email) ? (<Alert color="danger">{errors.email}</Alert>) : null}
            />
            <Campo
              htmlFor="senha"
              label="Senha"
              typeInput="password"
              nameInput="senha"
              idInput="senha"
              placeholderInput="Digite a senha do usuario"
              erro={(errors.senha && touched.senha) ? (<Alert color="danger">{errors.senha}</Alert>) : null}
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
