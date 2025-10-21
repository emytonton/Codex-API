export class IBookProvider {
  async searchByName(name) {
    throw new Error("Method 'searchByName' must be implemented.");
  }

  async findById(googleBookId) {
    throw new Error("Method 'findById' must be implemented.");
  }
}