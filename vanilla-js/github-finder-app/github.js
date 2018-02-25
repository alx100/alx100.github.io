class GitHub {
  constructor() {
    this.client_id = 'd6086f7a93ce5b9a6dd8';
    this.client_secret = '1820654fd15bc97b158975be0fd4af237d2a91b1';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}