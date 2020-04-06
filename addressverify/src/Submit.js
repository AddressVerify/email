import React from 'react';
import CSV from 'react-csv-reader';

class Submit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submission: ''
		}

	}

	handleChange(e) {
		//updates state on change
		this.setState({
			submission: e.target.value
		})
		console.log(typeof e.target.value)
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
				<CSV onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} />
			</div>
		);
	}
}
export default Submit;