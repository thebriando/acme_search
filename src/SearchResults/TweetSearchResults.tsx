import React, { Component } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./SearchResults.css";
import { Tweet } from "../models/SearchObject";

export class TweetSearchResults extends Component<
  { results: Tweet[] },
  {}
> {
  render() {
    const resultName = this.props.results.map(result => {
      return (
        <div className="search-card" key={result.timestamp}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {result.timestamp}
              </Typography>
              <Typography variant="h5" component="h2">
                {result.user}
              </Typography>
              <Typography color="textSecondary">
                {result.message}
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    });
    return resultName;
  }
}
