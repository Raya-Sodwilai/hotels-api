export default class MovieService {  
  static async getMovie(name) {
    try {
      const response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${name}&api-key=${process.env.API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}