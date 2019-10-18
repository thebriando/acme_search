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
export interface Dropbox extends SearchObject {
  path: string;
  title: string;
  shared_with?: string[];
  matching_terms: string[];
  created: string;
}

