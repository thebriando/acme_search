import React, { Component } from "react";
import {
  Contact,
  Calendar,
  SlackMessage,
  Dropbox,
  Tweet
} from "../models/SearchObject";
import "./SearchResults.css";
import { ContactSearchResults } from "./ContactSearchResults";
import { CalendarSearchResults } from "./CalendarSearchResults";
import { SlackMessageSearchResults } from "./SlackMessageSearchResults";
import { TweetSearchResults } from "./TweetSearchResults";
import { DropboxSearchResults } from "./DropboxSearchResults";

export class SearchResults extends Component<
  {
    contactResults: Contact[];
    calendarResults: Calendar[];
    slackResults: SlackMessage[];
    dropboxResults: Dropbox[];
    tweetResults: Tweet[];
  },
  {}
> {
  render() {
    return (
      <div>
        {this.props.contactResults.length > 0 && (
          <div>
            <h1>Contact Results</h1>
            <ContactSearchResults
              results={this.props.contactResults}
            ></ContactSearchResults>
          </div>
        )}
        {this.props.calendarResults.length > 0 && (
          <div>
            <h1>Calendar Results</h1>
            <CalendarSearchResults
              results={this.props.calendarResults}
            ></CalendarSearchResults>
          </div>
        )}
        {this.props.slackResults.length > 0 && (
          <div>
            <h1>Slack Results</h1>
            <SlackMessageSearchResults
              results={this.props.slackResults}
            ></SlackMessageSearchResults>
          </div>
        )}
        {this.props.dropboxResults.length > 0 && (
          <div>
            <h1>Dropbox Results</h1>
            <DropboxSearchResults
              results={this.props.dropboxResults}
            ></DropboxSearchResults>
          </div>
        )}
        {this.props.tweetResults.length > 0 && (
          <div>
            <h1>Twitter Results</h1>
            <TweetSearchResults
              results={this.props.tweetResults}
            ></TweetSearchResults>
          </div>
        )}
      </div>
    );
  }
}
