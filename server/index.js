import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
//import swaggerUI from 'swagger-ui-express';
//import docs from '../openapi.json';

//import dotenv from 'dotenv';

//dotenv.config();

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
//app.use('/documentation/v1/', swaggerUI.serve, swaggerUI.setup(docs));

app.get('/api/v1', (req, res) => res.status(200).json({ message: 'Welcome to teamWork API V1.0!' }));
app.use(routes);
app.use('*', (req, res) => res.status(404).send({
        status: 404,
    message: 'Route Not Found!',
  }));
     
  app.listen(port, () => console.log(`listening on port ${port}`));
  
  export default app;

