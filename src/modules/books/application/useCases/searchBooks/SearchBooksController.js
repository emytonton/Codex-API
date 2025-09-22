

export class SearchBooksController {
  constructor(searchBooksUseCase) {
    this.searchBooksUseCase = searchBooksUseCase;
  }

  async handle(request, response) {

    const { q: name } = request.query;

    try {
      const books = await this.searchBooksUseCase.execute({ name });
      return response.status(200).json(books);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error while searching books.',
      });
    }
  }
}