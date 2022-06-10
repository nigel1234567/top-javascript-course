let btnAdd = document.getElementById('add');

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        // this.info = function() {
        //     return(`${title} by ${author}, ${pages} pages, ${read}`)
        // }
    }
}

class Library {
    constructor() {
        this.myLibrary = []
    }

    createLibraryTable() {
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
        this.myLibrary.forEach(emp => {
            let row = document.createElement('tr');
    
            Object.values(emp).forEach(text => {
                let cell = document.createElement('td');
                let textNode = document.createTextNode(text);
                cell.appendChild(textNode);
                row.appendChild(cell);
            });
            // Delete button
            let delBook = row.appendChild(document.createElement('td'))
            delBook.innerHTML='<input type="button" name="del" value="Delete" onclick="library.deleteBook(this);" class="btn btn-danger">'
    
            // Update read
            let upRead = row.appendChild(document.createElement('td'))
            upRead.innerHTML='<input type="button" name="upRead" value="Update Read Status" onclick="library.changeReadStatus(this);" class="btn update">'
    
            table.appendChild(row);
            
        });
    
        // Create table
        myTable.appendChild(table);
        
    }

    addBookToLibrary(book) {
        this.myLibrary.push(book)
    }

    deleteBook(book) {
        // Select title
        let title = book.parentNode.childNodes[0].innerHTML
        
        // Find index of selected row in myLibrary
        const indexOfObject = this.myLibrary.findIndex(object => {
            return object.title === title;
        });
    
        // Remove from myLibrary
        this.myLibrary.splice(indexOfObject, 1);
        console.log(this.myLibrary);
    
        let b = book.parentNode.parentNode
        b.parentNode.removeChild(b);
    }

    changeReadStatus(book) {
        let read = book.parentNode.previousElementSibling.previousElementSibling
    
        if(read.innerHTML === "Read") {
            read.innerHTML = "Not read yet"
    
        } else {
            read.innerHTML = "Read"
        }
        
        // Select title
        let title = book.parentNode.childNodes[0].innerHTML
    
        // Find index of selected row in myLibrary
        let indexOfObject = this.myLibrary.findIndex(object => {
            return object.title === title;
        });
    
    }
}




// Create new book
let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet")
let book2 = new Book("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", 450, "Not read yet")
let book3 = new Book("Game of Thrones", "George R Martin", 395, "Not read yet")

// console.log(book1.info())

// New library
library = new Library([]);

// Add books to library
library.addBookToLibrary(book1);
library.addBookToLibrary(book2);
library.addBookToLibrary(book3);

// Function to create table


// Generate table
library.createLibraryTable();

// Add new book
btnAdd.addEventListener('click', () => {
    let displayTable = document.getElementById("displayTable");
    let parent = document.getElementById("table")

    
    title = document.getElementsByName("title")
    author = document.getElementsByName("author")
    pages = document.getElementsByName("pages")
    read = document.getElementsByName("read")
    
    // Set Validity
    let allInputs = document.getElementsByClassName("add")
    for (var i = 0; i < allInputs.length; i++) {
        console.log(allInputs[i])
        allInputs[i].addEventListener('input', (e) => {
            e.setCustomValidity('');
            e.checkValidity();
        })
        
    }
    // Only add to table if all valid
    console.log(allInputs[0].checkValidity() == true && allInputs[1].checkValidity() == true && allInputs[2].checkValidity() == true)
    if (allInputs[0].checkValidity() == true && allInputs[1].checkValidity() == true && allInputs[2].checkValidity() == true) {
        parent.removeChild(displayTable)
        let book = new Book(title[0].value, author[0].value, pages[0].value, read[0].value)
    
        library.addBookToLibrary(book);
        
        library.createLibraryTable();
    }

})



