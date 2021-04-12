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
          type: 'varchar'
        },
        {
          name: 'preco',
          type: 'decimal'
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
