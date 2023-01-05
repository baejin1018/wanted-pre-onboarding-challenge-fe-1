class Token {
  public getToken(key: string): string | null {
    return localStorage.getItem(key);
  }
  public setToken(key: string, token: string) {
    localStorage.setItem(key, token);
  }
  public removeToken(key: string) {
    localStorage.removeItem(key);
  }
}

export default new Token();
