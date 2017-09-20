# Setup instructions:

- Setup MySQL on your machine
- Create a user `ddameetup` with password `ddameetup`
- Create a database `ddameetup` and give the `ddameetup` user full privileges (this is just for local - change as required later by editing the `database.js` under `config` folder in the `dda-feedback-server` folder) :)
- Import the `ddameetup_2017-09-20.sql` file into the database for the `feedbacks` table structure and content (nothing as of now to create it automatically - can do that later on)

## Server codebase (dda-feedback-server):

- `yarn` or `npm install`
- `yarn start` or `npm start`

## Client codebase (dda-feedback-client):

- `yarn` or `npm install`
- `yarn start` or `npm start`


