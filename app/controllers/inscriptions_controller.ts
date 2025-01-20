import type { HttpContext } from '@adonisjs/core/http'
import Agent from '#models/agent';
import User from '#models/user';

export default class InscriptionsController {
    
    signUp= async ({request}: HttpContext) => {
        console.log("Signup......");
        console.log();
        const {nom, prenom, email,role, password, confirmation_mot_de_passe} = request.only(['nom', 'prenom','sexe', 'email', 'role','password', 'confirmation_mot_de_passe'])
        console.log(role);
        const agent = await Agent.create({nom : nom, prenom : prenom, email  : email,role : role, mot_de_passe : password, confirmation_mot_de_passe : confirmation_mot_de_passe});
        const user = await User.create({nom : nom, prenom : prenom, email  : email,role : role, password : password, confirmation_mot_de_passe : confirmation_mot_de_passe})
        console.log(agent, user);
        return User.accessTokens.create(user)
    }
}