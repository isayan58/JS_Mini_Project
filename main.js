let initBook=[
    {
        id: 1,
        name: "Harry Potter",
        author: "J. K. Rowling",
        lender: "Sayan",
        borrower: "Satan"
    }
    ,
    {
        id: 2,
        name: "Pride and Prejudice",
        author: "Jane Austen",
        lender: "Priyarna",
        borrower: null
    }
];

class Store{
    constructor(list)
    {
        this.BookList=list;
    }
    render(){
        showTable(this.BookList)
    }
}

class UserAdd{

    constructor(user)
    {
        this.username=user;
    }
    addrow(){
    //console.log(this.username);
    //adduserrow(this.username);
    let element= {};
    element.bookid =document.getElementById("bookid").value;
    element.name =document.getElementById("name").value;
    element.author =document.getElementById("author").value;
    element.lender =document.getElementById("lender").value;
    element.borrower =document.getElementById("borrower").value;
    adduserrow(element);
    //console.log(element);
}

}

document.body.onload= function(){
    const myStore = new Store(initBook);
    myStore.render();
}
async function adduser(){
    //let username= document.getElementById('username').value;
    const myUser = new UserAdd();
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
      });
  
      let result = await promise; // wait until the promise resolves
    myUser.addrow();
    let frm = document.getElementsByName('form1')[0];
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
}