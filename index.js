/*
An object-oriented book-list!

Create a class BookList

Create another class called Book

BookLists should have the following properties:

Number of books marked as read
Number of books marked not read yet
A reference to the next book to read (book object)
A reference to the current book being read (book object)
A reference to the last book read (book object)
An array of all the Books
Each Book should have several properties:

Title
Genre
Author
Read (true or false)
Read date, can be blank, otherwise needs to be a JS Date() object
Every Booklist should have a few methods:

.add(book)
should add a book to the books list.
.finishCurrentBook()
should mark the book that is currently being read as "read"
Give it a read date of new Date(Date.now())
Change the last book read to be the book that just got finished
Change the current book to be the next book to be read
Change the next book to be read property to be the first unread book you find in the list of books
Booklists and Books might need more methods than that. Try to think of more that might be useful.
*/

window.onload = () =>{
    var libreria = new bookList();
    var libro = new book('as','fff','asdf',false);
    var libro2 = new book('aasdfs','fffffaf','aasdfsdf',false); 
    var libro3 = new book('aasa','kkkffaf','tutrui',false); 
    libreria.add(libro);
    libreria.add(libro2)
    libreria.add(libro3);
    console.log(libreria);
    libreria.finishCurrentBook();
    console.log(libreria.listaLibros.length);

    var pActual = document.getElementById('libro-actual');
    var p_actual = document.getElementById('libroActual');
   p_actual.innerHTML = libreria.libroactual;
    pActual.append(p_actual);
    var pSuperior = document.getElementById('siguiente-libro');
    var p = document.getElementById('siguienteLibro');
    if (libreria.siguienteLibro.titulo == undefined) {
        p.innerHTML = libreria.siguienteLibro;
    }else{
        p.innerHTML = libreria.siguienteLibro.titulo;

    }
    pSuperior.append(p);

    var p_Superior = document.getElementById('anterior-libro');
    var p_s = document.getElementById('anteriorLibro');
    if (libreria.anteriorLibro.titulo == undefined) {
        p_s.innerHTML = libreria.anteriorLibro;
    }else{
        p_s.innerHTML = libreria.anteriorLibro.titulo;

    }
    p_Superior.append(p_s);


    var listaLibros = document.getElementById('lista-libros');
    for (let i = 0; i < libreria.listaLibros.length; i++) {
       
       var li = document.createElement('li');
        li.innerHTML = 'Título: '+libreria.listaLibros[i].titulo+' Genero: '+libreria.listaLibros[i].genero+' Autor: '+libreria.listaLibros[i].autor;

        listaLibros.appendChild(li);

        
    }
    
    
    var añadir_libro = document.getElementById('boton-libro');

    añadir_libro.addEventListener('click', ()=>{
    
        const titulo = document.getElementById('titulo').value;
        const genero = document.getElementById('genero').value;
        const autor = document.getElementById('autor').value;
    
        libreria.add(new book(titulo,genero,autor,false));
    })  


}
    class bookList{
    constructor(librosLeidos,librosPorLeer,siguienteLibro,ultimoLibro,totalLibros,anteriorLibro,libroactual){
        this.actual = 0;
        this.librosLeidos=0;
        this.librosPorLeer=0;
        this.siguienteLibro= 0;
        this.anteriorLibro = 0;
        this.listaLibros= [];
        this.totalLibros = this.listaLibros;
        this.libroactual = 0;
    }

    add(book){
        this.listaLibros.push(book);
        this.librosPorLeer++;
        this.libroactual = this.listaLibros[this.actual].titulo;
        if (this.listaLibros[this.actual+1]== undefined) {
            this.siguienteLibro = 'No hay siguiente libro';
        }else{
            this.siguienteLibro = this.listaLibros[this.actual+1].titulo;
        }
        if (this.listaLibros[this.actual-1] == undefined) {
            this.anteriorLibro = 'No hay libro anterior';
        }else{
            this.anteriorLibro = this.listaLibros[this.actual-1];
        }
    }

    finishCurrentBook(){
        this.listaLibros[this.actual].leido = true;
        this.librosLeidos++;
        this.actual++;
        this.librosPorLeer--;
        this.libroactual = this.listaLibros[this.actual].titulo;
        if (this.listaLibros[this.actual+1]== undefined) {
            this.siguienteLibro = 'No hay siguientes libros';
        }else{
            this.siguienteLibro = this.listaLibros[this.actual];
        }
        
        if (this.listaLibros[this.actual-1] == -1) {
            this.anteriorLibro = 'No hay libros anteriores.';
        }else{
            this.anteriorLibro = this.listaLibros[this.actual-1];
        }

    }
}

class book{

    constructor(titulo, genero, autor, leido=false){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = leido;
        }

        // Getter para el título del libro
    getTitulo() {
        return this.titulo;
    }
    // Setter para el título del libro
    setTitulo(value) {
        this.titulo = value;
    }

    // Getter para el género del libro
    getGenero() {
        return this.genero;
    }
    // Setter para el género del libro
    setGenero(value) {
        this.genero = value;
    }

    // Getter para el autor del libro
    getAutor() {
        return this.autor;
    }
    // Setter para el autor del libro
    setAutor(value) {
        this.autor = value;
    }

    // Getter para el estado de lectura del libro
    getLeido() {
        return this.leido;
    }
    // Setter para el estado de lectura del libro
    setLeido(value) {
        this.leido = value;
    }
}


