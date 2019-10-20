import { Tweet } from "../models/SearchObject";

export const Tweets: Tweet[] = [
  {
    user: "@acmecorp",
    message: "We're hiring in Boston!",
    timestamp: "2019-02-29",
    matching_terms: ["acme", "hiring", "boston"]
  },
  {
    user: "@acmecorp",
    message: "We're no longer hiring in Timbuktu",
    timestamp: "2019-02-27",
    matching_terms: ["acme", "hiring", "timbuktu"]
  }
];
