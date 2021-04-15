import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProdutoCadastro from "./pages/ProdutoCadastro";
import ProdutoLista from "./pages/ProdutoLista";
import UsuarioCadastro from "./pages/UsuarioCadastro";
import UsuarioLista from "./pages/UsuarioLista";
import ProdutoDados from "./pages/ProdutoDados";
import UsuarioDados from "./pages/UsuarioDados";
// import PaginaErro404 from "./pages/PaginaErro404";

export default function Routes() {
  return(
    <>
      <BrowserRouter>
          <Switch>
            <Route exact component={Login} path="/" />
            <Route component={UsuarioCadastro} path="/usuario/cadastro" />
            <PageContainer>
              <Route component={Home} path="/home" />
              <Route component={ProdutoCadastro} path="/produto/cadastro" />
              <Route exact component={ProdutoLista} path="/produtos" />
              <Route exact component={UsuarioLista} path="/usuarios" />
              <Route component={ProdutoDados} path="/produtos/:id" />
              <Route component={UsuarioDados} path="/usuarios/:id" />
              {/* <Route component={PaginaErro404} path="*" /> */}
            </PageContainer>
          </Switch>
      </BrowserRouter>
    </>
  );
}

/*
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import PageContainer from "./components/PageContainer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProdutoCadastro from "./pages/ProdutoCadastro";
import ProdutoLista from "./pages/ProdutoLista";
import UsuarioCadastro from "./pages/UsuarioCadastro";
import UsuarioLista from "./pages/UsuarioLista";
import ProdutoDados from "./pages/ProdutoDados";
import PaginaErro404 from "./pages/PaginaErro404";
import CampoImagemTestePagina from "./pages/CampoImagemTestePagina";

export default function Routes() {
  return(
    <>
      <BrowserRouter>
        <Header />
        <PageContainer>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Login} path="/login" />
            <Route component={ProdutoCadastro} path="/produto-cadastro" />
            <Route component={ProdutoLista} path="/produto-lista" />
            <Route component={ProdutoDados} path="/produto-dados" />
            <Route component={UsuarioCadastro} path="/usuario-cadastro" />
            <Route component={UsuarioLista} path="/usuario-lista" />
            <Route component={CampoImagemTestePagina} path="/campo-imagem" />
            <Route component={PaginaErro404} path="*" />
          </Switch>
        </PageContainer>
      </BrowserRouter>
    </>
  );
}
*/