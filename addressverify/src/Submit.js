import React from 'react';

class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submission: ''
        }

    }

handleChange(e){
    this.setState({
        submission:e.target.value
    }).then(() => {
        console.log(this.state.submission)
    })
}

handleSubmit(e){
    //submit to DB
    //read from DB
    //run verification functions
    //initiate progress bar
    //hide submission form
    //
}

render() {
        return (
            <div>
            <div>
                <p>Input Email Addresses</p>
                <textarea onChange={(e) => this.handleChange(e)}></textarea>
            </div>
            <div>
                <button onClick={(e) => this.handleSubmit(e)}>Submit!</button>
            </div>
            </div>
        );
}
}
export default Submit;