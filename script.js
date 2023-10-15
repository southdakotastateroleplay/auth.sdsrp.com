const jumpCloudApiKey = '072e3215a571fce6a9207ae170cf0cc8e3ef48ad';  // Replace with your JumpCloud API key

function authenticateUser(username, password) {
  const apiUrl = `https://api.jumpcloud.com/systemusers/${username}/authenticate`;

  return axios.post(apiUrl, {
    password
  }, {
    headers: {
      'x-api-key': jumpCloudApiKey
    }
  });
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  authenticateUser(username, password)
    .then(response => {
      console.log('Authentication successful:', response.data);
      alert('Authentication successful!');
    })
    .catch(error => {
      console.error('Authentication failed:', error);
      alert('Authentication failed. Please check your credentials.');
    });
}
