import axios from "axios";

type User = {
  email: string;
  password: string;
};

class HttpClient {
  static async createUser(user: User) {
    return axios.post(/* ... */);
  }

  static async getUserByEmail(email: string) {
    return axios.get(/* ... */);
  }
}

async function signup(email: string, password: string) {
  const existingUser = await HttpClient.getUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already used");
  }

  return HttpClient.createUser({ email, password });
}
