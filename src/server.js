import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';

import routes from './routes';
import AppError from './errors/AppError';

import './database';

const app = express();

app.use(routes);
app.use(errors());

app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.log(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀️ Server started on port 3333!');
});
