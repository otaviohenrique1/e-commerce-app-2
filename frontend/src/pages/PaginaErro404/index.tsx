import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import './style.css'

export default function PaginaErro404() {
  return (
    <div className="pagina-erro-404-container mt-5">
      <h1>Erro 404</h1>
      <h2>Pagina não encontrada</h2>
      <div className="mt-5">
        <Button color="primary">
          <Link to="/">Voltar para a home</Link>
        </Button>
      </div>
    </div>
  );
}