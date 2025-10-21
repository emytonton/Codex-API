
export class GetBookByIdController {
  constructor(getBookByIdUseCase) {
    this.getBookByIdUseCase = getBookByIdUseCase;
  }

  async handle(request, response) {
  
    const { id: googleBookId } = request.params;

    try {
      const book = await this.getBookByIdUseCase.execute({ googleBookId });
      return response.status(200).json(book);
    } catch (err) {
  
      if (err.message.includes('not found')) {
        return response.status(404).json({ message: err.message });
      }
     
      return response.status(400).json({
        message: err.message || 'Unexpected error while fetching book details.',
      });
    }
  }
}