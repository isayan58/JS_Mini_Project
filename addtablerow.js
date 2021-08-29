function adduserrow(username)
{
    console.log(username);

    const tableEle = document.getElementsByTagName('table')[0];
    const trEle = document.createElement('tr');
    const allTds = [];

    for(let key in username){
        const tdEle = document.createElement('td');
        tdEle.innerHTML = username[key];
        allTds.push(tdEle);
    }

    allTds.forEach(td=>{
        trEle.appendChild(td);
    })
    tableEle.appendChild(trEle);
}