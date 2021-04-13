import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Produto from "./Produto";

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Produto, produto => produto.images)
    @JoinColumn({ name: 'produto_id' })
    produto: Produto;
}