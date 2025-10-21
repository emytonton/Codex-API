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

  async findById(googleBookId) {
    const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
    try {
      const response = await this.api.get(`/volumes/${googleBookId}?key=${apiKey}`);
      const item = response.data;

      if (!item) {
        throw new Error(`Book with Google ID ${googleBookId} not found.`);
      }

      
      return {
        id: item.id,
        title: item.volumeInfo.title,
        subtitle: item.volumeInfo.subtitle,
        authors: item.volumeInfo.authors || [],
        publisher: item.volumeInfo.publisher,
        publishedDate: item.volumeInfo.publishedDate,
        description: item.volumeInfo.description,
        pageCount: item.volumeInfo.pageCount,
        categories: item.volumeInfo.categories || [],
        averageRating: item.volumeInfo.averageRating, 
        ratingsCount: item.volumeInfo.ratingsCount, 
        coverImage: item.volumeInfo.imageLinks?.thumbnail || item.volumeInfo.imageLinks?.smallThumbnail,
        language: item.volumeInfo.language,
      };
    } catch (error) {
      console.error("Error fetching book details from Google:", error.response?.data || error.message);
      if (error.response?.status === 404) {
        throw new Error(`Book with Google ID ${googleBookId} not found.`);
      }
      throw new Error('Failed to fetch book details.');
    }
  }
}