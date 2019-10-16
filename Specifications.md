Alice is about to head into a meeting with Acme Co.. She visits https://foo.com which has a search box
where she types "Acme Co." and gets content from various data sources (listed below) relevant to the
upcoming meeting.

Data sources (see attached `.json` file for schema/data):

- Contacts
- Dropbox file
- Slack message/thread
- Calendar entry
- Twitter

Each item has a `matching_terms` field, you could treat that as the set of query terms which will retrieve that item (so you don't have to bother with actually searching content).

Feel free to edit the schema, add or remove entries etc. The attached files are just a starting point. For example, if you'd like to add more random tweets to demonstrate scrolling updates, feel free to generate random ones. The ordering of search results is unspecified, feel free to do whatever you feel like. Do share any thoughts you have about ranking though.

# Requirements

Build a search UI that supports searching over the items contained in the json files. There should be a search box where the user can type, press a button, and see content that matches the search query.

Additionally, please pick one of these "advanced" features to implement:

- Dynamically update results as new data becomes available
- Some kind of user interaction with search results (pin, delete, tagging)
- Analytics (track user clicks, other behavior on page)
- Another product feature that you want to design and implement, and feel shows a similar level of complexity. Feel free to be creative!

# Other things to consider

Some questions to seed your thoughts with. These are not a set of required features, just something to get you started thinking.

- How are results from varied sources displayed?
- How are dynamically updating data sources like Twitter/Slack handled?
- How would we track and log user engagement?
