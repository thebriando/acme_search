import React, { Component } from "react";
import "../App.css";
import { TextField, Button } from "@material-ui/core/";
import { Contacts } from "../data/Contacts";
import { Contact } from "../models/Contact";
import { SearchResults } from "../SearchResults/SearchResults";

export class SearchForm extends Component<
  {},
  { value: string; results: Contact[] }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: "",
      results: []
    };
  }
  handleSubmit = (event: any) => {
    event.preventDefault();
    // clears previous results if there are any
    this.setState({ results: [] });
    Contacts.forEach(contact => {
      contact.matching_terms.forEach(term => {
        if (
          this.state.value.includes(term) &&
          !this.state.results.some(result => result === contact)
        ) {
          // add to search results
          this.setState({ results: [...this.state.results, contact] });
        }
      });
    });
  };
  handleChange = (event: any) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div className="search-form">
        <form>
          <TextField
            margin="normal"
            value={this.state.value}
            onChange={this.handleChange}
          ></TextField>
          <Button type="submit" variant="contained" onClick={this.handleSubmit}>
            Search
          </Button>
        </form>
        <SearchResults results={this.state.results}></SearchResults>
      </div>
    );
  }
}
