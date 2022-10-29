const data = require("./Co2-demo.json");

if (process.argv.length < 4) {
  console.log(
    "Please supply database username and password as command line arguments."
  );
  console.log(" for example: node index.js myuser mypassword");
  return;
}
console.log(
  "Connecting to database with username '" +
    process.argv[2] +
    "' and password '" +
    process.argv[3] +
    "'"
);

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: process.argv[2],
    password: process.argv[3],
    database: "test-db",
  },
});

(async function () {
  // Return a promise from this function so that we can
  // wait for all the asynchornous mysql operations to complete
  // before closing the connection with knex.destroy()
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Inserting data to db...");
      for (i = 0; i < data.length; i++) {
        console.log("inserting index ", i);

        // Here is the beef of the function -> data from the json file
        // is inserted into the database
        const insertedRows = await knex("demo-db").insert({
          time: data[i].TimeYrBP,
          value: data[i].Co2ppm,
        });
        console.log("completed index ", i);
      }
      resolve();
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
})().then(() => {
  // all database operations have completed
  console.log("Operation completed successfully");
  knex.destroy();
});
