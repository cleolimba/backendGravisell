import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('nom').nullable()
      table.string('prenom').nullable()
      table.string('email', 254).notNullable().unique()
      table.enum('role',['admininistrateur', 'receptionniste', 'livreur', 'caisssier', 'chargeur']).notNullable()
      table.string('password').notNullable()
      table.string('confirmation_mot_de_passe').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}