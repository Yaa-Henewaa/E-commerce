import mongoose from 'mongoose';
import Category from './Models/category.js';
import Product from './Models/product.js';
import Cart from './Models/cart.js';
import Region from './Models/region.js';
import { connect } from './index.js';

const seedDatabase = async () => {
    await connect(); 

    // Clear existing data
    await Category.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});
    await Region.deleteMany({});

    // Insert categories
    const categories = await Category.insertMany([
        { name: 'Electronics' },
        { name: 'Books' },
        { name: 'Clothing' },
        { name: 'Stationary' }
    ]);

    // Insert regions with required fields (product_id and quantity)
    const regions = await Region.insertMany(
       [
            { name: 'Ashanti' },
            { name: 'Accra' },
            { name: 'Central' },
            { name: 'Volta' },
            { name: 'Eastern' },
            { name: 'Bono' }
        ]
);

    // Insert products
    const product = await Product.insertMany([
        // {
        //     name: 'Smartphone',
        //     description: 'Latest model smartphone with high-end features.',
        //     price: 699.99,
        //     category_id: categories[0]._id,
        //     stock: 50,
        //     region: regions[0]._id // Reference to the region document
        // },
        // {
        //     name: 'Laptop',
        //     description: 'Powerful laptop for work and gaming.',
        //     price: 999.99,
        //     category_id: categories[0]._id,
        //     stock: 30,
        //     region: regions[0]._id // Reference to the region document
        // },
        // {
        //     name: 'Novel',
        //     description: 'Bestselling fiction novel.',
        //     price: 19.99,
        //     category_id: categories[1]._id,
        //     stock: 100,
        //     region: regions[1]._id // Reference to the region document
        // },
        // {
        //     name: 'T-shirt',
        //     description: 'Comfortable cotton t-shirt.',
        //     price: 9.99,
        //     category_id: categories[2]._id,
        //     stock: 200,
        //     region: regions[2]._id // Reference to the region document
        // },
        // { 
        //     name: 'Tablet',
        //     description: 'A lightweight and portable tablet', 
        //     price: 399,
        //     category_id: categories[1]._id, 
        //     region: regions[4].name, 
        //     stock: 80

        //  },
        // { 
        //     name: 'Camera',
        //     description: 'A digital camera with high resolution', 
        //     price: 499, 
        //     category_id: categories[2]._id, 
        //     region: regions[5].name, 
        //     stock: 60
        // },
        // { 
        //     name: 'Monitor', 
        //     description: 'A 4K ultra HD monitor', 
        //     price: 299, 
        //     category_id: categories[0]._id, 
        //     region: regions[0].name, 
        //     stock: 90 
        // },
            { name: 'Honda', description: 'Mechanical keyboard with RGB lighting', price: 129, category_id: categories[1]._id, region: regions[1].name, stock: 150, image: "https://pictures-ghana.jijistatic.net/41293535_MTA4MC04MTAtNTlhYTg2ZjgyZQ.webp" },
            { name: 'Hyundai', description: 'Ergonomic wireless mouse', price: 59, category_id: categories[2]._id, region: regions[2].name, stock: 110, image: "https://pictures-ghana.jijistatic.net/41481654_ODEwLTEwODAtNGJmYTk5YTEyOA.webp" },
            { name: 'Benz', description: 'Ergonomic wireless mouse', price: 59, category_id: categories[2]._id, region: regions[2].name, stock: 110, image: "https://pictures-ghana.jijistatic.net/39238776_OTYwLTEyODAtMzk0ZjMzYTMwYQ.webp" },
            { name: 'Laptop', description: 'Ergonomic wireless mouse', price: 59, category_id: categories[2]._id, region: regions[2].name, stock: 110, image: "https://pictures-ghana.jijistatic.net/41641762_MTUwMC0yMDAwLTlkZWQ4YjBkOGI.webp" },
            { name: 'Bag', description: 'Wireless multifunction printer', price: 199, category_id: categories[0]._id, region: regions[3].name, stock: 40,image: "https://pictures-ghana.jijistatic.net/41369072_NjgwLTY4MC0xNjU5ZTBlMDAy.webp" },
            { name: 'Printer', description: 'Wireless multifunction printer', price: 199, category_id: categories[0]._id, region: regions[3].name, stock: 40,image: "https://pictures-ghana.jijistatic.net/39496989_OTYwLTEyODAtMTFiOGE2NWMxYw.webp" },
            { name: 'Printer', description: 'Wireless multifunction printer', price: 199, category_id: categories[0]._id, region: regions[3].name, stock: 40,image: "https://pictures-ghana.jijistatic.net/27644335_MTMyMS0xNTAwLTczNTJjYmUzNmE.webp" },
            { name: 'Printer', description: 'Wireless multifunction printer', price: 199, category_id: categories[0]._id, region: regions[3].name, stock: 40,image: "https://pictures-ghana.jijistatic.net/40642422_NzExLTcxNi05ZjkxYTc1Y2Qy.webp" },
            { name: 'Printer', description: 'Wireless multifunction printer', price: 199, category_id: categories[0]._id, region: regions[3].name, stock: 40,image: "https://pictures-ghana.jijistatic.net/24983616_ODAwLTgwMC04ZjU0ZjAyN2ZjLTE.webp" },
            { name: 'Printer', description: 'Wireless multifunction printer', price: 199, category_id: categories[0]._id, region: regions[3].name, stock: 40,image: "https://pictures-ghana.jijistatic.net/37803947_MzAwLTI4Mi00ZWI0YTY4YTBi.webp" },

            // { name: 'Projector', description: 'HD home projector', price: 299, category_id: categories[1]._id, region: regions[4].name, stock: 60 },
            // { name: 'E-Reader', description: 'Portable e-reader with backlight', price: 129, category_id: categories[2]._id, region: regions[5].name, stock: 110 },
            // { name: 'Bluetooth Earbuds', description: 'Wireless Bluetooth earbuds', price: 69, category_id: categories[0]._id, region: regions[0].name, stock: 180 },
            // { name: 'Smart Thermostat', description: 'Smart home thermostat', price: 199, category_id: categories[1]._id, region: regions[1].name, stock: 90 },
            // { name: 'Electric Scooter', description: 'Foldable electric scooter', price: 399, category_id: categories[2]._id, region: regions[2].name, stock: 70 },
            // { name: 'VR Headset', description: 'Virtual reality headset', price: 299, category_id: categories[0]._id, region: regions[3].name, stock: 60 },
            // { name: 'Smart Doorbell', description: 'Video doorbell with motion detection', price: 149, category_id: categories[1]._id, region: regions[4].name, stock: 100 },
            // { name: 'Wireless Charger', description: 'Fast wireless charger', price: 49, category_id: categories[2]._id, region: regions[5].name, stock: 140 }
    ]);

    // Function to update the image source
    function updateProductImage(product) {
        if (product && product.image) {
            console.log('Updating product image with URL:', product.image);
            // Perform server-side logic here, such as saving the image URL to a database
            // Example: database.saveProductImage(product._id, product.image);
        } else {
            console.error('Product or product image not provided.');
        }
    }
// Call the function with the product data
updateProductImage(product);

    // Update regions with correct product_id
    await Region.updateOne({ _id: regions[0]._id }, { product_id: product[0]._id });
    await Region.updateOne({ _id: regions[1]._id }, { product_id: product[2]._id });
    await Region.updateOne({ _id: regions[2]._id }, { product_id: product[3]._id });

    // Insert cart items
    await Cart.insertMany([
        {
            product_id: product[0]._id,
            quantity: 1
        },
        {
            product_id: product[1]._id,
            quantity: 2
        },
        {
            product_id: product[2]._id,
            quantity: 3
        }
    ]);

    console.log('Database seeded!');
    mongoose.connection.close();
};

seedDatabase().catch(err => console.error(err));
