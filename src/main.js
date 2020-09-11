import axios from 'axios';

class Api {
  static async getUser(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      console.log(response);
    } catch (error) {
      console.warn('Erro na busca');
    }
  }
}

Api.getUser('gabrielgqa');