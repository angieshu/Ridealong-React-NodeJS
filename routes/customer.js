const express	= require('express');
const axios		= require('axios');

let router		= express.Router();

const SERVER	= 'https://isolutions.fm';
const DB		= 'RideAlong';
const TOKEN		= '/fmi/rest/api';
const LAYOUT1	= 'Customers';
const LAYOUT2	= 'Media';

const USERNAME	= 'admin';
const PASSWORD	= 'password';

/* GET users listing. */
router.post('/', function(req, res, next) {
	let token = "";
	let data = {};

	axios.post(`${SERVER}${TOKEN}/auth/${DB}`, {
		user: USERNAME,
		password: PASSWORD,
		layout: LAYOUT1
	}).then((response) => {
		/** Find customer by name **/

		token = response.data.token;

		let request = {
			method: 'post',
			url: `${SERVER}${TOKEN}/find/${DB}/${LAYOUT1}`,
			headers: {
				'FM-Data-token': token
			},
			data: {
				query: [{ 'CustomerName': req.body.customerName }]
			}
		};

		console.log('1');
		return axios(request);
	}).then((response) => {
		/** Find customer's media **/

		// data.info = response.data.data[0].fieldData;
		data.info = response.data.data.filter(el => el.fieldData.CustomerName.toUpperCase() === req.body.customerName.toUpperCase())[0].fieldData;

		let request = {
			method: 'post',
			url: `${SERVER}${TOKEN}/find/${DB}/${LAYOUT2}`,
			headers: {
				'FM-Data-token': token
			},
			data: {
				query: [{ '_fkCustomersID': data.info.__pkCustomerID }]
			}
		}

		console.log('2');
		return axios(request);
	}).then((response) => {
		data.media = [];
		response.data.data.map(el => data.media.push(el.fieldData));
		data.errorCode = 0;
		console.log('3');
		res.json(data);
	}).catch((e) => res.json(e.data))
});

module.exports = router;
