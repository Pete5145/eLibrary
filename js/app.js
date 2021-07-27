// 1. Select all elements of interest

let btn = document.getElementById("btn");
let infoBox = document.getElementById("infoBox");
let txtTitle = document.getElementById("txtTitle");
let txtAuthor= document.getElementById("txtAuthor");
let txtISBN= document.getElementById("txtISBN");
let table= document.getElementById("table");
let btn2 = document.getElementById("btn2");
//2. Bind btn to an event listener.

btn.addEventListener("click", addBook);
btn2.addEventListener("click", displayBook);



function displayBook() {
    window.open("samplebook.html", "Half of a Yellow Sun", "Width=400", "height=600, srollbars=yes");
}










function addBook() {
    let title = txtTitle.value;    
    let author = txtAuthor.value;    
    let isbn = txtISBN.value;   
    
    if (title == "" || author == "" || isbn == "") {
        infoBox.innerHTML = "Empty field(s) not allowed! Please try again.";
        return;
    }

    let bookObj = new Book(title, author, isbn);

    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${bookObj.title}</td><td>${bookObj.author}</td><td>${bookObj.isbn}</td><td><button class="btn btn-danger">Delete</button></td>`

    table.appendChild(tr);
     
    infoBox.innerHTML = "New book added successfully!";
    infoBox.setAttribute("class", "text-success");

    setTimeout(() => {
        infoBox.style.display = "none";
    }, 3000);
}


// Constructor function - It is used to construct object of type book.
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}