import { Container, Row, Col, Button, ButtonGroup, Alert } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./style.css"
import Campo from "../../components/Campo";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function Login() {
  // const history = useHistory();

  const initialValues = {
    email: '',
    senha: '',
  };
  
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('O campo email é obrigatorio'),
    senha: Yup.string().required('O campo senha é obrigatorio'),
  });

  return (
    <Container>
      <Row>
        <Col md={12} className="mb-5 mt-5">
          <h1>E-Commerce-App</h1>
          <h2>Login</h2>
        </Col>
      </Row>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const data = new FormData();
          data.append('email', values.email);
          data.append('senha', values.senha);
          console.log(data);
        }}
      >
        {({errors, touched}) => (
          <Form>
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
            {/* <Label>adasd</Label> */}
            <Row>
              <Col md={12} className="novo-usuario-btn ">
                <Link
                  to="/usuario/cadastro"
                  style={{
                    textDecoration: 'none',
                    color: 'white'
                  }}>
                  <Button color="info" type="button">Novo usuario</Button>
                </Link>
              </Col>
              <Col md={12} className="button-container">
                <ButtonGroup>
                  <Button color="primary" type="submit">Entrar</Button>
                  <Button color="danger" type="reset">Limpar</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
