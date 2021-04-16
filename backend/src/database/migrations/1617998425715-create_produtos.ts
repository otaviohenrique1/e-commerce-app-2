import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProdutos1617998425715 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'produtos',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'nome',
          type: 'varchar'
        },
        {
          name: 'descricao',
          type: 'text'
        },
        {
          name: 'preco',
          type: 'numeric'
        },
        {
          name: 'publicacao',
          type: 'date'
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produtos');
  }
}
