# Jabber Standard English module

> Standard Engish module for the Jabber Generator

## Use with Jabber Generator

First install this pacakge, along with the [Jabber Generator](https://www.npmjs.com/package/jabber-generator):

```bash
npm install --save jabber-generator jabber-standard-english
```

Then include Jabber Standard English in your generator, either by itself or as a module:

```javascript
const JabberGenerator = require('jabber-generator');
const jabberStandardEnglish = require('jabber-standard-english');

const myGenerator = new JabberGenerator(jabberStandardEnglish);

// OR

const myGenerator = new JabberGenerator({
    modules: [jabberStandardEnglish],
});

// OR

const myGenerator = new JabberGenerator();
myGenerator.addModule(jabberStandardEnglish);
```

## What's Included

Elements: Over 10,000 individual word elements intended to be pronouncible by English-speaking audiences.

Filters: Several filters aimed at reducing difficult sound combinations for English-speaking audiences.

Transforms: Several transforms aimed at improving readability for English-speaking audiences.