import { useEffect, useState } from "react";
import { ItemProduto } from "../../components/Item";
import api from "../../services/api";

interface Produto {
  nome: string;
  preco: number;
}

export default function ListaProdutos() {
  const [produto, setProduto] = useState<Produto[]>([]);

  useEffect(() => {
    api.get(`produtos`)
      .then((response) => {
        setProduto(response.data)
      });
  }, []);

  function handleView() {
    alert('Exibir Produto');
  }

  function handleUpdate() {
    alert('Editar Produto');
  }

  function handleDelete() {
    alert('Remover Produto');
  }

  return (
    <>
      <h1 className="mb-5 mt-5">Lista de Produtos</h1>
      <div>
        {produto.map((item, index) => {
          return (
            <ItemProduto
              nome={item.nome}
              preco={item.preco}
              onClickView={handleView}
              onClickUpdate={handleUpdate}
              onClickDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
}

/*
const listaProdutos = [
  {nome: 'Leite', descricao: 'Fardo com 12 caixas.', preco: 20, publicacao: '12-07-2020'},
  {nome: 'Carro', descricao: 'Carro popular 1.0, 4 portas e novo.', preco: 10000, publicacao: '22-09-2020'},
  {nome: 'Maçã', descricao: '10 Maçãs vermelhas.', preco: 10, publicacao: '05-01-2021'},
  {nome: 'Caminhão', descricao: 'Caminhão de carga.', preco: 100000, publicacao: '03-02-2021'},
  {nome: 'Coca-cola', descricao: 'Fardo com 6 garrafas', preco: 40, publicacao: '15-10-2020'},
  {nome: 'Caderno', descricao: 'Caixa com 10', preco: 150, publicacao: '30-05-2020'},
];

export function ListaProdutos2() {
  return (
    <>
      <h1 className="mb-5 mt-5">Lista de Produtos</h1>
      <div>
        {listaProdutos.map((item, index) => {
          return <ItemProduto
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            publicacao={item.publicacao}
          />;
        })}
      </div>
    </>
  );
}
*/