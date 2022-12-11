if (process.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
  module.exports = {
    DATABASE: process.env.DATABASE,
  };
  