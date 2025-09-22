export class SearchBooksUseCase {
  constructor(bookProvider) {
    this.bookProvider = bookProvider;
  }

  async execute({ name }) {
    if (!name) {
      throw new Error('Search query is required.');
    }

    const books = await this.bookProvider.searchByName(name);
    return books;
  }
}