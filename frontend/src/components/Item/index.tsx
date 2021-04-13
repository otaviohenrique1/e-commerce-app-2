import React from "react";
import { Button, ButtonGroup, Col, ListGroup, ListGroupItem, Row } from "reactstrap";

interface ItemProps {
  valorCampo1?: any;
  valorCampo2?: any;
  onClickView?: () => void;
  onClickUpdate?: () => void;
  onClickDelete?: () => void;
}

interface ItemProdutoProps extends ItemProps {
  nome: string;
  preco: number;
}

interface ItemUsuarioProps extends ItemProps {
  nome: string;
  email: string;
}

export const Item: React.FC<ItemProps> = ({ valorCampo1, valorCampo2, onClickView, onClickUpdate, onClickDelete}) => {
  return (
    <ListGroup className="mb-3">
      <ListGroupItem>{valorCampo1}</ListGroupItem>
      <ListGroupItem>{valorCampo2}</ListGroupItem>
      <ListGroupItem>
        <Row>
          <Col md={12} style={{ textAlign: 'right' }}>
            <ButtonGroup>
              <Button
                type="button"
                color="info"
                onClick={onClickView}
              >Exibir</Button>
              <Button
                type="button"
                color="primary"
                onClick={onClickUpdate}
              >Alterar</Button>
              <Button
                type="button"
                color="danger"
                onClick={onClickDelete}
              >Remover</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
}

export const ItemProduto: React.FC<ItemProdutoProps> = ({ nome, preco, onClickView, onClickUpdate, onClickDelete}) => {
  return (
    <Item
      valorCampo1={`Nome: ${nome}`}
      valorCampo2={`Preço: R$ ${preco.toFixed(2)}`}
      onClickView={onClickView}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
    />
  );
}

export const ItemUsuario: React.FC<ItemUsuarioProps> = ({ nome, email, onClickView, onClickUpdate, onClickDelete }) => {
  return (
    <Item
      valorCampo1={`Nome: ${nome}`}
      valorCampo2={`Email: ${email}`}
      onClickView={onClickView}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
    />
  );
}

/*
interface ItemProps {
  onClickView?: () => void;
  onClickUpdate?: () => void;
  onClickDelete?: () => void;
}

interface ItemProdutoProps extends ItemProps {
  nome: string;
  descricao: string;
  preco: number;
  publicacao: string;
}

interface ItemUsuarioProps extends ItemProps {
  nome: string;
  email: string;
  senha: string;
}

export const ItemProduto: React.FC<ItemProdutoProps> = ({ nome, preco, onClickView, onClickUpdate, onClickDelete}) => {
  return (
    <ListGroup className="mb-5">
      <ListGroupItem>{nome}</ListGroupItem>
      <ListGroupItem>{`Preço R$ ${preco.toFixed(2)}`}</ListGroupItem>
      <ListGroupItem>
        <Row>
          <Col md={12} style={{ textAlign: 'right' }}>
            <ButtonGroup>
              <Button
                type="button"
                color="info"
                onClick={onClickView}
              >Exibir</Button>
              <Button
                type="button"
                color="primary"
                onClick={onClickUpdate}
              >Alterar</Button>
              <Button
                type="button"
                color="danger"
                onClick={onClickDelete}
              >Remover</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
}

export const ItemUsuario: React.FC<ItemUsuarioProps> = ({ nome, email }) => {
  return (
    <ListGroup className="mb-5">
      <ListGroupItem>{nome}</ListGroupItem>
      <ListGroupItem>{email}</ListGroupItem>
    </ListGroup>
  );
}
*/

/*
export const ItemProduto2: React.FC<ItemProdutoProps> = ({ nome, descricao, preco, publicacao}) => {
  return (
    <ListGroup className="mb-5">
      <ListGroupItem>{nome}</ListGroupItem>
      <ListGroupItem>{descricao}</ListGroupItem>
      <ListGroupItem>{`Preço R$ ${preco.toFixed(2)}`}</ListGroupItem>
      <ListGroupItem>{`Data de publicação: ${publicacao}`}</ListGroupItem>
    </ListGroup>
  );
}
*/