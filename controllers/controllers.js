import {List} from '../models/index.js'


export default {
	getItems: (req, res) => {
		res.json({
			data: List.getAll()
		});
	},
	getItemByID: (req, res) => {
		const itemId = req.params.id;

		const item = List.getItem(itemId);
		if(item){
			res.json({
				data: item
			});
		}else{
			res.status(404).json({
				message: `item ${itemId} doesn't exist`
			});
		}
	}
}