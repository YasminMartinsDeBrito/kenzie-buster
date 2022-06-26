import "reflect-metadata"
import { DataSource } from "typeorm"
import path from "path"
import * as dotenv from 'dotenv'
dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: false,
    ssl:{rejectUnauthorized: false},
    entities: [path.join(__dirname, "./entities/**/*.{js,ts}")],
    migrations: [path.join(__dirname, "./migrations/**/*.{js,ts}")],
})

// import "reflect-metadata";
// import { DataSource } from "typeorm";
// import path from "path";
// import dotenv from "dotenv";

// dotenv.config();

// export const AppDataSource =
//   process.env.NODE_ENV === "test"
//     ? new DataSource({
//         type: "postgres",
//         entities: [path.join(__dirname, "/entities/*.ts")],
//         synchronize: true,
//       })
//     : new DataSource({
//         type: "postgres",
//         url: process.env.DATABASE_URL,
//         ssl:
//           process.env.NODE_ENV === "production"
//             ? { rejectUnauthorized: false }
//             : false,
//         synchronize: false,
//         logging: true,
//         entities:
//           process.env.NODE_ENV === "production"
//             ? ["dist/src/entities/*.js"]
//             : ["src/entities/*.ts"],
//         migrations:
//           process.env.NODE_ENV === "production"
//             ? ["dist/src/migrations/*.js"]
//             : ["src/migrations/*.ts"],
//       });
