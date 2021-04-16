import { useState } from "react";
import { Form, Formik } from "formik";
import Campo from "../../components/Campo";
import * as Yup from "yup";
import { Alert, Button, ButtonGroup, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { listaProdutosTeste, imagensTeste } from "../../utils/lista-produtos-teste";
import './style.css';

interface ProdutoDadosParamsProps {
  id: string;
}

export default function ProdutoDados() {
  const [modoEdicao, setModoEdicao] = useState(false);
  let { id } = useParams<ProdutoDadosParamsProps>();

  return (
    <>
      <Row>
        <Col className="mt-5" md={12} sm={12} lg={12} xl={12} xs={12}>
          <h1>ProdutoDados</h1>
        </Col>
        <Col className="mt-5" md={12}>
          {(modoEdicao === false) ? (
            <DadosProduto
              data={imagensTeste}
              id={id}
              onCallback={() => setModoEdicao(!modoEdicao)}
            />
          ) : (
            <FormularioEdicaoDadosUsuario
              data={imagensTeste}
              id={id}
              onCallback={() => setModoEdicao(!modoEdicao)}
            />
          )}
        </Col>
      </Row>
    </>
  );
}

interface DadosProdutoProps {
  data: string[];
  id: string
  onCallback: () => void;
}

const DadosProduto = ({ data, id, onCallback }: DadosProdutoProps) => {
  return (
    <ListGroup>
      <ListGroupItem>
        {`Nome: ${listaProdutosTeste[parseInt(id)].nome}`}
      </ListGroupItem>
      <ListGroupItem>
        {`Descrição: ${listaProdutosTeste[parseInt(id)].descricao}`}
      </ListGroupItem>
      <ListGroupItem>
        {`Preço: ${listaProdutosTeste[parseInt(id)].preco}`}
      </ListGroupItem>
      <ListGroupItem>
        {`Publicação: ${listaProdutosTeste[parseInt(id)].publicacao}`}
      </ListGroupItem>
      <ListGroupItem>
        {data.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              alt="imagem"
              width={30}
              height={30}
            />
          );
        })}
      </ListGroupItem>
      <ListGroupItem style={{ textAlign: 'right' }}>
        <ButtonGroup>
          <Button
            color="info"
            onClick={onCallback}
          >Alterar</Button>
          <Link to="/produtos/" className="btn-item-link"
          >
            <Button color="primary"
              className="btn-voltar"
            >Voltar</Button>
          </Link>
        </ButtonGroup>
      </ListGroupItem>
    </ListGroup>
  );
}

interface FormTypes {
  nome: string;
  descricao: string;
  preco: number;
  publicacao: string;
}

const FormularioEdicaoDadosUsuario = ({ data, id, onCallback }: DadosProdutoProps) => {
  const nome = listaProdutosTeste[parseInt(id)].nome;
  const descricao = listaProdutosTeste[parseInt(id)].descricao;
  const preco = listaProdutosTeste[parseInt(id)].preco;
  const publicacao = listaProdutosTeste[parseInt(id)].publicacao;

  const initialValues = {
    nome: (nome) ? nome : '',
    descricao: (descricao) ? descricao : '',
    preco: (preco) ? preco : 0,
    publicacao: (publicacao) ? publicacao : '',
  };
  
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome é obrigatorio'),
    descricao: Yup.string().required('O campo descrição é obrigatorio'),
    preco: Yup.number().required('O campo preço é obrigatorio'),
    publicacao: Yup.string().required('O campo publicação é obrigatorio'),
  });

  async function handleSubmitForm(values: FormTypes) {
    const data = new FormData();
    data.append('nome', values.nome);
    data.append('descricao', values.descricao);
    data.append('preco', (values.preco).toString());
    data.append('publicacao', values.publicacao);
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
            htmlFor="descricao"
            label="Descrição"
            typeInput="email"
            nameInput="descricao"
            idInput="descricao"
            placeholderInput="Digite a descrição do usuario"
            erro={(errors.descricao && touched.descricao) ? (<Alert color="danger">{errors.descricao}</Alert>) : null}
          />
          <Campo
            htmlFor="preco"
            label="Preço"
            typeInput="password"
            nameInput="preco"
            idInput="preco"
            placeholderInput="Digite a preco do usuario"
            erro={(errors.preco && touched.preco) ? (<Alert color="danger">{errors.preco}</Alert>) : null}
          />
          <Campo
            htmlFor="publicacao"
            label="Publicação"
            typeInput="date"
            nameInput="publicacao"
            idInput="publicacao"
            placeholderInput="Digite a publicação do usuario"
            erro={(errors.publicacao && touched.publicacao) ? (<Alert color="danger">{errors.publicacao}</Alert>) : null}
          />
          <Row>
            <Col md={12}>
              {data.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    alt="imagem"
                    width={30}
                    height={30}
                  />
                );
              })}
            </Col>
          </Row>
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