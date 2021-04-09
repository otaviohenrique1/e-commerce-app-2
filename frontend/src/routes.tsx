import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import PageContainer from "./components/PageContainer";
import Home from "./pages/Home";
import ProdutoCadastro from "./pages/ProdutoCadastro";
import ProdutoLista from "./pages/ProdutoLista";
import UsuarioCadastro from "./pages/UsuarioCadastro";
import UsuarioLista from "./pages/UsuarioLista";

export default function Routes() {
  return(
    <>
      <BrowserRouter>
        <Header />
        <PageContainer>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route component={ProdutoCadastro} path="/produto-cadastro" />
            <Route component={ProdutoLista} path="/produto-lista" />
            <Route component={UsuarioCadastro} path="/usuario-cadastro" />
            <Route component={UsuarioLista} path="/usuario-lista" />
          </Switch>
        </PageContainer>
      </BrowserRouter>
    </>
  );
}