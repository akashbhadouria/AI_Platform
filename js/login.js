const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const form = document.getElementById('reg-form');
// new
form.addEventListener('submit',registerUser);

async function registerUser(event) {
	event.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

const result =  await	fetch('/api/register', {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username,
			password
		}).then((res) => res.json())
	});
	console.log(result);
}
// old
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
}); 