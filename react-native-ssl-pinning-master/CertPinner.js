import {fetch} from 'react-native-ssl-pinning';

fetch(url, {
	method: "POST" ,
	timeoutInterval: communication_timeout, // milliseconds
	body: body,
	// your certificates array (needed only in android) ios will pick it automatically
	sslPinning: {
		certs: ["cert","firecert","upcert"] 
	},
	headers: {
		Accept: "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*", "e_platform": "mobile",
	}
})
.then(response => {
	console.log(`response received ${response}`)
})
.catch(err => {
	console.log(`error: ${err}`)
})