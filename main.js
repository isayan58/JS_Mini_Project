let initBook=[
    {
        id: 1,
        name: "Harry Potter",
        author: "J. K. Rowling",
        lender: "Sayan",
        borrower: "Charles"
    }
    ,
    {
        id: 2,
        name: "Pride and Prejudice",
        author: "Jane Austen",
        lender: "XYZ",
        borrower: null
    }
];

    // function addBook(book, trEle)
    // {
    //     initBook.push(book);
    //     console.log(initBook);
    //     //trEle.remove();
    //     const myStoreupdated = new Store(initBook);
    //     myStoreupdated.render();
    // }

    function addBook(book, trEleToRemove) {
        const { bookid, name, author, lender } = book;
        const bookToSave = {
            bookid, name, author, lender,
             borrower: null
        };
        trEleToRemove.remove();
        initBook.push(bookToSave);
        console.log(initBook);
        showTable([bookToSave]);
        //userSubmitEl.disabled = false;
    }

class Store{
    constructor(list)
    {
        this.BookList=list;
        this.lastid = list.length;
    }
    render(){
        showTable(this.BookList)
    }
}

class UserAdd{

    constructor(list)
    {
        this.BookList=list;
        this.lastid = list.length;
    }
    addrow(){
    let element= {};
    element.bookid = ++this.lastid;
    element.name = '';
    element.author = '';
    element.lender =document.getElementById("lender").value;
    element.borrower = '';
    adduserrow(element);
}

}

document.body.onload= function(){
    const myStore = new Store(initBook);
    myStore.render();
}
async function adduser(){
    const myUser = new UserAdd(initBook);
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 100)
      });
  
      let result = await promise; // wait until the promise resolves
    myUser.addrow();
    let frm = document.getElementsByName('form1')[0];
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
}