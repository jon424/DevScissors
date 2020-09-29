CREATE DATABASE dev_scissors;

CREATE TABLE card (
id SERIAL PRIMARY KEY,
topic varchar(500),
card_title varchar(500),
card_subtitle varchar(500),
card_gif varchar(500),
card_link varchar(500)
);

INSERT INTO card(topic, card_title, card_subtitle, card_gif, card_link)
VALUES ('react', 'React API Fetching/Posting', 'Fetch and Post data with React hooks!', 'https://dl.dropbox.com/s/nlfcse0xer6me9x/api-hooks-example.gif', 'https://www.google.com');

INSERT INTO card(topic, card_title, card_subtitle, card_gif, card_link)
VALUES ('react', 'More React', 'Yes, More React!', 'https://dl.dropbox.com/s/nlfcse0xer6me9x/api-hooks-example.gif', 'https://github.com/jon424/React-API-HTTP-Methods-with-Hooks-/blob/master/React%20API%20calls%20using%20hooks.md');


INSERT INTO card(topic, card_title, card_subtitle, card_gif, card_link)
VALUES ('html-css', 'TEST', 'Fetch aASDFASDFASDFASDFASFDADSF!', 'https://dl.dropbox.com/s/nlfcse0xer6me9x/api-hooks-example.gif', 'https://github.com/jon424/React-API-HTTP-Methods-with-Hooks-/blob/master/React%20API%20calls%20using%20hooks.md');





