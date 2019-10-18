import React, { Component } from "react";
import "../App.css";
import { TextField, Button } from "@material-ui/core/";
import { Contacts } from "../data/Contacts";
import { Contact } from "../models/Contact";
import { ContactSearchResults } from "../SearchResults/ContactSearchResults";
import { CalendarSearchResults } from "../SearchResults/CalendarSearchResults";
import { Calendars } from "../data/Calendars";
import { Calendar } from "../models/Calendar";
import { SlackMessage } from "../models/SlackMessage";
import { SlackMessages } from "../data/SlackMessages";
import { SlackMessageSearchResults } from "../SearchResults/SlackMessageSearchResults";

type searchFormState = {
  value: string;
  contactResults: Contact[];
  calendarResults: Calendar[];
  slackResults: SlackMessage[];
};
export class SearchForm extends Component<{}, searchFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: "",
      contactResults: [],
      calendarResults: [],
      slackResults: []
    };
  }
  handleSubmit = async (event: any) => {
    event.preventDefault();
    // clears previous results if there are any
    await this.setState({
      contactResults: [],
      calendarResults: [],
      slackResults: []
    });
    Contacts.forEach(contact => {
      contact.matching_terms.forEach(term => {
        if (
          this.state.value.includes(term) &&
          !this.state.contactResults.some(result => result === contact)
        ) {
          // add to search results
          const newResults = this.state.contactResults;
          newResults.push(contact);
          this.setState({ contactResults: newResults });
        }
      });
    });
    Calendars.forEach(calendar => {
      calendar.matching_terms.forEach(term => {
        if (
          this.state.value.includes(term) &&
          !this.state.calendarResults.some(result => result === calendar)
        ) {
          // add to search results
          const newResults = this.state.calendarResults;
          newResults.push(calendar);
          this.setState({ calendarResults: newResults });
        }
      });
    });
    SlackMessages.forEach(message => {
      message.matching_terms.forEach(term => {
        if (
          this.state.value.includes(term) &&
          !this.state.slackResults.some(result => result === message)
        ) {
          // add to search results
          const newResults = this.state.slackResults;
          newResults.push(message);
          this.setState({ slackResults: newResults });
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
          <Button
            type="submit"
            variant="contained"
            onClick={this.handleSubmit}
            disabled={!this.state.value}
          >
            Search
          </Button>
        </form>
        {this.state.contactResults.length > 0 && (
          <div>
            <h1>Contact Results</h1>
            <ContactSearchResults
              results={this.state.contactResults}
            ></ContactSearchResults>
          </div>
        )}
        {this.state.calendarResults.length > 0 && (
          <div>
            <h1>Calendar Results</h1>
            <CalendarSearchResults
              results={this.state.calendarResults}
            ></CalendarSearchResults>
          </div>
        )}
        {this.state.slackResults.length > 0 && (
          <div>
            <h1>Slack Results</h1>
            <SlackMessageSearchResults
              results={this.state.slackResults}
            ></SlackMessageSearchResults>
          </div>
        )}
      </div>
    );
  }
}
