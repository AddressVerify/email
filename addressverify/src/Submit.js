import React from 'react';
import CSV from 'react-csv-reader';
import { CSVLink } from "react-csv";
import Axios from "axios";


class Submit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submission: '',
			emails: [],
			verified: [],
			csv: [],
			jobName:`Job ${this.props.num}`
		}

	}

	handleChange(e, stateName) {
		//updates state on change
		console.log(e)
		this.setState({
			[stateName]: e.target.value
		})
	}

	handleVerify() {
		//production 
		//Axios.post('http://sendmatic.com/app/verify', {
		//dev
		var i = this.props.i;
		var name = this.state.jobName;
		Axios.post('/verify', {
			data: this.state.emails,
			inactive: [1],
			jobSet: null
		})
			.then((res) => {
				console.log(res);
				// if(this.state.csv.length > 0){
				// 	this.setState({
				// 		csv:
				// 	})
				// }
				this.setState({
					verified: res.data,
					emails: [],
				}, this.props.newJob(res.data, i, name))
			})
			.then(() => {
				let tempCsv = this.state.csv
				tempCsv.forEach((line, index) => {
					line.push(this.state.verified[index][1] || "false", this.state.verified[index][2])
				})
				this.setState({
					csv: tempCsv
				})
			})
			.catch((err) => { console.log(err) })
			.finally(() => this.props.closer()
			)

	}

	handleSubmit(e) {
		//submit to DB
		// let testStr = this.state.submission;
		// let trimStr = testStr.replace(/\s+/g, '')
		// let testArr = testStr.split(/[\n,]/);
		let testStr = this.state.submission;
		testStr = testStr.replace(/[\n,]/g, ',');
		testStr = testStr.replace(/\s+/g, '');
		console.log(testStr);
		let testArr = testStr.split(',');
		let filteredArr = testArr.filter((email) => email.length > 1)
		console.log(filteredArr)
		this.setState({
			emails: filteredArr,
			submission: ''
		})
	}
	handleImport(e) {
		let extracted = []
		e.forEach((item) => {
			extracted.push(item[0]);
		})
		this.setState({
			csv: e,
			emails: extracted
		})
	}

	showState() {
		console.log(this.state)
	}

  handleClick(){
    this.handleVerify()
  }

	render() {
		return (
			<div>
				<div className="modal is-active">
					<div className="modal-background"></div>
					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title">Verify Email Addresses</p>
							<button className="delete" aria-label="close"
								onClick={this.props.closer}>
							</button>
						</header>
						<section className="modal-card-body">
							Job Name
						<input className="input is-primary" type="text"
								onChange={(e) => this.handleChange(e, 'jobName')}
								defaultValue={`Job ${this.props.num}`}></input>
							<p>Records Detected</p>
							{this.state.emails.length}
							<p>CSV Import</p>
							<CSV onFileLoaded={(data, fileInfo) => this.handleImport(data)} />
							<CSVLink
								data={this.state.csv} className={"button is-link"}>
								Download Verified CSV
							</CSVLink>
							{this.state.verified.length > 0 ?
								<p>
									{this.state.verified.reduce((acc, address) => {
										return acc + address[1];
									}, 0)} valid addresses out of {this.state.verified.length}
								</p>
								: null}

						</section>
						<footer className="modal-card-foot">
							<button className="button is-success"
								onClick={() => this.handleClick()}>Verify Results</button>
							<button className="button" onClick={this.props.closer}>Cancel</button>
						</footer>
					</div>
				</div>



			</div>
		);
	}
}
export default Submit;



{/* <div>
	<p>Total Submissions Entered</p>
	{this.state.emails.length}
	<p>Input Email Addresses</p>
	<textarea
		className={"textarea is-primary"}
		value={this.state.submission}
		onChange={(e) => this.handleChange(e, 'submission')}>
	</textarea>
	<div>
	</div>
</div>
<div>
	<button className={"button is-primary"} onClick={() => this.handleSubmit()}>
		Submit</button>
	<button className={"button is-primary"} onClick={() => this.handleVerify()}>
		Verify Submissions</button>
	<button className={"button is-primary"} onClick={() => this.showState()}>
		Show State</button>
</div>
<p>CSV Import</p>
<CSV onFileLoaded={(data, fileInfo) => this.handleImport(data)} />
<CSVLink
	data={this.state.csv} className={"button is-link"}>
	Download Verified CSV
</CSVLink>
<button className={"button is-primary"} onClick={() => this.handleVerify()}>
	Verify CSV</button>
{this.state.verified.length > 0 ?
	<p>
		{this.state.verified.reduce((acc, address) => {
			return acc + address[1];
		}, 0)} valid addresses out of {this.state.verified.length}
	</p>
	: null} */}