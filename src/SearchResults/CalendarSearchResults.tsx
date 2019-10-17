import React, { Component } from "react";
import { Calendar } from "../models/Calendar";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./ContactSearchResults.css";

export class CalendarSearchResults extends Component<
  { results: Calendar[] },
  {}
> {
  render() {
    const resultName = this.props.results.map(result => {
      const invitees = result.invitees.split(" ");
      return (
        <div className="search-card" key={result.id}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {result.title}
              </Typography>
              <Typography variant="h5" component="h2">
                {result.date}
              </Typography>
              <Typography color="textSecondary">
                {invitees.map(email => {
                  return (
                    <span key={email}>
                      {email}
                    </span>
                  );
                })}
              </Typography>
              {/* <Typography variant="body2" component="p">
                {result.phones.map(phone => {
                  return <span key={phone}>{phone}</span>;
                })}
              </Typography> */}
            </CardContent>
          </Card>
        </div>
      );
    });
    return resultName;
  }
}
