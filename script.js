const books = [
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Moby Dick", author: "Herman Melville" },
];

const borrowHistory = [
    { title: "1984", borrowDate: "2024-09-01", returnDate: "2024-09-15" },
    { title: "The Hobbit", borrowDate: "2024-09-10", returnDate: "2024-09-24" }
];

// Search Function
function searchBooks() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const results = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );

    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = results.map(book => `<li>${book.title} by ${book.author}</li>`).join('');
}

// Display Borrowing History
function displayBorrowHistory() {
    const borrowTable = document.getElementById("borrowTable");
    borrowTable.innerHTML = borrowHistory.map(record => `
        <tr>
            <td>${record.title}</td>
            <td>${record.borrowDate}</td>
            <td>${record.returnDate}</td>
        </tr>
    `).join('');
}

// Initialize the page with borrow history
displayBorrowHistory();
