console.log("welcome to tut11");
//write a library function
class library{
    constructor(bookList){
        this.bookList=bookList;
        this.issuedBook={};
    }

    getbookList(){
        this.bookList.array.forEach(element => {
            console.log('element');
        });
    }

    issuedBook(bookName,user){
        this.issuedBook.bookName=user;
    }

    returnBook(bookName);
}