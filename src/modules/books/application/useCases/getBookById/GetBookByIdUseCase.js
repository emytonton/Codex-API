
export class GetBookByIdUseCase {
  constructor(bookProvider) {
    this.bookProvider = bookProvider;
  }

  async execute({ googleBookId }) {
    if (!googleBookId) {
      throw new Error('Google Book ID is required.');
    }

    const book = await this.bookProvider.findById(googleBookId);
    
    return book;
  }
}