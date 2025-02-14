import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'agents'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nom', 255).notNullable()
      table.string('prenom', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('role').notNullable()
      table.string('mot_de_passe').notNullable()
      table.string('confirmation_mot_de_passe').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}