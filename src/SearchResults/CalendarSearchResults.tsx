import React, { Component } from "react";
import { Calendar } from "../models/SearchObject";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./SearchResults.css";

export class CalendarSearchResults extends Component<
  { results: Calendar[] },
  {}
> {
  render() {
    const resultName = this.props.results.map(result => {
      const invitees: string[] = result.invitees.split(" ");
      const key: string = `${result.id}_${result.title}`;
      return (
        <div className="search-card" key={key}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {result.title}
              </Typography>
              <Typography variant="h5" component="h2">
                {result.date}
              </Typography>
              <Typography color="textSecondary">
                Invitees:{" "}
                {invitees.map(invitee => {
                  return (
                    <span className="invitee" key={invitee}>
                      {invitee}{" "}
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
