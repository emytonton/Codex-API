
import { Router } from 'express';
import { searchBooksController } from '../../application/useCases/searchBooks/index.js';
import { getBookByIdController } from '../../application/useCases/getBookById/index.js';

const bookRoutes = Router();

bookRoutes.get('/search', (request, response) => {
  return searchBooksController.handle(request, response);
});

bookRoutes.get('/:id', (request, response) => {
  
  return getBookByIdController.handle(request, response);
});

export { bookRoutes };