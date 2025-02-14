import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('idClient', 255).notNullable()
      table.string('matAgent', 255).notNullable()
      table.string('nom', 50).notNullable()
      table.string('prenom', 255).notNullable().unique()
      table.string('profession').notNullable()
      table.string('contact').notNullable()
      table.string('sexe').notNullable()
      table.string('adresse').notNullable()
      // table.string('mot_de_passe', 255).notNullable()
      // table.string('confirmation_mot_de_passe', 255).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}