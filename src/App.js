import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const axios = require("axios");

// euw1.api.riotgames.com
// euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/xLosTxSouLi?api_key=RGAPI-66642876-0e6a-413b-b233-e3b558d78f03

const test = async () => {
  const response = await axios({
    url:
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/xLosTxSouLi?api_key=RGAPI-66642876-0e6a-413b-b233-e3b558d78f03",
    method: "get",
    withCredentials: true,
    headers: {
      "Access-Control-Request-Headers": "Content-Type",
      "Access-Control-Request-Method": "GET"
    }
  });

  console.log(response);
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      searchResults: []
    };
  }

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  searchForMovies = queryStr => {};

  render() {
    return (
      <div className="bg-secondary shadow text-center">
        <h2 className="bg-danger p-2 rounded shadow-lg">
          MovieDB-API-Testing von Marco Hoff
        </h2>
        <input
          className="m-2"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <br />
        <div className="d-inline">
          <span>
            {this.state.inputValue !== "" &&
              "Nach '" + this.state.inputValue + "' suchen?"}
          </span>
          <Button className="m-2" onClick={() => test()}>
            Test
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
