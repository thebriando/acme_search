import React, { Component } from "react";
import "../App.css";
import "../SearchForm/SearchForm.css";
import { SearchResults } from "../SearchResults/SearchResults";
import { TextField, Button, Container } from "@material-ui/core/";
import { Contacts } from "../data/Contacts";
import { Calendars } from "../data/Calendars";
import { SlackMessages } from "../data/SlackMessages";
import { DropboxFiles } from "../data/DropboxFiles";
import { Tweets } from "../data/Tweets";
import {
  Contact,
  Calendar,
  SlackMessage,
  Dropbox,
  Tweet
} from "../models/SearchObject";

interface State {
  value: string;
  error: boolean;
  contactResults: Contact[];
  calendarResults: Calendar[];
  slackResults: SlackMessage[];
  dropboxResults: Dropbox[];
  tweetResults: Tweet[];
}
export class SearchForm extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: "",
      error: false,
      contactResults: [],
      calendarResults: [],
      slackResults: [],
      dropboxResults: [],
      tweetResults: []
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
      dropboxResults: [],
      tweetResults: []
    });
    const searchData = {
      contactResults: Contacts,
      calendarResults: Calendars,
      slackResults: SlackMessages,
      dropboxResults: DropboxFiles,
      tweetResults: Tweets
    };
    // Searches through each dataset
    Object.entries(searchData).forEach(entry => {
      this.search(entry[1], entry[0]);
    });
    // Sets error if no results are found
    if (
      this.state.contactResults.length === 0 &&
      this.state.calendarResults.length === 0 &&
      this.state.slackResults.length === 0 &&
      this.state.dropboxResults.length === 0 &&
      this.state.tweetResults.length === 0
    ) {
      this.setState({ error: true });
    }
  };
  search = (data: any, searchType: any) => {
    const userTerms = this.state.value.split(/,| /);
    data.forEach((obj: any) => {
      // checks if matching terms contains user's search terms
      // search terms are calculated by separating user's input by commas or spaces
      if (obj.matching_terms.some((term: string) => userTerms.includes(term))) {
        const key: keyof State = searchType;
        const results: any = this.state[key];
        if (results && !results.some((result: any) => result === obj)) {
          results.push(obj);
          this.setState({ [key]: results } as any);
        }
      }
    });
    // Sorts all results in ascending order
    this.sort();
  };
  sort = () => {
    // Sorts contacts by full name
    this.state.contactResults.sort((a: Contact, b: Contact) =>
      a.name.localeCompare(b.name)
    );
    // Sorts calendar results by date
    this.state.calendarResults.sort((a: Calendar, b: Calendar) => {
      return this.dateSort(a.date, b.date);
    });
    // Sorts slack messages by timestamp
    this.state.slackResults.sort((a: SlackMessage, b: SlackMessage) => {
      return this.dateSort(a.timestamp, b.timestamp);
    });
    // Sorts dropbox results by date created
    this.state.dropboxResults.sort((a: Dropbox, b: Dropbox) => {
      return this.dateSort(a.created, b.created);
    });
    // Sorts tweets by timestamp
    this.state.tweetResults.sort((a: Tweet, b: Tweet) => {
      return this.dateSort(a.timestamp, b.timestamp);
    });
  };
  dateSort = (a: string, b: string) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
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
        {this.state.error && <p>No results found.</p>}
        <SearchResults
          contactResults={this.state.contactResults}
          calendarResults={this.state.calendarResults}
          slackResults={this.state.slackResults}
          dropboxResults={this.state.dropboxResults}
          tweetResults={this.state.tweetResults}
        ></SearchResults>
      </Container>
    );
  }
}
