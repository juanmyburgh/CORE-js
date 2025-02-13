'use strict';

const books = [
    {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        publisher: 'Addison-Wesley Professional',
        publicationDate: '2011-03-24',
        edition: 4,
        keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
        pages: 976,
        format: 'hardcover',
        ISBN: '9780321573513',
        language: 'English',
        programmingLanguage: 'Java',
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13
            }
        },
        highlighted: true
    },
    {
        title: 'Structure and Interpretation of Computer Programs',
        author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
        publisher: 'The MIT Press',
        publicationDate: '2022-04-12',
        edition: 2,
        keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
        pages: 640,
        format: 'paperback',
        ISBN: '9780262543231',
        language: 'English',
        programmingLanguage: 'JavaScript',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.36,
                ratingsCount: 14,
                reviewsCount: 3,
                fiveStarRatingCount: 8,
                oneStarRatingCount: 0
            }
        },
        highlighted: true
    },
    {
        title: 'Computer Systems: A Programmer\'s Perspective',
        author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
        publisher: 'Prentice Hall',
        publicationDate: '2002-01-01',
        edition: 1,
        keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
        pages: 978,
        format: 'hardcover',
        ISBN: '9780130340740',
        language: 'English',
        programmingLanguage: 'C',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 1010,
                reviewsCount: 57,
                fiveStarRatingCount: 638,
                oneStarRatingCount: 16
            }
        },
        highlighted: true
    },
    {
        title: 'Operating System Concepts',
        author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
        publisher: 'John Wiley & Sons',
        publicationDate: '2004-12-14',
        edition: 10,
        keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
        pages: 921,
        format: 'hardcover',
        ISBN: '9780471694663',
        language: 'English',
        programmingLanguage: 'C, Java',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 3.9,
                ratingsCount: 2131,
                reviewsCount: 114,
                fiveStarRatingCount: 728,
                oneStarRatingCount: 65
            }
        }
    },
    {
        title: 'Engineering Mathematics',
        author: ['K.A. Stroud', 'Dexter J. Booth'],
        publisher: 'Palgrave',
        publicationDate: '2007-01-01',
        edition: 14,
        keywords: ['mathematics', 'engineering'],
        pages: 1288,
        format: 'paperback',
        ISBN: '9781403942463',
        language: 'English',
        programmingLanguage: null,
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.35,
                ratingsCount: 370,
                reviewsCount: 18,
                fiveStarRatingCount: 211,
                oneStarRatingCount: 6
            }
        },
        highlighted: true
    },
    {
        title: 'The Personal MBA: Master the Art of Business',
        author: 'Josh Kaufman',
        publisher: 'Portfolio',
        publicationDate: '2010-12-30',
        keywords: ['business'],
        pages: 416,
        format: 'hardcover',
        ISBN: '9781591843528',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.11,
                ratingsCount: 40119,
                reviewsCount: 1351,
                fiveStarRatingCount: 18033,
                oneStarRatingCount: 1090
            }
        }
    },
    {
        title: 'Crafting Interpreters',
        author: 'Robert Nystrom',
        publisher: 'Genever Benning',
        publicationDate: '2021-07-28',
        keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
        pages: 865,
        format: 'paperback',
        ISBN: '9780990582939',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.7,
                ratingsCount: 253,
                reviewsCount: 23,
                fiveStarRatingCount: 193,
                oneStarRatingCount: 0
            }
        }
    },
    {
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        publisher: 'Grand Central Publishing',
        publicationDate: '2016-01-05',
        edition: 1,
        keywords: ['work', 'focus', 'personal development', 'business'],
        pages: 296,
        format: 'hardcover',
        ISBN: '9781455586691',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.19,
                ratingsCount: 144584,
                reviewsCount: 11598,
                fiveStarRatingCount: 63405,
                oneStarRatingCount: 1808
            }
        },
        highlighted: true
    }
];
/*
// -----------------------------------------------------------------------
// Assignments

// Destructuring Arrays 1.1
const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);


// Destructuring Arrays 1.2
const [, , thirdBook] = books;
// console.log(thirdBook);


// Destructuring Arrays 1.3
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingCount]] = ratings;
// console.log(rating, ratingCount);

// Destructuring Arrays 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);


// -----------------------------------------------------------------------
// Destructuring Objects 2.1

const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// Destructuring Objects 2.2
const { keywords: tags } = books[0];
// console.log(tags);

// Destructuring Objects 2.3
const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);


// Destructuring Objects 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
// const mut = { bookTitle: books[0].title, bookAuthor: books[0].author };
({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);


// Destructuring Objects 2.5
const { thirdParty: { goodreads: { rating: bookRating } } } = books[0];
console.log(bookRating);

// Destructuring Objects 2.6
const printBookInfo = function (obj) {
    const { title, author, year = 'Year Unknown' } = obj;
    return console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

printBookInfo({ title: 'Structure and Interpretation of Computer Programs', author: 'Gerald Jay Sussman', year: '2022' });


// -----------------------------------------------------------------------
// The Spread Operator 3.1
// spread operator ...

const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);


// The Spread Operator 3.2
const spellWord = function (word) {
    return console.log(...word);
};
spellWord('JavaScript');


// -----------------------------------------------------------------------
// Rest Pattern and Parameters 4.1
const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// Rest Pattern and Parameters 4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// Rest Pattern and Parameters 4.3
const printBookAuthorsCount = function (title, ...authors) {
    return console.log(`The book "${title}" has ${authors.length} authors.`)
};
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');


// -----------------------------------------------------------------------
// Short Circuiting (&& and ||) 5.1
const hasExamplesInJava = function (bookObj) {
    return console.log(bookObj.programmingLanguage === 'Java' || 'no data available');
}
hasExamplesInJava(books[0]);
hasExamplesInJava(books[1]);

// Short Circuiting (&& and ||) 5.2
for (let i = 0; i < books.length; i++) {
    books[i].onlineContent && console.log(`"${books[i].title}" provides online content`);
};


// -----------------------------------------------------------------------
// Nullish Coalescing Operator (??) 6.1
for (let i = 0; i < books.length; i++) {
    books[i].onlineContent ?? console.log(`"${books[i].title}" provides no data about it's online content`);
};


// -----------------------------------------------------------------------
// Logical Assignment Operators 7.1
// for (let i = 0; i < books.length; i++) {
//     console.log(`Before: ${books[i].edition}`);

//     books[i].edition ||= 1;

//     console.log(`After: ${books[i].edition}`);
// };

// Logical Assignment Operators 7.2
for (let i = 0; i < books.length; i++) {
    // console.log(`${i} Before: ${books[i].highlighted}`);

    // books[i].highlighted &&= (books[i].thirdParty.goodreads.rating < 4.2);
    // books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
    // note this third solution also gives it a value if it was undefined
    books[i].highlighted ??= !(books[i].thirdParty.goodreads.rating < 4.2);

    console.log(`"${books[i].title}" - Highlighted: ${books[i].highlighted}`);
};


// -----------------------------------------------------------------------
// For-of Loop 8.1
let pageSum = 0;
for (const book of books) { pageSum += book.pages };
// console.log(pageSum);

// For-of Loop 8.2
const allAuthors = [];
for (const book of books) {
    typeof book.author === 'string' ? allAuthors.push(book.author) : allAuthors.push(...book.author);
};
console.log(allAuthors);

// can also use nested loops??
// for (const book of books) {
//   if (typeof book.author === 'string') {
//     allAuthors.push(book.author)
//   } else {
//     for (const author of book.author) {
//       allAuthors.push(author);
//     }
//   }
// }

// For-of Loop 8.3
for (const [i, author] of allAuthors.entries()) {
    console.log(`${i + 1}. ${author}`);
};



// -----------------------------------------------------------------------
// Enhanced Object Literals 9.1

const bookData = [
    ['title', 'Computer Networking: A Top-Down Approach'],
    ['author', ['James F. Kurose', 'Keith W. Ross']],
    ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
    [bookData[0][0]]: bookData[0][1],
    [bookData[1][0]]: bookData[1][1],
    [bookData[2][0]]: bookData[2][1]
};
console.log(newBook);

// Enhanced Object Literals 9.2
const pages = 880;

const newBook2 = {
    title: 'The C Programming Language',
    author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
    pages   //note this is the shorthand method
}
console.log(newBook2);

// -----------------------------------------------------------------------
// Optional Chaining 10.1

const getFirstKeyword = function (book) {
    return book.keywords?.[0];
};
console.log(getFirstKeyword(books[0]));
console.log(getFirstKeyword(newBook2));


// -----------------------------------------------------------------------
// Looping Objects: Object Keys, Values and Entries 11.1
const entries = [];
for (const key of Object.keys(books[0].thirdParty.goodreads)) {
    entries.push([key]);
};
// console.log(entries);

// Looping Objects: Object Keys, Values and Entries 11.2
for (const [index, value] of Object.entries(books[0].thirdParty.goodreads).entries()) {
    entries[index].push(value);
}
// console.log(entries)

// Looping Objects: Object Keys, Values and Entries 11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);


// Looping Objects: Object Keys, Values and Entries 11.4
console.log(entries);
console.log(entries2);



// -----------------------------------------------------------------------
// Sets 12.1
const allKeywords = [];
for (const book of books) {
    allKeywords.push(...book.keywords);
};
console.log(allKeywords);

// Sets 12.2
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

// Sets 12.3
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log(uniqueKeywords);

// Sets 12.4
uniqueKeywords.delete('business');
console.log(uniqueKeywords);

// Sets 12.5
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

// Sets 12.6
uniqueKeywords.clear();
console.log(uniqueKeywords);


// -----------------------------------------------------------------------
// Maps: Fundamentals 13.1
const bookMap = new Map([
    ['title', 'Clean Code'],
    ['author', 'Robert C. Martin']
]);
console.log(bookMap);

// Maps: Fundamentals 13.2
bookMap.set('pages', 464);
console.log(bookMap);


// Maps: Fundamentals 13.3
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);


// Maps: Fundamentals 13.4
console.log(bookMap.size);


// Maps: Fundamentals 13.5
console.log(bookMap.has('author') ? 'The author of the book is known' : 'No author recorded');
// if (bookMap.has('author')) console.log('The author is known');


// -----------------------------------------------------------------------
// Maps: Iteration 14.1
console.log(Object.entries(books));
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

// Maps: Iteration 14.2
for (const [key, value] of firstBookMap) {
    if (typeof key === 'number') console.log(key);
};



// -----------------------------------------------------------------------
// Working with Strings pt1 15.1
console.log(books[0].ISBN[6], books[0].ISBN[4], books[0].ISBN[9], books[0].ISBN[8]);

// Working with Strings 15.2
const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

// Working with Strings 15.3
console.log(quote.slice(quote.indexOf('boxing')));

// Working with Strings 15.4
const isContributor = function (author) {
    console.log(author.lastIndexOf('(Contributor)') !== -1); // need to use lastindexof in case included in naem
};
isContributor('Julie Sussman (Contributor)');
isContributor('Robert Sedgewick');


// -----------------------------------------------------------------------
// Working with Strings pt2 16.1
const normaliseAuthorName = function (name) {
    // normalise input to all lowercase without extra spaces
    name = name.toLowerCase().trim();

    // get first section of string until first space
    const firstName = name.slice(0, name.indexOf(' ')).trim();

    // get string after first space until last space
    let lastName = name.slice(name.indexOf(' ') + 1, name.lastIndexOf(' ')).trim();

    const capitalisedFirstName = firstName[0].toUpperCase() + firstName.slice(1);
    const capitalisedLastName = lastName[0].toUpperCase() + lastName.slice(1);

    return capitalisedFirstName + ' ' + capitalisedLastName;
};
// console.log(normaliseAuthorName('  JuliE     suSsMan    (ContribuTorrr)    '));


// Working with Strings 16.2
const newBookTitle = books[1].title.replace('Programs', 'Software');
// console.log(newBookTitle);


// Working with Strings 16.3
const logBookTheme = function (title) {
    title = title.toLowerCase().trim();
    console.log(title);

    if (title.startsWith('computer')) {
        console.log('This book is about computers');
    } else if (title.includes('algorithms') && title.includes('structures')) {
        console.log('This book is about algorithms and data structures');
    } else if (
        title.endsWith('system') || title.endsWith('systems') && !title.includes('operating')
    ) {
        console.log('This book is about some systems, but definitely not about operating systems');
    };
};
for (const book of books) {
    logBookTheme(book.title)
}

*/
// -----------------------------------------------------------------------
// Working with Strings pt3 17.1

const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

const logBookCategories = function (categoryStr) {
    const categories = categoryStr.split(';');

    for (const category of categories) {
        console.log(category);
    }
};

// logBookCategories(bookCategories);

// Working with Strings pt3 17.2
const getKeywordsAsString = function (bookArr) {
    const keywords = [];

    for (const book of books) {
        keywords.push(...book.keywords);
    }
    const uniqueKeywords = [...new Set(keywords)];

    return uniqueKeywords.join(';')
};
// console.log(getKeywordsAsString(books));


// Working with Strings pt3 17.3
const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];

const logBookChapters = function (bookChapters) {
    // could also just use chapter below, then use [0] and [1] to refer to index
    for (const [chapter, pages] of bookChapters) {
        console.log(chapter.padEnd(20, '_') + ' ' + pages);
    }
};
logBookChapters(bookChapters);