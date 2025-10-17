
const books = [
    {
        title: 'book1', genre: 'fiction', published: '1999'
    },
    {
        title: 'book2', genre: 'non fiction', published: '1999'
    },
    {
        title: 'book3', genre: 'fiction', published: '1989'
    },
    {
        title: 'book4', genre: 'non fiction', published: '1979'
    },
    {
        title: 'book5', genre: 'fiction', published: '1998'
    }
];

// const userBooks = books.filter((bk) => bk.genre === 'fiction')
// const userBooks = books.filter((bk) => bk.published >= '1995')
const userBooks = books.filter((bk) => {
    return bk.published >= '1995' && bk.genre === 'fiction'
})

console.log(userBooks);
