import React, { Component } from "react";
import { Contact } from "../models/Contact";
import {
  Card,
  CardContent,
  Typography
} from "@material-ui/core";

export class SearchResults extends Component<{ results: Contact[] }, {}> {
  render() {
    const resultName = this.props.results.map(result => {
      return (
        <div key={result.id}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {result.name}
              </Typography>
              <Typography variant="h5" component="h2">
                {result.company}
              </Typography>
              <Typography color="textSecondary">
                {result.emails.map(email => {
                  return <span key={email}>{email}</span>;
                })}
              </Typography>
              <Typography variant="body2" component="p">
                {result.phones.map(phone => {
                  return <span key={phone}>{phone}</span>;
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
