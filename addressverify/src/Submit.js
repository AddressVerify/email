import React from 'react';
import CSV from 'react-csv-reader';
import { CSVLink, CSVDownload } from "react-csv";
import Axios from "axios";


class Submit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submission: 'fire,water,air,dirt',
			emails:[],
			verified:[],
			task: ['lmao','fire','water']

		}

	}

	handleChange(e) {
		//updates state on change
		this.setState({
			submission: e.target.value
		})
	}

	handleVerify(){
		Axios.post('/verify', {
			data:this.state.emails,
			inactive:[1],
			jobSet:null
		})
		.then((res) => {console.log(res)})
		.catch((err) => {console.log(err)})
		.finally((res) => this.setState({
			emails:[],
			verified:res
		}))
	}

	handleSubmit(e) {
		//submit to DB
		let testStr = this.state.submission;
		// let trimStr = testStr.replace(/\s+/g, '')
		let testArr = testStr.split(/[\n,]/);
		this.setState({
			emails:testArr,
			submission:''
		})
		// Axios.post('/user', {
		// 	data:this.state
		// })
		// .then((res) => {console.log(res)})
		// .then((verify(e)))
		// .catch((err) => {console.log(err)})

		//read from DB
		//run verification functions
		//initiate progress bar
		//hide submission form

		// for(let i = 0; i < testArr.length; i+=100){
		// 	if(i + 100 > testArr.length){
		// 		let end = testArr.length - 1;
		// 		console.log(testArr.slice(i, end))
		// 		break
		// 	}
		// 	console.log(testArr.slice(i, i + 100))
		// }
		// console.log(testArr);

	}
	handleImport(e) {
		this.setState({
			task: e,
		})
	}

	render() {
		return (
			<div>
				<div>
					<p>Total Submissions Entered</p>
					{this.state.emails.length}
					<p>Input Email Addresses</p>
					<p>Single</p>
					<textarea value={this.state.submission} onChange={(e) => this.handleChange(e)}></textarea>
					<div>
					</div>
				</div>
				<div>
					<button onClick={() => this.handleSubmit()}>Submit</button>
					<button onClick={() => this.handleVerify()}>Verify Submissions</button>
					<p>
					 {this.state.verified}
					</p>				
				</div>
				<p>CSV Import</p>
				<CSV onFileLoaded={(data, fileInfo) => this.handleImport(data)}/>
				<button onClick={()=> console.log(this.state.task)} />
				<CSVLink data={this.state.submission}>Download me</CSVLink>;
			</div>
		);
	}
}
export default Submit;