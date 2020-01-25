const customers = [
	{
		id: 1,
		name: "moe",
		email: "moe@gmail.com",
		isVIP: true,
		dateJoined: "07/05/2015"
	},
	{
		id: 2,
		name: "larry",
		isVIP: true,
		email: "larry@gmail.com",
		dateJoined: "01/01/2019"
	},
	{ id: 3, name: "shep", email: "shep@gmail.com", dateJoined: "03/19/2000" }
];

const container = document.querySelector(".container");

customers.forEach((customer) => {
	customer.dateJoined = new Date(customer.dateJoined);
});
customers.sort((a, b) => a.dateJoined - b.dateJoined);

const render = () => {
	let html = customers
		.map((employee) => {
			let diff = new Date() - employee.dateJoined;

			let oneYear = 1000 * 60 * 60 * 24 * 365;
			return `<div class=${employee.isVIP ? "green" : "notgreen"} data-idx=${
				employee.id
			}>${
				employee.name
			} joined on ${employee.dateJoined.toLocaleDateString()} And has been a member for ${(
				diff / oneYear
			).toFixed(1)} years</div>`;
		})
		.join("");
	container.innerHTML = html;
};
render();
const form = document.forms["employee-list"];

form.addEventListener("submit", (ev) => {
	ev.preventDefault();
	let customerName = document.querySelector('[name="name"]').value;
	let customerJoined = document.querySelector('[name="date"]').value;
	let vip = document.querySelector('[name="vip"]').checked;

	if (customerName === "" && customerJoined === "") {
		let li =
			'<li class="red"> name required </li> <li class="red">  please enter a valid date </li>';
		document.querySelector(".validation").innerHTML = li;
		return;
	}

	if (customerName === "") {
		let li = '<li class="red"> name required </li>';
		document.querySelector(".validation").innerHTML = li;
		return;
	} else if (customerJoined === "") {
		let li = '<li class="red"> date required </li>';
		document.querySelector(".validation").innerHTML = li;
		return;
	}

	let newEmployee = {
		id: customers.length + 1,
		name: customerName,
		dateJoined: new Date(customerJoined),
		isVIP: vip
	};
	console.log(customerJoined);
	customers.push(newEmployee);
	console.log(customers);
	render();
});
console.log(customers);
