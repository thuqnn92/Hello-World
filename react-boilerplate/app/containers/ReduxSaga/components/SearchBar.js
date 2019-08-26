import React from "react";
import { connect } from "react-redux";
import { fetchImages } from "../actions/actions";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchImages(this.state.term);
  };

  onInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Bar</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchImages }
)(SearchBar);