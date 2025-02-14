import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product'

export default class extends BaseSeeder {
  public async run() {
    // Insérer des données initiales dans la table products
    await Product.createMany([
      {
        name: 'Produit A',
        price: 29.99,
        stock: 100,
        sku: 'SKU001',
      },
      {
        name: 'Produit B',
        price: 49.99,
        stock: 200,
        sku: 'SKU002',
      },
      {
        name: 'Produit C',
        price: 19.99,
        stock: 150,
        sku: 'SKU003',
      },
    ])
  }
}