function adduserrow(book)
{
    console.log(book);

    const tableEle = document.getElementsByTagName('table')[0];
    const trEle = document.createElement('tr');
    const allTds = [];

    for(let key in book){
        const tdEle = document.createElement('td');
        let inpName;
        if (key === 'name'){
            inpName = document.createElement('input');
            inpName.placeholder = 'Enter book name';
            tdEle.appendChild(inpName);
        }
        else if(key === 'author')
        {
            inpName = document.createElement('input');
            inpName.placeholder = 'Enter author name';
            tdEle.appendChild(inpName);
        }
        else{
            tdEle.innerHTML = book[key];
        }
        trEle.appendChild(tdEle);
    }
     tableEle.appendChild(trEle);

    allTds.forEach(td=>{
        trEle.appendChild(td);
    })
    tableEle.appendChild(trEle);
}