import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      alert.error("Invalid information");
    }
    if (message !== prevProps.message) {
      if (message.createUser) alert.success(message.createUser);
    }
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errorsReducer,
  message: state.messagesReducer,
});
export default connect(mapStateToProps)(withAlert()(Alerts));
