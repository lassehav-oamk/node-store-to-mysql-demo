# node-store-to-mysql-demo
This project demonstrates how one can parse a .json file and insert the contents into a mysql database.

The project uses [Knex](https://knexjs.org/) for database operations. Test data is in the Co2-demo.json file. Local MySQL server installation is required. 

## Usage

Clone the repository and run `npm install` command for the dependencies. 

Create database with name `test-db`.

Import the demo-db.sql to your database..

Run the application for example `node index.js myuser mypassword` where `myuser` is an existing username in your MySQL database
and `mypassword` is the password of the user. After completing the execution, you can check the contents of your database that there is a co2-data table with the contents from the Co2-demo.json file. 

