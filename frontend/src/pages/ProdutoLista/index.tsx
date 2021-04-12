import { ItemProduto } from "../../components/Item";

const listaProdutos = [
  {nome: 'Leite', descricao: 'Fardo com 12 caixas.', preco: 20, publicacao: '12/07/2020'},
  {nome: 'Carro', descricao: 'Carro popular 1.0, 4 portas e novo.', preco: 10000, publicacao: '22/09/2020'},
  {nome: 'Maçã', descricao: '10 Maçãs vermelhas.', preco: 10, publicacao: '05/01/2021'},
  {nome: 'Caminhão', descricao: 'Caminhão de carga.', preco: 100000, publicacao: '03/02/2021'},
  {nome: 'Coca-cola', descricao: 'Fardo com 6 garrafas', preco: 40, publicacao: '15/10/2020'},
  {nome: 'Caderno', descricao: 'Caixa com 10', preco: 150, publicacao: '30/05/2020'},
];

export default function ListaProdutos() {
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