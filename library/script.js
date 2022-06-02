let myLibrary = [];
let btnAdd = document.getElementById('add');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function() {
    //     return(`${title} by ${author}, ${pages} pages, ${read}`)
    // }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

// Create new book
let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet")
let book2 = new Book("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", 450, "Not read yet")
let book3 = new Book("Game of Thrones", "George R Martin", 395, "Not read yet")

// console.log(book1.info())

console.log(myLibrary)

// Add books to library
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

// Function to create table
function createLibraryTable() {
    // Select table
    let myTable = document.getElementById('table');

    // Creating header
    let headers = ['Title', 'Author', 'Pages', 'Read']

    // Declare table and headerRow
    let table = document.createElement('table');
    table.setAttribute("id", "displayTable")
    let headerRow = document.createElement('tr');

    // Creating header table
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });


    table.appendChild(headerRow);

    // Create body of table
    myLibrary.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });
        // Delete button
        delBook = row.appendChild(document.createElement('td'))
        delBook.innerHTML='<input type="button" name="del" value="Delete" onclick="deleteBook(this);" class="btn btn-danger">'

        // Update read
        upRead = row.appendChild(document.createElement('td'))
        upRead.innerHTML='<input type="button" name="upRead" value="Update Read Status" onclick="changeReadStatus(this);" class="btn update">'

        table.appendChild(row);
        
    });

    // Create table
    myTable.appendChild(table);
    
}

// Generate table
createLibraryTable();

// Add new book
btnAdd.addEventListener('click', () => {
    let displayTable = document.getElementById("displayTable");
    let parent = document.getElementById("table")

    parent.removeChild(displayTable)

    title = document.getElementsByName("title")
    author = document.getElementsByName("author")
    pages = document.getElementsByName("pages")
    read = document.getElementsByName("read")

    let book = new Book(title[0].value, author[0].value, pages[0].value, read[0].value)

    addBookToLibrary(book);

    createLibraryTable();
})

function deleteBook(book) {
    // Select title (lol this code)
    title = book.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
    
    // Find index of selected row in myLibrary
    const indexOfObject = myLibrary.findIndex(object => {
        return object.title === title;
    });

    // Remove from myLibrary
    myLibrary.splice(indexOfObject, 1);
    console.log(myLibrary);

    let b = book.parentNode.parentNode
    b.parentNode.removeChild(b);
}

function changeReadStatus(book) {
    read = book.parentNode.previousElementSibling.previousElementSibling

    if(read.innerHTML === "Read") {
        read.innerHTML = "Not read yet"

    } else {
        read.innerHTML = "Read"
    }
    
    // Select title (lol this code)
    title = book.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML

    // Find index of selected row in myLibrary
    let indexOfObject = myLibrary.findIndex(object => {
        return object.title === title;
    });

    myLibrary[indexOfObject].read = read.innerHTML
}