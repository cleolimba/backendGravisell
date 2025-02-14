import Client from '#models/client'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClientsController {
    public async store({ request, response }: HttpContext) {
        const data = await request.only([
            "idClient", 
            "matAgent",
            "nom",
            "prenom",
            "profession",
            "contact",
            "sexe",
            "adresse"
        ])
        
        // Log des données reçues pour vérification
        console.log(data);  // Déplacer ici pour vérifier les données envoyées

        try {
            // Vérifie que le modèle permet de créer un client avec ces champs
            const client = await Client.create(data)
            return response.created({ message: 'Client enregistré avec succès', client })
        } catch (error) {
            // Afficher l'erreur pour mieux comprendre ce qui se passe côté serveur
            console.error(error);
            return response.badRequest({ message: 'Erreur lors de l\'enregistrement', error: error.message })
        }
    }
}



// export default class ClientsController {
//   public async store({ request, response }: HttpContext  ) {
//     try {
//       const data = request.only([
//         'matAgent',
//         'nom',
//         'prenom',
//         'profession',
//         'contact',
//         'sexe',
//         'adresse'
//       ])
     

//       // Générer un ID client unique
//       const idClient = `CLI${Date.now()}`
      
//       const client = await Client.create({
//         idClient,
//         ...data
//       })

//       return response.status(201).json(client)
//     } catch (error) {
//       return response.status(400).json({
//         message: "Une erreur est survenue lors de l'enregistrement du client",
//         error: error.message
//       })
//     }
//   }
// }

