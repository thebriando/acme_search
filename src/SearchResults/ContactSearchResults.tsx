import React, { Component } from "react";
import { Contact } from "../models/SearchObject";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./SearchResults.css";

export class ContactSearchResults extends Component<
  { results: Contact[] },
  {}
> {
  render() {
    const resultName = this.props.results.map(result => {
      return (
        <div className="search-card" key={result.id}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {result.company}
              </Typography>
              <Typography variant="h5" component="h2">
                {result.name}
              </Typography>
              <Typography color="textSecondary">
                {result.emails.map(email => {
                  return (
                    <span className="email" key={email}>
                      {email}
                    </span>
                  );
                })}
              </Typography>
              <Typography variant="body2" component="p">
                {result.phones.map(phone => {
                  return (
                    <span className="phone" key={phone}>
                      {phone}
                    </span>
                  );
                })}
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    });
    return resultName;
  }
}
