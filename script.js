// class bookConstuctor {
//     constructor(title, author, release, publisher, id) {
//         this.title = title;
//         this.author = author;
//         this.release = release;
//         this.publisher = publisher;
//         this.id = id;
//     }
// }

// let books = new Array();


// books[books.length] = new bookConstuctor(`To Build a Fire`, `Jack London`, 1908, `Simon & Schuster`, books.length);
// books[books.length] = new bookConstuctor(`Den Lille Pige med Svovlstikkerne`, `Hans Christian Andersen`, 1845, `Greg`, books.length);
// books[books.length] = new bookConstuctor(`Latarnik`, `Henryk Sienkiewicz`, 1881, `Greg`, books.length);
// books[books.length] = new bookConstuctor(`Podręcznik wojownika`, `Jelley Craig`, 2021, `Harper Collins Polska`, books.length);
// books[books.length] = new bookConstuctor(`Podręcznik budowania`, `Jelley Craig`, 2021, `Harper Collins Polska`, books.length);


// const sortTitle = () => {
    
//     let booksToSort = document.getElementsByClassName(`book`);
//     let allBooks = Array.from(booksToSort);

//     let booksArea = document.getElementById(`booksArea`);

//     function byTitle( a, b ) {
//         if ( a.children[0].innerText < b.children[0].innerText ){
//             return -1;
//         }
//         if ( a.children[0].innerText > b.children[0].innerText ){
//             return 1;
//         }
//         return 0;
//     }
      
//     allBooks.sort( byTitle );

    
//     for (let i = 0; i < allBooks.length; i++) {
//         booksArea.appendChild(allBooks[i]);

//         allBooks[i].removeAttribute(`id`);

//     }

//     allBooks[0].setAttribute(`id` , `bookMain`);
// }


// const sortAuthor = () => {
    
//     let booksToSort = document.getElementsByClassName(`book`);
//     let allBooks = Array.from(booksToSort);

//     let booksArea = document.getElementById(`booksArea`);

//     function byAuthor( a, b ) {
//         if ( a.children[1].innerText < b.children[1].innerText ){
//             return -1;
//         }
//         if ( a.children[1].innerText > b.children[1].innerText ){
//             return 1;
//         }
//         return 0;
//     }
      
//     allBooks.sort( byAuthor );

    
//     for (let i = 0; i < allBooks.length; i++) {
//         booksArea.appendChild(allBooks[i]);

//         allBooks[i].removeAttribute(`id`);

//     }

//     allBooks[0].setAttribute(`id` , `bookMain`);
// }


// const addStickyNotes = () => {

//     areaForBooks = document.getElementById(`booksArea`);
//     buttons = document.getElementById(`booksNav`);

//     books.forEach(element => {
        
//         let currentBook = document.createElement(`article`);
//         currentBook.className = `book`;


//         for (const key in element) {
//             if(key != `id`){
//                 if(key == `title`){
//                     let currentElement = document.createElement(`h2`);
//                     let currentElementText = document.createTextNode(element[key]);

//                     currentElement.appendChild(currentElementText);
//                     currentBook.appendChild(currentElement);

//                 }else{
//                     let currentElement = document.createElement(`p`);
//                     let currentElementText;

//                     switch (key) {
//                         case `author`:
//                             currentElementText = document.createTextNode(`Written by : ${element[key]}`);
//                             break;

//                         case `release`:
//                             currentElementText = document.createTextNode(`Release in : ${element[key]}`);
//                             break;

//                         case `publisher`:
//                             currentElementText = document.createTextNode(`Published by : ${element[key]}`);
//                             break;

//                         default:
//                             break;
//                     }

//                     let deg = Math.random() * (7.5 - (-7.5)) + (-7.5);
//                     currentBook.style.rotate = (deg + `deg`);

//                     currentElement.appendChild(currentElementText);
//                     currentBook.appendChild(currentElement);
//                 }
//             }
//         }

//         areaForBooks.appendChild(currentBook);


//     });

//     let initialButton = document.getElementById(`initialButton`);
//     initialButton.setAttribute(`onclick`, `sortTitle()`);
//     initialButton.className = `sortButton`;
//     initialButton.innerText = `Sort by title`;


//     let newButton = document.createElement(`button`);
//     newButton.setAttribute(`onclick`, `sortAuthor()`);
//     newButton.className = `sortButton`;
//     newButton.innerText = `Sort by author`;

//     buttons.appendChild(newButton);
// }


const init = () => {
    
    let notesToRandom = document.getElementsByClassName(`book`);

    for (let i = 0; i < notesToRandom.length; i++) {

        let deg = Math.random() * (7.5 - (-7.5)) + (-7.5);
        notesToRandom[i].style.rotate = (deg + `deg`);
        
    }

    console.log("Done");
}

init();

// Made with love and hate by winter#7704 ❤❤❤