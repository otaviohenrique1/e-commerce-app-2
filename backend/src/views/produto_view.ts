import Produto from "../models/Produto";
import imagesView from "./images_view";

export default {
  render(produto: Produto) {
    return {
      id: produto.id,
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
      publicacao: produto.publicacao,
      images: imagesView.renderMany(produto.images),
    };
  },

  renderMany(produto: Produto[]) {
    return produto.map(produto => this.render(produto));
  }
};