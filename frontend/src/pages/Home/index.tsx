import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Home() {
  const usuario = 'Usuario';
  return (
    <div>
      <h1 className="mt-5">Bem Vindo{` ${usuario}`}</h1>
      <div className="mt-5">
        <Link to="/produto/cadastro">
          <Button>produto-cadastro</Button>
        </Link>
      </div>
      <div className="mt-3">
        <Link to="/produtos">
          <Button>produto-lista</Button>
        </Link>
      </div>
      <div className="mt-3">
        <Link to="/usuario/cadastro">
          <Button>usuario-cadastro</Button>
        </Link>
      </div>
      <div className="mt-3">
        <Link to="/usuarios">
          <Button>usuario-lista</Button>
        </Link>
      </div>
    </div>
  );
}