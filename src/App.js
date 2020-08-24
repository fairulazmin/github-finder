import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/alert";
import About from "./components/pages/About";
import User from "./components/users/User";

class App extends React.Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };

  render() {
    const { users, user, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showUsers={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
  // Search Github Users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
        },
      }
    );
    this.setState({ users: res.data.items, loading: false });
    // console.log(res.data.items);
  };

  // Get single Github user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
        },
      }
    );
    this.setState({ user: res.data, loading: false });
  };

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  setAlert = (message, type) => {
    this.setState({
      alert: { message, type },
    });

    setTimeout(
      () =>
        this.setState({
          alert: null,
        }),
      2000
    );
  };
}

export default App;

// componentDidMount() {
//   axios
//     .get("https://api.github.com/search/users?q=bradtraversy")
//     .then((res) => console.log(res.data));
// }

// async componentDidMount() {
//   this.setState({ loading: true });

//   // const res = await axios
//   //   .get("https://api.github.com/users")
//   //   .then((response) => response.json());

//   const res = await axios.get("https://api.github.com/users", {
//     headers: {
//       Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
//     },
//   });

//   this.setState({
//     users: res.data,
//     loading: false,
//   });
// }
