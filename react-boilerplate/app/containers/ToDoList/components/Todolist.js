import React, { Component } from 'react';
import { connect } from 'react-redux';
class Todolist extends Component {
  render() {
    
    return (
      <div>
        <h1>test</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {

};
const mapDispatchToProps = dispatch => {

};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todolist);
