import type { HttpContext } from '@adonisjs/core/http'

export default class ConnexionsController {
    

    Admin = async ({request}: HttpContext) => {
        const {email, password} = request.only(['email', 'password'])
        console.log("hghghghghghghghg",email, password);
        
    }
}