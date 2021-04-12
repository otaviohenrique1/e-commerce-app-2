import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

interface ItemProdutoProps {
  nome: string;
  descricao: string;
  preco: number;
  publicacao: string;
}

interface ItemUsuarioProps {
  nome: string;
  email: string;
  senha: string;
}

export const ItemProduto: React.FC<ItemProdutoProps> = ({ nome, descricao, preco, publicacao}) => {
  return (
    <ListGroup className="mb-5">
      <ListGroupItem>{nome}</ListGroupItem>
      <ListGroupItem>{descricao}</ListGroupItem>
      <ListGroupItem>{`Preço R$ ${preco.toFixed(2)}`}</ListGroupItem>
      <ListGroupItem>{`Data de publicação: ${publicacao}`}</ListGroupItem>
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