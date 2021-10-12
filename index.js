console.log('this is library project')

class library {
    constructor(givenBook, givenAuthor, givenType) {
        this.Book = givenBook;
        this.Author = givenAuthor;
        this.Type = givenType;
    }
}

const btn = document.getElementById('addBook');
btn.addEventListener('click', addingBook)

const bname = document.getElementById('bookName').value;
    const aname = document.getElementById('author').value;
    // const bname=document.getElementById('');

    const fiction =document.getElementById('fiction');
    const programming =document.getElementById('programming');
    const cooking =document.getElementById('cooking');

    let type;
    if (fiction.checked) {
        type=fiction.value;
    } else if (programming.checked) {
        type=programming.value;
    } else if (cooking.checked) {
        type=cooking.value;
    } 

function addingBook(event) {
    event.preventDefault();

    const bname = document.getElementById('bookName').value;
    const aname = document.getElementById('author').value;
    // const bname=document.getElementById('');

    const fiction =document.getElementById('fiction');
    const programming =document.getElementById('programming');
    const cooking =document.getElementById('cooking');

    let type;
    if (fiction.checked) {
        type=fiction.value;
    } else if (programming.checked) {
        type=programming.value;
    } else if (cooking.checked) {
        type=cooking.value;
    } 

    let newbook=new library(bname,aname,type)
    // console.log('object')
    console.log(newbook)
    Display();
    // Display(newbook);
}

function Display() {
    const tbody=document.getElementById('tableBody')
    // let addedstr=`
    // <tr>
    //                     <td scope="col">${this.Book} </th>
    //                     <td scope="col">${this.Author} </th>
    //                     <td scope="col">${this.Type} </th>
    //                 </tr>
    // `
   
    let addedstr=`
    <tr>
                        <td scope="col">${bname} </th>
                        <td scope="col">${aname} </th>
                        <td scope="col">${type} </th>
                    </tr>
    `

    tbody.innerHTML=addedstr;

    // console.log(this.Book)
    // for checking 
    console.log(type)
    console.log(aname)
}