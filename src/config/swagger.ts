// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NexGenMart APIs',
      version: '1.0.0',
      description: 'Hello, This is the API documentation for NexGenmart, designed to help you understand and interact with our API effortlessly. Using Swagger, you can explore the available endpoints, view detailed request and response models, and test the API directly from your browser.',
    },
    servers: [
      {
        url: 'https://nexgenmart.onrender.com',
      },
    ],
  },
  apis: ['./src/api/routes/*/*.ts'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
