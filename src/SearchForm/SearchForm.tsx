import React, { Component } from "react";
import "../App.css";
import { TextField, Button } from "@material-ui/core/";

export class SearchForm extends Component<{}, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleSubmit = () => {
    console.log(this.state.value);
  };
  handleChange = (event: any) => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <TextField
            margin="normal"
            value={this.state.value}
            onChange={this.handleChange}
          ></TextField>
          <Button variant="contained" onClick={this.handleSubmit}>
            Search
          </Button>
        </form>
      </div>
    );
  }
}
