// import Product from '#models/product'
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// export default class ProductsController {
//   // Récupérer tous les produits
//   public async index({ response }: HttpContextContract) {
//     try {
//       const products = await Product.all()
//       return response.ok({ success: true, data: products })
//     } catch (error) {
//       return response.internalServerError({ success: false, message: 'Erreur lors de la récupération des produits.' })
//     }
//   }

//   // Récupérer un produit spécifique
//   public async show({ params, response }: HttpContextContract) {
//     try {
//       const product = await Product.find(params.id)
//       if (!product) {
//         return response.notFound({ success: false, message: 'Produit non trouvé' })
//       }
//       return response.ok({ success: true, data: product })
//     } catch (error) {
//       return response.internalServerError({ success: false, message: 'Erreur lors de la récupération du produit.' })
//     }
//   }

//   // Ajouter un nouveau produit
//   public async store({ request, response }: HttpContextContract) {
//     try {
//       const data = request.only(['name', 'price', 'stock', 'sku'])
//       const product = await Product.create(data)
//       return response.created({ success: true, data: product })
//     } catch (error) {
//       return response.internalServerError({ success: false, message: 'Erreur lors de la création du produit.' })
//     }
//   }

//   // Mettre à jour un produit
//   public async update({ params, request, response }: HttpContextContract) {
//     try {
//       const product = await Product.find(params.id)
//       if (!product) {
//         return response.notFound({ success: false, message: 'Produit non trouvé' })
//       }

//       const data = request.only(['name', 'price', 'stock', 'sku'])
//       product.merge(data)
//       await product.save()
//       return response.ok({ success: true, data: product })
//     } catch (error) {
//       return response.internalServerError({ success: false, message: 'Erreur lors de la mise à jour du produit.' })
//     }
//   }

//   // Supprimer un produit
//   public async destroy({ params, response }: HttpContextContract) {
//     try {
//       const product = await Product.find(params.id)
//       if (!product) {
//         return response.notFound({ success: false, message: 'Produit non trouvé' })
//       }

//       await product.delete()
//       return response.noContent()
//     } catch (error) {
//       return response.internalServerError({ success: false, message: 'Erreur lors de la suppression du produit.' })
//     }
//   }
// }

// import { BaseSeeder } from '@adonisjs/lucid/seeders'
// import Product from '../../app/models/product.js'
// // import { faker } from '@faker-js/faker'
// import { DateTime } from 'luxon'

// export default class ProductSeeder extends BaseSeeder {
//   public async run() {
//     await Product.createMany([
//       {
//         product_name: 'Mouton',
//         product_descript: 'Mouton poilu',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 15,
//         product_image:
//           'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053667/groupMouton_lm1kgf.jpg',
//         price: 200,
//         farm: 1,
//         category: 1,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Porc',
//         product_descript: 'Porc graisseux tacheté',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 15,
//         product_image:
//           'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053424/pig_bhpjcl.jpg',
//         price: 200,
//         farm: 1,
//         category: 1,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Vache',
//         product_descript: 'Vache laitière',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 15,
//         product_image:
//           'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735210671/laVache_fdvv9h.jpg',
//         price: 200,
//         farm: 1,
//         category: 1,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Chèvre',
//         product_descript: 'Chèvre à sabots',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 15,
//         product_image:
//           'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053075/Goat_pgbaz1.jpg',
//         price: 20,
//         farm: 1,
//         category: 1,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Lapin',
//         product_descript: 'Lapin malin',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 15,
//         product_image:
//           'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886308/twoLapin_xcxvwm.jpg',
//         price: 20,
//         farm: 2,
//         category: 2,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Cobaye',
//         product_descript: 'Cobaye à poils lisses',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 15,
//         product_image:
//           'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/Cobaye4_ilgcbu.jpg',
//         price: 20,
//         farm: 2,
//         category: 2,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Cobaye',
//         product_descript: 'Cobaye à poils longs',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 15,
//         product_image:
//           'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054700/cobaye1_zgdnik.jpg',
//         price: 20,
//         farm: 2,
//         category: 2,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Pigeon',
//         product_descript: 'Pigeon domestique',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 15,
//         product_image:
//           'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735211090/pigeon_hv9tos.jpg',
//         price: 20,
//         farm: 3,
//         category: 3,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Dindon',
//         product_descript: 'Dindon rouge',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 15,
//         product_image:
//           'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054489/Dindon1_xxqmc4.jpg',
//         price: 20,
//         farm: 3,
//         category: 3,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Poule de ferme',
//         product_descript: 'Poule de ferme',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 15,
//         product_image:
//           'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/pondeuse1_mmb9cb.jpg',
//         price: 20,
//         farm: 3,
//         category: 3,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//       {
//         product_name: 'Canard',
//         product_descript: 'Canards vagabonds',
//         birth_date: new Date('2024-12-30'),
//         life_duration: 15,
//         product_image:
//           'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054489/Canard1_ed7ag6.jpg',
//         price: 20,
//         farm: 3,
//         category: 3,
//         createdAt: DateTime.now(),
//         updatedAt: DateTime.now(),
//       },
//     ])
//   }
// }

import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
// import Product from '../../app/models/Product'
import { DateTime } from 'luxon'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        name: 'Mouton',
        price: 200,
        stock: 10,
        sku: 'MTN-001',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        name: 'Porc',
        price: 200,
        stock: 15,
        sku: 'PRC-002',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        name: 'Vache',
        price: 200,
        stock: 8,
        sku: 'VCH-003',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        name: 'Chèvre',
        price: 20,
        stock: 12,
        sku: 'CHR-004',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        name: 'Lapin',
        price: 20,
        stock: 25,
        sku: 'LPN-005',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        name: 'Cobaye (poils lisses)',
        price: 20,
        stock: 18,
        sku: 'CBY-006',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        name: 'Cobaye (poils longs)',
        price: 20,
        stock: 15,
        sku: 'CBY-007',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        name: 'Pigeon',
        price: 20,
        stock: 30,
        sku: 'PGN-008',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        name: 'Dindon',
        price: 20,
        stock: 10,
        sku: 'DDN-009',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        name: 'Poule de ferme',
        price: 20,
        stock: 40,
        sku: 'PLF-010',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
      {
        name: 'Canard',
        price: 20,
        stock: 20,
        sku: 'CND-011',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
    ])
  }
}
