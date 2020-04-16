import React from 'react';
import CSV from 'react-csv-reader';
import { CSVLink, CSVDownload } from "react-csv";
import Axios from "axios";


class Submit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submission: 'fire,water,air,dirt',
			task: ['lmao','fire','water'],

		}

	}

	handleChange(e) {
		//updates state on change
		this.setState({
			submission: e.target.value
		})
	}

	handleSubmit(e) {
		//submit to DB
		Axios.post('/user', {
			data:this.state
		})
		.then((res) => {console.log(res)})
		.catch((err) => {console.log(err)})
		//read from DB
		//run verification functions
		//initiate progress bar
		//hide submission form
		let testStr = this.state.submission;
		// let trimStr = testStr.replace(/\s+/g, '')
		let testArr = testStr.split(/[\n,]/);
		// for(let i = 0; i < testArr.length; i+=100){
		// 	if(i + 100 > testArr.length){
		// 		let end = testArr.length - 1;
		// 		console.log(testArr.slice(i, end))
		// 		break
		// 	}
		// 	console.log(testArr.slice(i, i + 100))
		// }
		console.log(testArr);

	}
	handleImport(e) {
		this.setState({
			task: e,
		}, console.log(this.state.task, e))	
	}

	render() {
		return (
			<div>
				<div>
					<p>Input Email Addresses</p>
					<p>Single</p>
					<textarea onChange={(e) => this.handleChange(e)}></textarea>
				</div>
				<div>
					<button onClick={() => this.handleSubmit()}>Submit!</button>
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