import faker from 'faker'

import Type from 'constants/Type'
import Location from 'constants/Location'

const toolItems = []
const storageKey = 'toolItems'

for (let index = 0; index < 23; index++) {
	toolItems.push(
		{
			id: index + 1,
			name: faker.name.findName(),
			type: faker.random.arrayElement(Object.getOwnPropertyNames(Type)),
			location: faker.random.arrayElement(Object.getOwnPropertyNames(Location))
		}
	)
}

const storage = {
	getItems() {
		const items = localStorage.getItem(storageKey)
		if (items) {
			return JSON.parse(items)
		}

		return items
	},

	saveItems(items) {
		if (items) {
			localStorage.setItem(storageKey, JSON.stringify(items))
		}
	}
}

if (localStorage.getItem(storageKey) === null) {
	storage.saveItems(toolItems)
}

export default storage