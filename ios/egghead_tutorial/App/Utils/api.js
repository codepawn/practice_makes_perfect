var api = {
  getBio(username){
    username = username.toLowerCase().trim();
    console.log(username);
    var url = `https://api.github.com/users/${username}`;
    console.log(url);
    console.log(fetch(url).then((res) => res.json()));
    return fetch(url).then((res) => res.json());
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;