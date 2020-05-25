import React from 'react';

class CollectionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionName: ''
    }

  }

  handleNameChange(e){
    this.setState({
			collectionName: e.target.value
		})
  }

  handleClick(){
    this.props.new(this.state.collectionName);
    this.props.closer()
  }

  render() {
    return (
      <div>
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Create New Collection</p>
              <button className="delete" aria-label="close"
                onClick={this.props.closer}>
              </button>
            </header>
            <section className="modal-card-body">
              Collection Name
            <input className="input is-primary" type="text"
                placeholder="Name your collection"
                onChange={(e) => this.handleNameChange(e)}>
              </input>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success"
                onClick={() => this.handleClick()}
                >Create</button>
              <button className="button" onClick={this.props.closer}>Cancel</button>
            </footer>
          </div>
        </div>
      </div>
    );


  }
}

export default CollectionModal;