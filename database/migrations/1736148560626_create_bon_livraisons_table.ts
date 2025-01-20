import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bon_livraisons'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('commandes_id').unsigned().references('id').inTable('commandes')
      table.integer('agents_id').unsigned().references('id').inTable('agents')
      table.dateTime('date').notNullable()
      table.string('chantier').notNullable()
      table.integer('numero_materiel').notNullable()
      table.string('numero_plaque').notNullable()
      table.integer('niveau_gasoil').notNullable()
      table.dateTime('heure_entree').notNullable()
      table.dateTime('heure_sortie').notNullable()
      table.string('nom_livreur').notNullable()
      table.string('numero_requisiton').notNullable()
      table.dateTime('date_requisition').notNullable()
      table.integer('numero_autorisation_chargement').notNullable()
      table.string('produit').notNullable()
      table.integer('tare').notNullable()
      table.integer('poids_brut').notNullable()
      table.integer('poids_net').notNullable()
      table.integer('rester_livrer').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}