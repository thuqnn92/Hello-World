import React from "react";
import { connect } from "react-redux";

const App = props => {
  return (
    <div>
       <h1>Redux</h1>
      <h1>{props.count}</h1>
      <button type="button" onClick={props.increase}>Increment</button>
      <button type="button" onClick={props.decrease}>Decrement</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};
function mapDispatchToProps(dispatch) {
  return { 
    increase: () => dispatch({ type: 'INCREMENT' }),
    decrease: () => dispatch({ type: 'DECREMENT' }),
   };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
