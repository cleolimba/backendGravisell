import User from '#models/user';
import type { HttpContext } from '@adonisjs/core/http'

export default class ConnexionsController {
    

    Admin = async ({request}: HttpContext) => {
        const {email, password} = request.only(['email', 'password'])
        console.log("connecting ...", email, password);
        const user = await User.verifyCredentials(email, password)
        console.log("hghghghghghghghg",email, password);
        return User.accessTokens.create(user)
    }
}