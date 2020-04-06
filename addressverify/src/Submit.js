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
		//read from DB
		//run verification functions
		//initiate progress bar
		//hide submission form
		let testStr = this.state.submission;
		// let trimStr = testStr.replace(/\s+/g, '')
		let testArr = testStr.split(/[\n,]/);
		console.log(testArr)
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
<<<<<<< HEAD
				<CSV onFileLoaded={(data, fileInfo) => console.dir(data)} />
=======
				<CSV onFileLoaded={(data, fileInfo) => this.handleImport(data)}/>
				<button onClick={()=> console.log(this.state.task)} />
				<CSVLink data={this.state.submission}>Download me</CSVLink>;
>>>>>>> b4eb054ff1e4dbc21f6afc51ae9b12b14c744180
			</div>
		);
	}
}
export default Submit;