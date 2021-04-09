import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Home() {
  const usuario = 'Usuario';
  return (
    <div>
      <h1>Bem Vindo{` ${usuario}`}</h1>
      <br/>
      <Link to="/produto-cadastro">
        <Button>produto-cadastro</Button>
      </Link>
      <br/>
      <Link to="/produto-lista">
        <Button>produto-lista</Button>
      </Link>
      <br/>
      <Link to="/usuario-cadastro">
        <Button>usuario-cadastro</Button>
      </Link>
      <br/>
      <Link to="/usuario-lista">
        <Button>usuario-lista</Button>
      </Link>
    </div>
  );
}