function adduserrow(username)
{
    console.log(username);

    const tableEle = document.getElementsByTagName('table')[0];
    const trEle = document.createElement('tr');
    const allTds = [];

    for(let key in username){
        const tdEle = document.createElement('td');
        //tdEle.innerHTML = username[key];
        const inputEle = document.createElement('input');
        inputEle.type='text';
        //inputEle.value= username[key];
        inputEle.placeholder = 'Enter the data here'
        inputEle.setAttribute("contentediable", true);
        tdEle.innerHTML = inputEle.value;
        allTds.push(tdEle);
    }

    allTds.forEach(td=>{
        trEle.appendChild(td);
    })
    tableEle.appendChild(trEle);
}