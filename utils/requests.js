const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Product requests
  createProduct: {
    method: "POST",
    url: "https://api.storerestapi.com/products",
  },
  fetchProducts: {
    method: "GET",
    url: "https://api.storerestapi.com/products",
  },
  getSingleProduct: {
    method: "GET",
    url: "https://api.storerestapi.com/products/running-sneaker",
  },
  paginationResultsProduct: {
    method: "GET",
    url: "https://api.storerestapi.com/products?limit=10&page=1",
  },
  updateProduct: {
    method: "PUT",
    url: "https://api.storerestapi.com/products/running-sneaker",
  },

  // Category requests
  createCategory: {
    method: "POST",
    url: "https://api.storerestapi.com/categories",
  },
  fetchCategories: {
    method: "GET",
    url: "https://api.storerestapi.com/categories",
  },
  getSingleCategory: {
    method: "GET",
    url: "https://api.storerestapi.com/categories/mens-cloths",
  },
  paginationResultsCategory: {
    method: "GET",
    url: "https://api.storerestapi.com/categories?limit=10&page=1",
  },
  updateCategory: {
    method: "PUT",
    url: "https://api.storerestapi.com/categories/mens-cloths",
  },
};
