import React, { Component } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./SearchResults.css";
import { SlackMessage } from "../models/SearchObject";

export class SlackMessageSearchResults extends Component<
  { results: SlackMessage[] },
  {}
> {
  render() {
    const resultName = this.props.results.map(result => {
      return (
        <div className="search-card" key={result.id}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {result.channel}
              </Typography>
              <Typography variant="h5" component="h2">
                {result.author}
              </Typography>
              <Typography color="textSecondary">
                {result.timestamp}
              </Typography>
                {result.message}
            </CardContent>
          </Card>
        </div>
      );
    });
    return resultName;
  }
}
