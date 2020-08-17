import React from "react";
import axios from "axios";

class LearnAxios extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const a = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(a.data);

    const b = await fetch("https://jsonplaceholder.typicode.com/users");
    const c = await b.json();
    console.log(c);

    const d = fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());
    console.log(d);
  }

  render() {
    return <h1>Hello world</h1>;
  }
}

export default LearnAxios;
