import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Commande from './commande.js'
import Agent from './agent.js'

export default class BonLivraison extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare commandesId: number

  @column()
  declare agentsId: number

  @column.dateTime()
  declare date: DateTime

  @column()
  declare chantier: string

  @column()
  declare numeroMateriel: number

  @column()
  declare numeroPlaque: string

  @column()
  declare niveauGasoil: number

  @column.dateTime()
  declare heureEntree: DateTime

  @column.dateTime()
  declare heureSortie: DateTime

  @column()
  declare nomLivreur: string

  @column()
  declare numeroRequisition: string

  @column.dateTime()
  declare dateRequisition: DateTime

  @column()
  declare numeroAutorisationChargement: number

  @column()
  declare produit: string

  @column()
  declare tare: number

  @column()
  declare poidsBrut: number

  @column()
  declare poidsNet: number

  @column()
  declare resterLivrer: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Commande)
  declare commande: BelongsTo<typeof Commande>

  @belongsTo(() => Agent)
  declare agent: BelongsTo<typeof Agent>
}