const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const users = new Map();


users.set('Thiago A', 'ADMIN');
users.set('Cyndi', 'ADMIN');
users.set('Léia', 'USER');
users.set('Snow', 'USER');

console.log(getAdmins(users));