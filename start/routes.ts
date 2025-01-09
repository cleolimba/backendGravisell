/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ConnexionsController from '../app/controllers/connexions_controller.js'
import InscriptionsController from '../app/controllers/inscriptions_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/connexion-admin', [ConnexionsController, 'Admin'])

router.post('/signup', [InscriptionsController, 'signUp'])
