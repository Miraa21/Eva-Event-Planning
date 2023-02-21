function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const firstName = data.get('firstName');
  const lastName = data.get('lastName');
  const email = data.get('email');
  const phone = data.get('phone');
  const password = data.get('password');
  const passwordConfirm = data.get('passwordConfirm');

  const obj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    password: password,
    passwordConfirm: passwordConfirm,
  };

  console.log(obj);

  var NumRegx = /^[0][1][0-2][0-9]{8}$/;
  var NRegx = /^[A-Z]+[a-z]+$/;
  var StrongRegex = /^(?=.[0-9])(?=.[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;

  if (
    firstName.length == 0 ||
    lastName.length == 0 ||
    phone.length == 0 ||
    email.length == 0 ||
    password.length == 0 ||
    passwordConfirm.length == 0
  ) {
    alert('All fields are Mandatory');
  }

  // else if (!(firstName.match(NRegx)) || !(lastName.match(NRegx)))
  // {
  //   alert("Please Enter a Valid Name")
  // }

  // else if (!(phone.match(NumRegx)))
  // {
  //   alert('Please Enter a Valid Phone Number')
  // }

  // else if(!(password.match(StrongRegex)))
  // {
  //   alert("The password is not strong.");
  // }
  // else if (!password.match(passwordConfirm)) {
  //   alert("The passwords don't match.");
  // } else {
    register(obj);
  // }

  // else
  // {
  //   if(!(password.match(StrongRegex)))
  //   {
  //     alert("Your password is strong.");
  //   }
  //
  //   if(!(password.match(MediumRegex)))
  //   {
  //     alert("Your password is medium.");
  //   }
  // }
}

function register(obj) {
  const url = 'https://health-call.herokuapp.com/api/v2/users/signup';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        window.location.href = 'Signin.html';
      } else {
        console.log(data);
        alert('Something went wrong!');
      }
    })
    .catch(err => console.log(err));
}
