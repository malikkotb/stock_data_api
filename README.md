# Stock Data API

## Description

This project is a Stock Data API that utilizes web scraping techniques with Node.js, Express.js, and Cheerio to fetch the last stock prices of a desired stock. It provides a simple and convenient way for users to retrieve stock information based on the 4-letter keyword associated with a stock.

## Usage

To fetch the last stock prices of a desired stock, use the following API endpoint:

https://stock-api-k98u.onrender.com/api/stock?stock=[name_of_stock]&password=[password]

Replace `[name_of_stock]` with the 4-letter keyword associated with the stock you want information about. The password is tricky, but count to 4.

### Example:
https://stock-api-k98u.onrender.com/api/stock?stock=AAPL&password=[password]

## Screenshots

![Screenshot 2023-12-09 at 18 52 03](https://github.com/malikkotb/stock_data_api/assets/50169361/bed6f0c9-ec91-4df7-ab72-aee80b10295a)
![Screenshot 2023-12-09 at 18 52 41](https://github.com/malikkotb/stock_data_api/assets/50169361/e809bb23-77ac-4521-9506-98f6ce228fbf)


## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/malikkotb/stock-data-api.git

2. Install dependencies
    ```bash
    cd stock-data-api
    npm install

3. Start the server
     ```bash
     npm start

## Dependencies

- Node.js
- Express.js
- Cheerio

## Configuration
Ensure that you have the required configuration set for your API. You might need to update the API endpoint or make adjustments based on your deployment environment.

## Security
Please ensure that your API is secured and follows best practices for authentication and authorization. The provided example uses a password parameter for simplicity and should be replaced with a more robust authentication mechanism in a production environment.
