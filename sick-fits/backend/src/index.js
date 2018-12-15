require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const servers = createServer();

// TODO Use express middleware to handle cookies
// TODO Use express middleware to populate current User
servers.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`server is now running on port http://localhost:${deets.port}`);
  }
);
