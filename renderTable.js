function showTable(listOfBooks){
    const tableEle = document.getElementsByTagName('table')[0];

    listOfBooks.forEach(book => {
        const trEle = document.createElement('tr');
        const allTds = [];
        for(let key in book){
            const tdEle = document.createElement('td');
            tdEle.innerHTML = book[key];
            if(key === 'borrower' && book[key] === null)
            {
                const borrowbtn = document.createElement('button');
                borrowbtn.innerHTML = 'Borrow';
                tdEle.appendChild(borrowbtn);
            }
                allTds.push(tdEle);
            
        }        

        allTds.forEach(td=>{
            trEle.appendChild(td);
        })
        tableEle.appendChild(trEle);
    });
}