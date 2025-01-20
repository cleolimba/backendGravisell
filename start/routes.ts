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

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/connexion-admin', [ConnexionsController, 'Admin'])

router.post('/signup', [InscriptionsController, 'signUp'])
