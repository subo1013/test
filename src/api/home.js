import axios from 'axios'
import {HOME_INFO} from '@/server/index.js'

export default {
	getDate(cb){
		axios.get('/api' + HOME_INFO)
			.then((res) => {
				cb(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	
}
