
import { Router } from 'express';
import { searchBooksController } from '../../application/useCases/searchBooks/index.js';

const bookRoutes = Router();

bookRoutes.get('/search', (request, response) => {
  return searchBooksController.handle(request, response);
});

export { bookRoutes };