import path from 'path';
import sslRedirect from 'heroku-ssl-redirect';
import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import cors from 'cors';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';

import { authRouter } from './routes/auth';
import { bioRouter } from './routes/bio';
import { backgroundRouter } from './routes/backgrounds';
import { printRouter } from './routes/prints';
import { projectRouter } from './routes/projects';
import { uploadRouter } from './routes/upload';

const app = express();
// app.use(sslRedirect());
app.use(express.json());
app.use(cors());
app.use(cookieSession({ signed: false, secure: false }));

app.use('/api/auth', authRouter);
app.use('/api/bio', bioRouter);
app.use('/api/backgrounds', backgroundRouter);
app.use('/api/prints', printRouter);
app.use('/api/projects', projectRouter);
app.use('/api/uploads', uploadRouter);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);
export { app };
