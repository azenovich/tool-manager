import faker from 'faker'

import Type from 'constants/Type'
import Location from 'constants/Location'

const toolItems = []

for (let index = 0; index < 23; index++) {
	toolItems.push(
		{
			id: index,
			name: faker.name.findName(),
			type: faker.random.arrayElement(Object.getOwnPropertyNames(Type)),
			location: faker.random.arrayElement(Object.getOwnPropertyNames(Location))
		}
	)
}

const storage = {
	setItem(items) {
		localStorage.setItem('toolItems', JSON.stringify(items))
	},
	
	getItem() {
		const items = localStorage.getItem('toolItems')
		if (items) {
			return JSON.parse(items)
		}

		return items
	}
}

if (localStorage.getItem('toolItems') === null) {
	storage.setItem(toolItems)
}

export default storage