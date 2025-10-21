
import { GoogleBooksProvider } from '../../../infrastructure/providers/GoogleBooksProvider.js';
import { GetBookByIdUseCase } from './GetBookByIdUseCase.js';
import { GetBookByIdController } from './GetBookByIdController.js';

const googleBooksProvider = new GoogleBooksProvider();
const getBookByIdUseCase = new GetBookByIdUseCase(googleBooksProvider);
const getBookByIdController = new GetBookByIdController(getBookByIdUseCase);

export { getBookByIdController };