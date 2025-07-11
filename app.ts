import express from 'express';
import router from './routes/project.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use('/', router);
app.use(express.static('static'));

try {
  const bubblewrapVersion = require(path.resolve(__dirname, 'package.json')).dependencies['@bubblewrap/core'];
  console.log('Initializing PWABuilder Google Play packager with Bubblewrap version', bubblewrapVersion);
} catch (error) {
  console.warn('Unable to find @bubblewrap/core version. Continuing without version logging.');
}
export default app;
