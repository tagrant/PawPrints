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
    	img.setAttribute("style", "margin-top: -130px; width:80%; height:30%; background-color:#ffffff");
    	//img.style.css = 'width:50px; height:100px';
    	img.src = "http://i.imgur.com/dyuLi2Y.png";
    	
    	document.getElementById(divName).appendChild(img);
    	
        var btnShow = document.createElement("input");
        btnShow.setAttribute("type", "button");
        btnShow.value = "Like";
        
        
        
       // var optionPar = arrOptions[i];
    	btnShow.setAttribute("style", "width:125px; height:125px; margin-top:350px; margin-left: 20px; vertical-align: top");
    	btnShow.onclick = (function(opt) {
    	    return function() {
    	    	if(opt == 'option4' ){
    	    	
    	    		window.location.href = 'PersonalProfileView.html';
    	    	}
    	    	alert(opt);
    	    };
    	})(arrOptions[i]);
    	document.getElementById(divName).appendChild(btnShow);

    	 var reportButton = document.createElement("input");
         reportButton.setAttribute("type", "button");
         reportButton.value = "Report";
         reportButton.setAttribute("style", "width:125px; margin-left: -124px; height:125px; margin-top:500px;");
         reportButton.onclick = (function(opt) {
     	    return function() {
     	    	if(opt == 'option4' ){
     	    	
     	    		window.location.href = 'PersonalProfileView.html';
     	    	}
     	    	alert(opt);
     	    };
     	})(arrOptions[i]);
     	document.getElementById(divName).appendChild(reportButton);


    		}
           //   var newdiv = document.createElement('div');
             // 	newdiv.innerHTML = img;
             // newdiv.innerHTML = "Entry " + (counter + 1) + " <div>'fdssdfsd'</div>";
             // newdiv.innerHTML = "<figure> <img src="http://i.imgur.com/dyuLi2Y.png"></figure>";
              //newdiv.innerHTML = "Button" + "<button> diuhsdiashid</button>";

              //document.getElementById(divName).appendChild(newdiv);


         }

    