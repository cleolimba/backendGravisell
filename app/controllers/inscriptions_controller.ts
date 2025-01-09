import type { HttpContext } from '@adonisjs/core/http'
import Client from '../models/client.js';

export default class InscriptionsController {
    signUp= async ({request, response}: HttpContext) => {
        const {nom, prenom, email_adress,role, mot_de_passe, confirmation_mot_de_passe} = request.only(['nom', 'prenom', 'email_adress', 'role','mot_de_passe', 'confirmation_mot_de_passe'])
        const client = await Client.create({nom : "", prenom : "" , email  : "",role : "", mot_de_passe : "", confirmation_mot_de_passe : ""});
        console.log(nom, prenom, email_adress,role, mot_de_passe, confirmation_mot_de_passe);
    }
}