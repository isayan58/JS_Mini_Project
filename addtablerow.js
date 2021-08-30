function adduserrow(book)
{
    console.log(book);

    const tableEle = document.getElementsByTagName('table')[0];
    const trEle = document.createElement('tr');
    const allTds = [];
    let inpName;
    let inpNameauth;
    for(let key in book){
        const tdEle = document.createElement('td');
        if (key === 'name'){
            inpName = document.createElement('input');
            inpName.placeholder = 'Enter book name';
            inpName.type='text';
            inpName.className = 'inp-book-name';
            tdEle.appendChild(inpName);
        }
        else if(key === 'author')
        {
            inpNameauth = document.createElement('input');
            inpNameauth.placeholder = 'Enter author name';
            inpNameauth.type='text';
            inpNameauth.className = 'inp-auth-name';
            tdEle.appendChild(inpNameauth);
        }
        else if(key === 'borrower')
        {
            const Btntd = document.createElement('button');
            Btntd.innerHTML="Add Book";
            tdEle.appendChild(Btntd);
            Btntd.addEventListener('click', () =>{
                 book.name = inpName.value;
                 book.author = inpNameauth.value;
                 this.addBook(book, trEle);
            });
        }
        else{
            tdEle.innerHTML = book[key];
        }
        trEle.appendChild(tdEle);
    }
     tableEle.appendChild(trEle);
    tableEle.appendChild(trEle);
}