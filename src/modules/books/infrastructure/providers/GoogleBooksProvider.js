import axios from 'axios';
import { IBookProvider } from '../../domain/provideres/IBookProvider.js';

export class GoogleBooksProvider extends IBookProvider {
  constructor() {
    super();
    this.api = axios.create({
      baseURL: 'https://www.googleapis.com/books/v1',
    });
  }

  async searchByName(name) {
    const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
    const response = await this.api.get(`/volumes?q=${name}&key=${apiKey}`);

    
    const books = response.data.items.map(item => {
      return {
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || [],
        description: item.volumeInfo.description,
        pageCount: item.volumeInfo.pageCount,
        coverImage: item.volumeInfo.imageLinks?.thumbnail,
      };
    });

    return books;
  }
}