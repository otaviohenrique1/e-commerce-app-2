import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import Image from "./Image";

@Entity('produtos')
export default class Produto {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;
  
  @Column()
  descricao: string;
  
  @Column()
  preco: number;
  
  @Column()
  publicacao: string;

  @OneToMany(() => Image, image => image.produto, {
      cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'produto_id' })
  images: Image[];
}