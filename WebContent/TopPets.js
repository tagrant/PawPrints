function topPetSearch(){
	var e = document.getElementById("optionSelect");
	var strUser = e.value;
	sessionStorage.setItem("TopPetsSearch", strUser);
	window.location.href= 'TopPetsSearch.html';
}