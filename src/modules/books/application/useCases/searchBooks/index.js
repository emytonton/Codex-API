
import { GoogleBooksProvider } from '../../../infrastructure/providers/GoogleBooksProvider.js';
import { SearchBooksUseCase } from './SearchBooksUseCase.js';
import { SearchBooksController } from './SearchBooksController.js';


const googleBooksProvider = new GoogleBooksProvider();


const searchBooksUseCase = new SearchBooksUseCase(googleBooksProvider);


const searchBooksController = new SearchBooksController(searchBooksUseCase);

export { searchBooksController };