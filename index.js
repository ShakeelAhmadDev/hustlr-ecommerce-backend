const express = require("express");
const bodyParser = require("body-parser");

// const connectDB = require("./src/config/db");
const createContainer = require("./src/config/diContainer");
const productRoutes = require("./src/routes/productRoutes");
const swaggerDocs = require("./src/config/swagger");
const connectDB = require("./src/config/db.config");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

(async () => {
  await connectDB();

  const container = createContainer();
  app.use("/products", productRoutes(container.productController));

  swaggerDocs(app);

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📄 Swagger docs: http://localhost:${PORT}/docs`);
  });
})();
