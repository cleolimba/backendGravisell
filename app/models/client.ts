import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare idClient: string

  @column()
  declare matAgent: string

  @column()
  declare nom: string

  @column()
  declare prenom: string

  @column()
  declare profession: string

  @column()
  declare contact: string

  @column()
  declare sexe: string

  @column()
  declare adresse: string

  // @column()
  // declare contact: string

  // @column()
  // declare matricule_agent: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}



// import { DateTime } from 'luxon'
// import { BaseModel, column } from '@adonisjs/lucid/orm'

// export default class Client extends BaseModel {
//   @column({ isPrimary: true })
//   declare id: number

//   @column()
//  declare  idClient: string

//   @column()
//   declare  matAgent: string

//   @column()
//   declare  nom: string

//   @column()
//   declare  prenom: string

//   @column()
//   declare  profession: string

//   @column()
//   declare  contact: string

//   @column()
//   declare  sexe: string

//   @column()
//   declare  adresse: string

//   @column.dateTime({ autoCreate: true })
//   declare  createdAt: DateTime

//   @column.dateTime({ autoCreate: true, autoUpdate: true })
//   declare  updatedAt: DateTime
// }
