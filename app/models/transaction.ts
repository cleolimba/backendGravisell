import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Client from './client.js'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare numero: number

  @column()
  declare montant: number

  @column.dateTime()
  declare date: DateTime

  @column()
  declare motif: string

  @column()
  declare type: string

  @column()
  declare libelle: string

  @column()
  declare nom_client: string

  @column()
  declare methode: string

  @column()
  declare clientsId: number

  @belongsTo(() => Client)
  declare client: BelongsTo<typeof Client>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
