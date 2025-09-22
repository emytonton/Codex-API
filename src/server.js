
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { userRoutes } from './modules/users/presentation/routes/user.routes.js';
import { bookRoutes } from './modules/books/presentation/routes/bookRoutes.js';


const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3000;


app.use('/users', userRoutes);
app.use('/books', bookRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});