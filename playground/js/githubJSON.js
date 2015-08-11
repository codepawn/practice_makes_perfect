var url = 'https://api.github.com/users.codepawn';
// var url = 'https:github.com/sefsef';

fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(jsonRes) {
    console.log('The response', jsonRes);
  })
  .catch(function(err) {
    console.log('error');
  })
