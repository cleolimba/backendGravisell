import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nom: string

  @column()
  declare prenom: string

  @column()
  declare sexe: string

  @column()
  declare email: string

  @column()
  declare mot_de_passe: string

  @column()
  declare confirmation_mot_de_passe: string

  @column()
  declare adresse: string

  @column()
  declare role: string

  @column()
  declare contact: string

  @column()
  declare matricule_agent: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
