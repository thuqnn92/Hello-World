import React from "react";
import { connect } from "react-redux";
import { fetchImages } from "../actions/actions";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.props.images} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images
  };
};

export default connect(
  mapStateToProps,
  { fetchImages }
)(App);