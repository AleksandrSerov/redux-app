import React, { Component } from "react";
import { connect } from "react-redux";
// import "./TopicsScreen.css";
import * as topicsActions from "../store/actions/thunks";
import * as topicsSelectors from "../store/reducers/selectors";

import ListView from "../components/ListView";

class TopicsScreen extends Component {
  componentDidMount() {
    this.props.dispatch(topicsActions.fetchTopics());
  }
  renderLoading() {
    return <p>Loading...</p>;
  }

  renderRow(row) {
    return (
      <div className="TopicsScreen">
        <ListView
          rowsIdArray={this.props.rowsIdArray}
          rowsById={this.props.rowsById}
          renderRow={this.renderRow}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="TopicsScreen">
        <ListView
          rowsIdArray={this.props.rowsIdArray}
          rowsById={this.props.rowsById}
          renderRow={this.renderRow}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rowsById: topicsSelectors.getTopicsByUrl(state),
    rowsIdArray: topicsSelectors.getTopicsUrlArray(state)
  };
}
export default connect(mapStateToProps)(TopicsScreen);
