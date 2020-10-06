// mostly code from reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      redirect: false,
      seconds: 0,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(this.countDownThenredirectPage, 1000);
    }
  }

  countDownThenredirectPage = () => {
    let count = this.state.seconds;
    count++;
    this.setState({ seconds: count });

    if (count === 5) {
      this.setState({ redirect: true });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.
          <Link to="/">Click here</Link> to go back to the home page or you will
          be redirected back to home page in {" " + this.state.seconds} seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
