import express from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import pedidoRoutes from './routes/pedido.routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', pedidoRoutes);

const PORT = process.env.PORT || 3000;

createConnection().then(() => {
  console.log('Conectado a la base de datos');
  app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });
}).catch(error => console.log(error));
