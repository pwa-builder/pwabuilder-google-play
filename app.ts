import express from 'express';
import router from './routes/project.js';
import cors from 'cors';
import bodyParser from 'body-parser';

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
  const bubblewrapPkg = require('@bubblewrap/core/package.json');
  console.log('Initializing PWABuilder Google Play packager with Bubblewrap version', bubblewrapPkg.version);
} catch (error) {
  console.warn('Unable to find Bubblewrap version. Continuing without version logging.');
}
export default app;
