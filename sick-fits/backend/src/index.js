const cookieParser = require('cookie-parser');
require('dotenv').config({ path: 'variables.env' });
const jwt = require('jsonwebtoken');
const createServer = require('./createServer');
const db = require('./db');

const servers = createServer();

servers.express.use(cookieParser());

// Decode the JWT so we can get the user ID on each request
servers.express.use((req, res, next) => {
  console.log('im a middleware');
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // Put the userId onto the req for future req
    req.userId = userId;
  }
  next();
});
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
