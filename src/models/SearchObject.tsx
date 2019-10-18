export interface SearchObject {
  id: string;
  matching_terms: string[];
}

export interface Contact extends SearchObject{
  name: string;
  company: string;
  emails: string[];
  phones: string[];
  last_contact: string;
}

export interface Calendar extends SearchObject {
  title: string;
  invitees: string;
  date: string;
}

export interface SlackMessage extends SearchObject{
  channel: string;
  author: string;
  message: string;
  timestamp: string;
}

