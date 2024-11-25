const db = require("./connection");

console.log(db, "<---- db");

const seed = ({ teams, players, positions }) => {
  return db
    .query(`DROP TABLE IF EXISTS positions;`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS players`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS teams`);
    })
    .then(() => {
      return db.query(`CREATE TABLE teams ( 
        team_id SERIAL PRIMARY KEY,
        team_name VARCHAR(255) NOT NULL,
        team_established_year INT NOT NULL,
        team_stadium VARCHAR(255)
        );`);
    })
    .then(() => {
      return db.query(`CREATE TABLE players ( 
        player_id SERIAL PRIMARY KEY,
        player_name VARCHAR(255) NOT NULL,
        player_number VARCHAR(255) NOT NULL,
        player_age INT NOT NULL,
        team_id INT REFRENCES teams(team_id)
        );`);
    });
};

module.exports = seed;
