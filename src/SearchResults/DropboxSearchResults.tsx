import React, { Component } from "react";
import { Dropbox } from "../models/SearchObject";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./SearchResults.css";

export class DropboxSearchResults extends Component<
  { results: Dropbox[] },
  {}
> {
  render() {
    const resultName = this.props.results.map(result => {
      return (
        <div className="search-card" key={result.id}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {result.title}
              </Typography>
              <Typography variant="h5" component="h2">
                {result.created}
              </Typography>
              <Typography color="textSecondary">
                {/* {result.shared_with.map(invitee => {
                  return (
                    <span key={invitee}>
                      {invitee}
                    </span>
                  );
                })} */}
              </Typography>
              <Typography variant="body2" component="p">
                {result.path}
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    });
    return resultName;
  }
}
