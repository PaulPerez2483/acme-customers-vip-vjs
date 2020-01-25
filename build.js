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
	{ id: 4, name: "shep", email: "shep@gmail.com", dateJoined: "03/19/2000" }
];

const container = document.querySelector(".container");
console.log(container);


customers.forEach(customer => {
	customer.dateJoined = new Date(customer.dateJoined);
});
customers.sort((a, b) => a.dateJoined - b.dateJoined);


let html = customers
	.map((employee) => {
		
		let diff = new Date() - employee.dateJoined;
		
		let oneYear = 1000*60*60*24*365;
		return `<div class=${employee.isVIP ? "green" : "notgreen"} data-idx=${
			employee.id
		}>${employee.name} joined on ${employee.dateJoined.toLocaleDateString()} And has been a member for ${(diff/oneYear).toFixed(1)} years</div>`;
	})
	.join("");

container.innerHTML = html;
