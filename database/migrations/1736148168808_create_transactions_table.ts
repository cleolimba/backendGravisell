import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('clients_id').unsigned().references('id').inTable('clients').onDelete('CASCADE')
      table.integer('numero').notNullable()
      table.integer('montant').notNullable()
      table.dateTime('date').notNullable()
      table.string('motif').notNullable()
      table.string('type').notNullable()
      table.string('libelle').notNullable()
      table.string('nom_client').notNullable()
      table.string('methode').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}