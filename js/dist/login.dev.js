"use strict";

var signUpButton = document.getElementById('signUp');
var signInButton = document.getElementById('signIn');
var container = document.getElementById('container');
var form = document.getElementById('reg-form'); // new

form.addEventListener('submit', registerUser);

function registerUser(event) {
  var username, password, result;
  return regeneratorRuntime.async(function registerUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          username = document.getElementById('username').value;
          password = document.getElementById('password').value;
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: username,
              password: password
            }).then(function (res) {
              return res.json();
            })
          }));

        case 5:
          result = _context.sent;
          console.log(result);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
} // old


signUpButton.addEventListener('click', function () {
  container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', function () {
  container.classList.remove("right-panel-active");
});