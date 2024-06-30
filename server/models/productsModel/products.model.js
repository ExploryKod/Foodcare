const { ConnectionFactory } = require(`../factories/mysql/connectbdd`);
const { sql } = require('../factories/neon/connectbdd');

const DATABASE_SERVICE = process.env.DATABASE_SERVICE;
const connectionFactory = new ConnectionFactory();

async function getAllProducts() {

  switch (DATABASE_SERVICE) {
    case 'mysql':
      const connection = await connectionFactory.createConnection();
      console.log('Mysql Database connection successful to get all products!');
      const [dbRows, dbFields] = await connection.execute('SELECT * FROM products');
      connection.end();
      return dbRows;
    case 'mongodb':
      throw new Error("MongoDB not supported yet to query products")
    case 'neon':
      const product = sql`
          select 
          * 
          from products`
      console.log('Neon connection successful to get all query all products')
      return product
    default:
      throw new Error(`Get all products - unsupported database service: ${process.env.DATABASE_SERVICE}`);
  }

}

async function getProductsByCategory(category) {

  switch (DATABASE_SERVICE) {
    case 'mysql':
      const connection = await connectionFactory.createConnection();
      console.log('Mysql Database connection successful to get products by category!');
      const [dbRows, dbFields] = await connection.execute('SELECT * FROM products WHERE category = ?',[category]);
      connection.end();
      return dbRows;
    case 'neon':
      const productRows = await sql`
      select
        *
      from products
      where category = ${ category }
    `
      return productRows
    default:
      throw new Error(`Get Product by category - unsupported database service: ${process.env.DATABASE_SERVICE}`);
  }

}

async function insertProduct(productData) {

  switch(DATABASE_SERVICE) {
    case 'mysql':
        const connection = await connectionFactory.createConnection();
        console.log('Mysql Database connection successful to insert product!');
        const query = 'INSERT INTO products (category_id, category, product_name, product_image_url, product_price) VALUES (?, ?, ?, ?, ?)';
        const values = [
          productData.categoryNameId ?? 0,
          productData.categoryName ?? null,
          productData.image_name ?? null,
          productData.productImageUrl ?? null,
          productData.productPrice ?? null
        ];

        // Execute the query with the prepared values
        const [result] = await connection.execute(query, values);
        connection.end();

        return {
          id: result.insertId,
          ...productData
        };
    case 'neon':
      const product = await sql`
    insert into products
      (category_id, category, product_name, product_image_url, product_price)
    values
      ( ${ productData.categoryNameId ?? null }, 
        ${ productData.categoryName ?? null }, 
        ${ productData.image_name ?? null }, 
        ${ productData.productImageUrl ?? null }, 
        ${ productData.productPrice ?? null } 
      )
    returning category_id, category, product_name, product_image_url, product_price`
    return product

    case 'mondoDB':
      return "MongoDB not supported yet to insert product"
    default:
      throw new Error(`Insert product - unsupported database service: ${process.env.DATABASE_SERVICE}`);
  }
}

module.exports = {
  getAllProducts,
  insertProduct,
  getProductsByCategory
};
