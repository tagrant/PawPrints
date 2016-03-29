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

    function addInput(divName){
    		for(var i = 0; i < arrOptions.length; i++){
    	var img = document.createElement('img');
    	img.id = "::img";
    	img.setAttribute("style", "width:200px; height:200px; background-color:#ffffff");
    	img.src = "http://i.imgur.com/dyuLi2Y.png";
    	
    	document.getElementById(divName).appendChild(img);
    	


         }
    }

    