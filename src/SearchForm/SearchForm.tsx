import React, { Component } from "react";
import "../App.css";
import { TextField, Button, Container } from "@material-ui/core/";
import { Contacts } from "../data/Contacts";
import { Calendars } from "../data/Calendars";
import {
  Contact,
  Calendar,
  SlackMessage,
  Dropbox
} from "../models/SearchObject";
import { SlackMessages } from "../data/SlackMessages";
import { DropboxFiles } from "../data/DropboxFiles";
import "../SearchForm/SearchForm.css";
import { SearchResults } from "../SearchResults/SearchResults";

type searchFormState = {
  value: string;
  error: boolean;
  contactResults: Contact[];
  calendarResults: Calendar[];
  slackResults: SlackMessage[];
  dropboxResults: Dropbox[];
};
export class SearchForm extends Component<{}, searchFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: "",
      error: false,
      contactResults: [],
      calendarResults: [],
      slackResults: [],
      dropboxResults: []
    };
  }
  handleSubmit = async (event: any) => {
    event.preventDefault();
    // clears previous results if there are any
    await this.setState({
      error: false,
      contactResults: [],
      calendarResults: [],
      slackResults: [],
      dropboxResults: []
    });
    const searchData = {
      contact: Contacts,
      calendar: Calendars,
      slack: SlackMessages,
      dropbox: DropboxFiles
    };
    Object.entries(searchData).forEach(entry => {
      this.search(entry[1], entry[0]);
    });
    if (
      this.state.contactResults.length === 0 &&
      this.state.calendarResults.length === 0 &&
      this.state.slackResults.length === 0 &&
      this.state.dropboxResults.length === 0
    ) {
      this.setState({ error: true });
    }
  };
  search = (data: any, searchType: any) => {
    data.forEach((obj: any) => {
      obj.matching_terms.forEach((term: string) => {
        if (this.state.value.toLowerCase().includes(term.toLowerCase())) {
          if (
            searchType === "contact" &&
            !this.state.contactResults.some(result => result === obj)
          ) {
            const newResults = this.state.contactResults;
            newResults.push(obj);
            this.setState({ contactResults: newResults });
          } else if (
            searchType === "calendar" &&
            !this.state.calendarResults.some(result => result === obj)
          ) {
            const newResults = this.state.calendarResults;
            newResults.push(obj);
            this.setState({ calendarResults: newResults });
          } else if (
            searchType === "slack" &&
            !this.state.slackResults.some(result => result === obj)
          ) {
            const newResults = this.state.slackResults;
            newResults.push(obj);
            this.setState({ slackResults: newResults });
          } else if (
            searchType === "dropbox" &&
            !this.state.dropboxResults.some(result => result === obj)
          ) {
            const newResults = this.state.dropboxResults;
            newResults.push(obj);
            this.setState({ dropboxResults: newResults });
          }
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
      <Container className="search-form">
        <form>
          <TextField
            margin="normal"
            value={this.state.value}
            onChange={this.handleChange}
          ></TextField>
          <br></br>
          <Button
            type="submit"
            variant="contained"
            onClick={this.handleSubmit}
            disabled={!this.state.value}
          >
            Search
          </Button>
        </form>
        {this.state.error && <p>No results found</p>}
        <SearchResults
          contactResults={this.state.contactResults}
          calendarResults={this.state.calendarResults}
          slackResults={this.state.slackResults}
          dropboxResults={this.state.dropboxResults}
        ></SearchResults>
      </Container>
    );
  }
}
