import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Alert, Button, ButtonGroup, Col, Label, ListGroup, ListGroupItem, Row } from "reactstrap";
import * as Yup from "yup";
import Campo from "../../components/Campo";

export default function UsuarioDados() {
  const nome = 'Usuario';
  const email = 'usuario@email.com';
  const senha = '***************';
  const [modoEditaDados, setModoEditaDados] = useState(false);

  return (
    <>
      <Row className="mt-5">
        <Col md={12}>
          <h1>UsuarioDados</h1>
        </Col>
        <Col md={12} className="mt-4">
          {(modoEditaDados === false) ? (
            <DadosUsuario
              nome={nome}
              email={email}
              senha={senha}
              onCallback={() => setModoEditaDados(!modoEditaDados)}
            />
          ) : (
            <FormularioEdicaoDadosUsuario
              nome={nome}
              email={email}
              senha={senha}
              onCallback={() => setModoEditaDados(!modoEditaDados)}
            />
          )}
        </Col>
      </Row>
    </>
  );
}


interface DadosUsuarioProps {
  nome: string;
  email: string;
  senha: string;
  onCallback: () => void;
}

const DadosUsuario = ({ nome, email, senha, onCallback }: DadosUsuarioProps) => {
  return (
    <ListGroup>
      <ListGroupItem>
        <Label>{`Nome: ${nome}`}</Label>
      </ListGroupItem>
      <ListGroupItem>
        <Label>{`Email: ${email}`}</Label>
      </ListGroupItem>
      <ListGroupItem>
        <Label>{`Senha: ${senha}`}</Label>
      </ListGroupItem>
      <ListGroupItem style={{ textAlign: 'right' }}>
        <Button
          color="info"
          onClick={onCallback}
        >Alterar</Button>
      </ListGroupItem>
    </ListGroup>
  );
}

interface FormTypes {
  nome: string;
  email: string;
  senha: string;
}

const FormularioEdicaoDadosUsuario = ({ nome, email, senha, onCallback }: DadosUsuarioProps) => {
  const initialValues = {
    nome: (nome) ? nome : '',
    email: (email) ? email : '',
    senha: (senha) ? senha : '',
  };
  
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatorio'),
    email: Yup.string().required('O campo email é obrigatorio'),
    senha: Yup.string().required('O campo senha é obrigatorio'),
  });

  async function handleSubmitForm(values: FormTypes) {
    const data = new FormData();
    data.append('nome', values.nome);
    data.append('email', values.email);
    data.append('senha', values.senha);
    // await api.post('usuarios', data);
    // console.log(data);
    alert('Cadastro realizado com sucesso!');
    onCallback();
  }

  return (
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
            <ButtonGroup>
              <Button color="primary" type="submit">Salvar</Button>
              <Button color="danger" type="reset">Limpar</Button>
              <Button
                color="secondary"
                type="button"
                style={{ textAlign: 'right' }}
                onClick={onCallback}
              >
                Voltar
              </Button>
            </ButtonGroup>
          </div>
        </Form>
      )}
    </Formik>
  );
}

/*
import { Formik } from "formik";
import React, { useState } from "react";
import { Alert, Button, ButtonGroup, Col, Form, Label, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import Campo from "../../components/Campo";
import * as Yup from "yup";

export default function UsuarioDados() {
  const nome = 'Usuario';
  const email = 'usuario@email.com';
  const senha = '***************';
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Row className="mt-5">
        <Col md={12}>
          <h1>UsuarioDados</h1>
        </Col>
        <Col md={12} className="mt-4">
          <ListGroup>
            <ListGroupItem>
              <Label>{`Nome: ${nome}`}</Label>
            </ListGroupItem>
            <ListGroupItem>
              <Label>{`Email: ${email}`}</Label>
            </ListGroupItem>
            <ListGroupItem style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Label>{`Senha: ${senha}`}</Label>
              <Button
                color="info"
                onClick={toggle}
              >
                Nova Senha
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Alterar senha</ModalHeader>
        <Formik
          initialValues={{ senha: '' }}
          validationSchema={Yup.object().shape({
            senha: Yup.string().required('O campo senha é obrigatorio'),
          })}
          onSubmit={(values) => {
            const data = new FormData();
            data.append('senha', values.senha);
            // await api.patch('usuarios', data);
            // console.log(data);
            alert('Senha alterada com sucesso!');
            // toggle();
          }}
        >
          {({errors, touched}) => (
            <Form>
              <ModalBody>
                <Campo
                  htmlFor="senha"
                  label="Senha"
                  typeInput="password"
                  nameInput="senha"
                  idInput="senha"
                  placeholderInput="Digite a senha do usuario"
                  erro={(errors.senha && touched.senha) ? (<Alert color="danger">{errors.senha}</Alert>) : null}
                />
              </ModalBody>
              <ModalFooter>
                <div className="button-container">
                  <ButtonGroup>
                    <Button color="primary" type="submit">Salvar</Button>
                    <Button color="danger" type="reset">Limpar</Button>
                    <Button
                      color="secondary"
                      type="button"
                      onClick={toggle}
                    >
                      Cancelar
                    </Button>
                  </ButtonGroup>
                </div>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}
*/