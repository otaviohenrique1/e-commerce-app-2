const listaProdutos = [
  {nome: 'Leite',  quantidade: 10},
  {nome: 'Carro',  quantidade: 1},
  {nome: 'Maçã',  quantidade: 100},
  {nome: 'Caminhão',  quantidade: 1},
  {nome: 'Coca-cola',  quantidade: 20},
  {nome: 'Caderno',  quantidade: 500},
];

export default function ListaProdutos() {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      asdasdaksdjkasjkdhasdjkhsd
      <div>
        {listaProdutos.map((item, index) => {
          return (
            <div key={index}>
              <hr/>
              <p>{item.nome}</p>
              <p>{item.quantidade}</p>
              <hr/>
            </div>
          );
        })}
      </div>
    </div>
  );
}