import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nom', 255).notNullable()
      table.string('prenom', 255).notNullable()
      table.string('sexe', 50).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('adresse').notNullable()
      table.string('role').notNullable()
      table.string('contact').notNullable()
      table.string('matricule_agent').notNullable()
      table.string('mot_de_passe', 255).notNullable()
      table.string('confirmation_mot_de_passe', 255).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}