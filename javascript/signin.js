function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const email = data.get('email');
  const password = data.get('password');

  const obj = {
    email: email,
    password: password,
  };

  console.log(obj);

  // if (email.length == 0 && password.length == 0) {
  //   alert('Both fields are empty.');
  // } else if (email.length == 0) {
  //   alert('The email field is empty.');
  // } else if (password.length == 0) {
  //   alert('The password field is empty.');
  // } else {
  getToken(obj);

  // }
}

function getToken(obj) {
  const url = 'https://health-call.herokuapp.com/api/v2/users/login';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = 'Reserve.html';
      } else {
        console.log(data);
        alert('Something went werong!');
      }
    })
    .catch(err => console.log(err));
}
