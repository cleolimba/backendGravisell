/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ConnexionsController from '#controllers/connexions_controller'
import InscriptionsController from '#controllers/inscriptions_controller'
import router from '@adonisjs/core/services/router'
import Product from '#models/product';
import ClientsController from '#controllers/clients_controller';
// import ClientsController from '#controllers/clients_controller';
// import Client from '#models/client';


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/connexion', [ConnexionsController, 'Admin'])

router.post('/signup', [InscriptionsController, 'signUp'])

router.get('/products', async ({ response }) => {
  try {
    const products = await Product.all();
    response.status(200).json(products);
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
    response.status(500).json({ error: 'Erreur serveur.' });
  }
});

//enregistrement du client
// router.post('/clients', async ({ request, response }) => {
//   try {
//     const data = request.only([
//       'nom',
//       'prenom',
//       'sexe',
//       'email',
//       'mot_de_passe',
//       'confirmation_mot_de_passe',
//       'adresse',
//       'role',
//       'contact',
//       'matricule_agent',
//     ]);

//     console.log('Données reçues pour enregistrement:', data);

//     if (data.mot_de_passe !== data.confirmation_mot_de_passe) {
//       return response.status(400).json({ error: 'Les mots de passe ne correspondent pas.' });
//     }

//     const client = await Client.create(data);
//     response.status(201).json(client);
//   } catch (error) {
//     response.status(500).json({ error: 'Erreur serveur.' });
//   }
// });

// router.post('/clients', 'ClientController.store')

// router.get('/clients', async () => {
//   return { message: 'Route GET clients fonctionne !' }
// })


// router.get('/clients/last', async ({ response }) => {
//   try {
//     const lastClient = await Client.query().orderBy('created_at', 'desc').first();
//     response.status(200).json(lastClient);
//   } catch (error) {
//     console.error('Erreur lors de la récupération du dernier client:', error);
//     response.status(500).json({ error: 'Erreur serveur.' });
//   }
// });

// import Route from '@ioc:Adonis/Core/Route'

// Route.group(() => {
//   Route.post('clients', 'ClientsController.store')
// }).prefix('api')

// Route POST pour enregistrer un client
router.post('/client' , [ClientsController, 'store'])
router.get('/client', async () => {
  return {
    hello: 'Route client',
  }
})
