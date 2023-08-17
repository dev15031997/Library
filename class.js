//USING CLASS
class Book {
	constructor(name, author, type) {
		this.name = name;
		this.author = author;
		this.type = type;
	}
}

class Display {
	//add method
	add(book) {
		let tableBody = document.getElementById('tableBody')
		let UIstring = `
												    <tr>
												      <td>${book.name}</td>
												      <td>${book.author}</td>
												      <td>${book.type}</td>
												    </tr>
										   `
		tableBody.innerHTML += UIstring;
	};

	// clear
	clear() {
		let libraryForm = document.getElementById('libraryForm')
		libraryForm.reset()
	};

	//validate
	validate(book) {
		if (book.name.length < 2 || book.author.length < 2) {
			return false;
		}
		else {
			return true;
		}
	};

	// show
	show(type, msg) {
		let message = document.getElementById('message')
		let check;

		if (type == 'success') {
			check = 'Success'
		}
		else {
			check = 'Failure'
		}

		message.innerHTML =
			`
						<div class="alert alert-${type} alert-dismissible fade show" role="alert">
						  <strong>${check}:</strong> ${msg}
						  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
						    <span aria-hidden="true">&times;</span>
						  </button>
					  </div>	
			      `

		setTimeout(() => {
			message.innerHTML = '';
		}, 2000)
	}
}

// Add submit event listener
let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {
	e.preventDefault()
	let name = document.getElementById('bookName').value
	let author = document.getElementById('author').value
	let type;

	let fiction = document.getElementById('fiction');
	let programming = document.getElementById('programming');
	let cooking = document.getElementById('cooking');

	if (fiction.checked) {
		type = fiction.value;
	}
	else if (programming.checked) {
		type = programming.value;
	}
	else if (cooking.checked) {
		type = cooking.value
	}

	let book = new Book(name, author, type)
	console.log(book)

	let display = new Display()

	if (display.validate(book)) {
		display.add(book)
		display.clear()
		display.show('success', 'Book Successfully added')
	}
	else {
		display.show('danger', 'Book not Added')
	}

}
