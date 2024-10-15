/*let book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    isRead: true,
    bookInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання:  ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`)
    }
}

 book.isRead = !book.isRead;
 book.bookInfo()
*/

let library = [
    {   title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        year: 1997,
        isRead: true},

    {   title: "The Hobbit",
        author: "J.R. R. Tolkien",
        year: 1937,
        isRead: false},

    {   title: "The 1984",
        author: "George Orwell",
        year: 1949,
        isRead: true}
]

function displayLibrary() {
    library.forEach(book => {
       console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання:  ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`)
    });
}

library.push({ title: "The Great Getsby", author: "F. Scott Fitzgerald", year: 1925, isRead: false });

library.sort((a, b) => a.year - b.year);
console.log("Відсортовані книги за роком видання: ", library);

let unreadBooks = library.filter(book => !book.isRead);
console.log("Непрочитані книги:", unreadBooks);

let tolkienBook = library.find(book => book.author === "J.R. R. Tolkien")
console.log("Книга Толкіна:", tolkienBook);

function addBookToLibrary() {
    let title = prompt("Введіть назву книги: ");
    let author = prompt("Введіть автора книги: ");
    let year = +propmt("Введіть рік видання книги: ");
    let isRead = confirm("Чи прочитана книга?");

    library.push({ title, author, year, isRead});
    displayLibrary();
}

//addBookToLibrary();

function markAsRead() {
    let title = prompt("Введіь назву книги, щоб її прочитати");
    let book = library.find(book => book.title === title);
    if (book !== undefined){
        book.isRead = true;
        printLibrary();
    } else if(book.isRead == true)
        alert('Книга уже прочитана');
    else {
        alert('Немає такої книги');
    }
}

const button1 = document.getElementById("button1");
button1.onclick = function(){
    markAsRead()};

function printLibrary() {
    const container = document.getElementById('results');
    container.innerHTML = "";
    library.forEach(book => {
        let li = document.createElement('li');
        li.textContent = `Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`;
        container.appendChild(li); 
    });
}

const button2 = document.getElementById("button2");
button2.onclick = function(){
    printLibrary()};

function calculateAverageYear() {
    const container = document.getElementById('results');
    container.innerHTML = ""; 

    let sumyear = 0;
    let bookcounter = 0; 

    library.forEach(book => {
        sumyear += book.year; 
        bookcounter++; 

    });
    let li = document.createElement('li');
    averageyear = sumyear/bookcounter;
    li.textContent = `Середній рік видання книг: ${averageyear}`;
    container.appendChild(li); 
}

const button3 = document.getElementById("button3");
button3.onclick = function(){
    calculateAverageYear()};








let films = [
    {   title: "Розумник Вілл Гантінґ",
        director: "Ґас Ван Сент",
        year: 1997,
        genre: "Романтика/Драма",
        isWatch: true},

    {   title: "Талановитий містер Ріплі",
        director: "Ентоні Мінгелла",
        year: 1999,
        genre: "Трилер/Кримінал",
        isWatch: true},

    {   title: "Аутсайдери",
        director: "Джеймс Менголд",
        year: 2019,
        genre: "Спортивний/Екшн",
        isWatch: false}
]


function addFilm() {
    let title = prompt("Введіть назву фільму: ");
    let director = prompt("Введіть режисера фільму: ");
    let year = +prompt("Введіть рік випуску фільму: ");
    let genre = prompt("Введіть жанр: ");
    let isWatch = confirm("Чи переглянуто фільм?");

    films.push({ title, director, year, genre, isWatch});
    printFilms();
}


const button5 = document.getElementById("button5");
button5.onclick = function(){
    addFilm()};

function printFilms() {
    const container = document.getElementById('results');
    container.innerHTML = "";
    films.forEach(film => {
        let li = document.createElement('li');
        li.textContent = `Назва: ${film.title}, Режисер: ${film.director}, Рік випуску: ${film.year}, Жанр: ${film.genre}, Переглянуто: ${film.isWatch ? "Так" : "Ні"}`;
        container.appendChild(li); 
    });
}

const button4 = document.getElementById("button4");
button4.onclick = function(){
    printFilms();};

function calculateAverageYearOfFilms() {
    const container = document.getElementById('results');
    container.innerHTML = ""; 

    let sumyear = 0;
    let filmcounter = 0; 

    films.forEach(film => {
        sumyear += film.year; 
        filmcounter++; 

    });
    let li = document.createElement('li');
    averageyear = sumyear/filmcounter;
    li.textContent = `Середній рік випуску фільмів: ${averageyear}`;
    container.appendChild(li); 
}

const button6 = document.getElementById("button6");
button6.onclick = function(){
    calculateAverageYearOfFilms()};

function markAsWatched() {
    let title = prompt("Введіь назву фільму, щоб переглянути");
    let film = films.find(book => book.title === title);
    if (film !== undefined){
        film.isWatch = true;
        printFilms();
    } else if(film.isWatch == true)
        alert('Фільм уже переглянуто');
    else {
        alert('Немає такого фільму');
    }
}

const button7 = document.getElementById("button7");
button7.onclick = function(){
    markAsWatched()};