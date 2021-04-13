import Usuario from "../models/Usuario";

export default {
  render(usuario: Usuario) {
    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
    };
  },

  renderMany(usuario: Usuario[]) {
    return usuario.map(usuario => this.render(usuario));
  }
};