const apiKey = '072e3215a571fce6a9207ae170cf0cc8e3ef48ad';  // Replace with your JumpCloud API key

function getUserInfo() {
  const apiUrl = 'https://api.jumpcloud.com/systemusers';

  axios.get(apiUrl, {
    headers: {
      'x-api-key': apiKey
    }
  })
  .then(response => {
    const users = response.data;
    displayUserInfo(users);
  })
  .catch(error => {
    console.error('Error fetching user info:', error);
  });
}

function displayUserInfo(users) {
  const userInfoDiv = document.getElementById('userInfo');
  userInfoDiv.innerHTML = '<h2>User Information:</h2>';
  users.forEach(user => {
    userInfoDiv.innerHTML += `<p>${user.userName}</p>`;
  });
}
