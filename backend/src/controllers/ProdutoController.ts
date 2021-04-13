import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Produto from "../models/Produto";
import produtoView from "../views/produto_view";

export default {
  async index(request: Request, response: Response) {
    const produtoRepository = getRepository(Produto);
    const produtos = await produtoRepository.find({
      relations: ['images']
    });
    return response.json(produtoView.renderMany(produtos));
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const produtoRepository = getRepository(Produto);
    const produto = await produtoRepository.findOneOrFail(id, {
      relations: ['images']
    });
    return response.json(produtoView.render(produto));
  },
  async create(request: Request, response: Response) {
    const {
      nome,
      descricao,
      preco,
      publicacao
    } = request.body;

    const produtoRepository = getRepository(Produto);

    const data = {
      nome,
      descricao,
      preco,
      publicacao
    };

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      descricao: Yup.string().required(),
      preco: Yup.number().required(),
      publicacao: Yup.date().required()
    });

    await schema.validate(data, {
      abortEarly: false
    });

    const produto = produtoRepository.create(data);

    await produtoRepository.save(produto);

    return response.status(201).json(produto);
  },
  async delete(request: Request, response: Response) {},
  async update(request: Request, response: Response) {},
};