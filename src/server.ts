// import app from "./app";
// import { AppDataSource } from "./data-source";

// AppDataSource.initialize()
//   .then(() => {
//     console.log("Database connected!");
//     const port = process.env.PORT ?? 3000;

//     app.listen(port, () => {
//       console.log(`App running on http://localhost:${port}/`);
//     });
//   })
//   .catch((err) => console.error(err));

import app from "./app";
import { AppDataSource } from "./data-source";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(process.env.PORT, () =>
    console.log(`Running at http://localhost:${process.env.PORT}`)
  );
})();