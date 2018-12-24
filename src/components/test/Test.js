import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    // ajax call and stuff
    console.log("Component Did Mount..");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //   componentWillMount() {
  //     console.log("Component will Mount..");
  //   }

  //   componentDidUpdate() {
  //     // component did update
  //     // state or something change
  //     console.log("Component Did Mount..");
  //   }

  //   componentWillUpdate() {
  //     console.log("Component Will Mount..");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     //when component will receive new Properties
  //     // usually use in redux
  //     console.log("component Will Receive Props..");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     // have to return state ior null
  //     //here you cant use this.setState()

  //     return null;
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     // call before DOM updates
  //     console.log("getSnapshotBeforeUpdate...");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
