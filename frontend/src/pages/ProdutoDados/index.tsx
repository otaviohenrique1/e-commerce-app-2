import { Button, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import elefanteAsiatico1 from "../../assets-teste/elefante_asiatico-1.jpg";
import elefanteAsiatico2 from "../../assets-teste/elefante_asiatico-2.jpg";
import elefanteAsiatico3 from "../../assets-teste/elefante_asiatico-3.jpg";
import elefanteDaFloresta1 from "../../assets-teste/elefante_da_floresta-1.jpg";
import elefanteDaFloresta2 from "../../assets-teste/elefante_da_floresta-2.jpg";
import elefanteDaFloresta3 from "../../assets-teste/elefante_da_floresta-3.jpg";
import elefanteDaSavana1 from "../../assets-teste/elefante_da_savana-1.jpg";
import elefanteDaSavana2 from "../../assets-teste/elefante_da_savana-2.jpg";
import elefanteDaSavana3 from "../../assets-teste/elefante_da_savana-3.jpg";
import { Link, useParams } from "react-router-dom";
import { listaProdutosTeste } from "../../utils/lista-produtos-teste";

interface ProdutoDadosParamsProps {
  id: string;
}

export default function ProdutoDados() {
  const imagensTeste = [elefanteAsiatico1, elefanteAsiatico2, elefanteAsiatico3, elefanteDaFloresta1, elefanteDaFloresta2, elefanteDaFloresta3, elefanteDaSavana1, elefanteDaSavana2, elefanteDaSavana3];

  let { id } = useParams<ProdutoDadosParamsProps>();

  return (
    <>
      <Row>
        <Col className="mt-5 mb-3" md={12} sm={12} lg={12} xl={12} xs={12} style={{ display: 'inline' }}>
          <Button>
            <Link to="">Voltar</Link>
          </Button>
          <h1>ProdutoDados</h1>
        </Col>
        <Col>
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
              {imagensTeste.map((item, index) => {
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
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}