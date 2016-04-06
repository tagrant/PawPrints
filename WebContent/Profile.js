 var counter = 1;
    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    var person2 = {firstName:"Jfsdfohn", lastName:"Dosdfe", age:50, eyeColor:"bsfsflue"};
    var array = [];
    array.push(person);
    array.push(person2);
    var arrOptions = new Array();

    for (var i = 0; i < 10; i++) {
        arrOptions[i] = "option" + i;
    }

    var limit = 3;

    function addPetInput(divName){
    		for(var i = 0; i < arrOptions.length; i++){
    	var img = document.createElement('img');
    	var link = document.createElement('a');
    	img.id = "::img";  	
    	img.setAttribute("style", "width:90%; height:auto; padding-left: 20px; margin-left: 20px; margin-bottom: 40px;");
    	img.setAttribute("src", "google.com");
    	link.setAttribute("href", "google.com");
    	img.src = "http://i.imgur.com/dyuLi2Y.png";
    	
    	link.appendChild(img);
    	img = document.createElement('img').appendChild(link);
    	document.getElementById(divName).appendChild(img);
    	
    	
    	
    	//Display Pet's Name
    	var title = document.createElement("Label");
    	title.innerHTML = "PET NAME";     
    	title.setAttribute("style", "color: white; font-size: 50px; margin-left: -500px; background-color: black; padding: 20px;");
    	document.getElementById(divName).appendChild(title);
    	

    	
    	// FOR PERSONAL PETS ONLY: delete pet portfolio
    	var deletelink = document.createElement('a');
    	deletelink.innerHTML = "DELETE PORTFOLIO";  
    	deletelink.setAttribute("style", "float: right; margin-top: 400px; margin-right: 70px; font-size: 12px; position: relative;");
    	deletelink.setAttribute("src", "yahoo.com");
    	deletelink.setAttribute("href", "yahoo.com");
    	
    	document.getElementById(divName).appendChild(deletelink);
    	
    	
    
    	
    	
         }
    }

    