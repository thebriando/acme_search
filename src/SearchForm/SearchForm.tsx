import React, { Component } from "react";
import "../App.css";
import { TextField, Button } from "@material-ui/core/";
import { Contacts } from "../data/Contacts";
import { Contact } from "../models/Contact";
import { ContactSearchResults } from "../SearchResults/ContactSearchResults";
import { CalendarSearchResults } from "../SearchResults/CalendarSearchResults";
import { Calendars } from "../data/Calendars";
import { Calendar } from "../models/Calendar";
export class SearchForm extends Component<
  {},
  { value: string; contactResults: Contact[]; calendarResults: Calendar[] }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: "",
      contactResults: [],
      calendarResults: []
    };
  }
  handleSubmit = (event: any) => {
    event.preventDefault();
    // clears previous results if there are any
    this.setState({ contactResults: [], calendarResults: [] });
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
      </div>
    );
  }
}
