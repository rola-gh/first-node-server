import {data} from './../data/index.js'

export default {
	getAll: () => {
		return data;
	},
	getItem: (itemId) => {
		const item = data.find(_item => _item.id === itemId);
		return item;
	}
}



