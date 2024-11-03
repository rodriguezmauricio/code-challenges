/* Challenge #24: Track Book Loans in a Library
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of loan records, 
where each record is an object containing a book (string) 
and a borrower (string), and returns a Map where each key 
is a book title, and each value is an array of borrower names.

Requirements:

Define a function called trackBookLoans.
It should take an array of objects, each with book and borrower properties.
Return a Map where each key is a book title, and the value is an array of borrower names. */

interface IbookLoans {
    book: string;
    borrower: string;
}

function trackBookLoans(loanBooks: IbookLoans[]): Map<string, string[]> {
    const booksLoansMap = new Map<string, string[]>();

    loanBooks.forEach((book) => {
        if (booksLoansMap.has(book.book)) {
            booksLoansMap.set(book.book, [...booksLoansMap.get(book.book)!, book.borrower]);
        } else {
            booksLoansMap.set(book.book, [book.borrower]);
        }
    });

    return booksLoansMap;
}

console.log(
    trackBookLoans([
        { book: "1984", borrower: "Alice" },
        { book: "To Kill a Mockingbird", borrower: "Bob" },
        { book: "1984", borrower: "Charlie" },
    ])
);
