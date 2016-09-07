
// Initialize Firebase
var config = {
	apiKey: "AIzaSyA8p9xQG-LTlS8T85JcrTz5KysZhY7oAnw",
	authDomain: "wtv3-6987a.firebaseapp.com",
	databaseURL: "https://wtv3-6987a.firebaseio.com",
	storageBucket: "wtv3-6987a.appspot.com"
};
firebase.initializeApp(config);

//global variables


//single undescore function for getting element by id
function _(id) {
	return document.getElementById(id);
}

//page functions and system
function getPages() {
	var pages = document.getElementsByClassName('pages');
	return pages;
}
    
function getPageByName(name) {
	return _('pages/' + name);
}

function changePage(page) {
	//page is just a dom page element here
	var pages = getPages();
	var pageName = page.id.split('/')[1];
	document.title = "Workteen | " + pageName;

	//display exisisting pages to none
	var i = 0;
	while (i < pages.length) {
		pages[i].style.display = "none";
		i++;
	}

	//set the page supplied in parameter to display
	page.style.display = "block";
}

//user functions and systems

//returns the current user
function getUser() {
	return firebase.auth().currentUser;
}

//returns a true or false on the basis if user is logged in or not
function isLoggedIn() {
	if (getUser()) {
		return true;
	}
	return false;
}


document.addEventListener('DOMContentLoaded', function() {
   //add the work will be done here
   page.base('/');
   page();

});