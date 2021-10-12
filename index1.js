console.log('this is library project')

class library {
    constructor(givenBook, givenAuthor, givenType) {
        this.Book = givenBook;
        this.Author = givenAuthor;
        this.Type = givenType;
    }

    Display(){
        console.log('this is display ')
        const tbody = document.getElementById('tableBody')
    let addedstr = "";
    addedstr += `
                <tr>
                    <td scope="col">${this.Book} </th>
                    <td scope="col">${this.Author} </th>
                    <td scope="col">${this.Type} </th>
                </tr>
`

    // tbody.innerHTML = addedstr;
    tbody.innerHTML += addedstr;

    }

    Clear(){
        const libform=document.getElementById('libraryForm')
        libform.reset();
    }
}

const btn = document.getElementById('addBook');
btn.addEventListener('click', addingBook)

function addingBook(event) {
    event.preventDefault();

    const bname = document.getElementById('bookName').value;
    const aname = document.getElementById('author').value;

    const fiction = document.getElementById('fiction');
    const programming = document.getElementById('programming');
    const cooking = document.getElementById('cooking');

    let type;
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let newbook = new library(bname, aname, type)
    console.log(newbook)  

    // library.Display;
    // library.Display();

    // newbook.Display;
    newbook.Display();

    // console.log(newbook.Display)

    newbook.Clear();
}



