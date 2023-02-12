const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
// hhtp://localhost:3001/api/categories
router.use('/categories', categoryRoutes);
// hhtp://localhost:3001/api/products
router.use('/products', productRoutes);
// hhtp://localhost:3001/api/tags
router.use('/tags', tagRoutes);

module.exports = router;
