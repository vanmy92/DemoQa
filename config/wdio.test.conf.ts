import { config as baseConfig } from "../wdio.conf";
export const config = Object.assign(baseConfig, {
  // All test env specific key val pairs
  environment: "TEST",
  sauseDemoURL: "https://www.saucedemo.com",
  // bookStoreBaseURL: "https://demoqa.com/BookStore/v1/Book?ISBN=",
  bookStoreBaseURL: "https://demoqa.com/BookStore/v1/Book",
  getGenerateToken: "https://demoqa.com/Account/v1/",
  getUser: "https://demoqa.com/Account/v1/User/",
  getAllBooks: "https://demoqa.com/BookStore/v1/Books",
  getBook :  "https://demoqa.com/BookStore/v1/Book?ISBN=",
  postLogin :  "https://demoqa.com/Account/v1/Login",
  
  postUser: "https://demoqa.com/Account/v1/User",
  nopeCommerceBaseURL: "https://admin-demo.nopcommerce.com",
  sqlConfig: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "AdventureWorksDW2019",
    server: "DESKTOP-P5LNVC8",
    options: {
      encrypt: false, // for azure
      trustServerCertificate: false, // change to true for local dev / self-signed certs
      trustedConnection: true,
    },
  },
});