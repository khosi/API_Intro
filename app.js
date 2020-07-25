var responseo = new XMLHttpRequest;

responseo.open('GET','https://hplussport.com/api/products');

responseo.onload = function(){

    
     //Sample of showing printout

    var request = responseo.response;
    console.log(request);
    var javaObject = JSON.parse(request);
    console.log(javaObject);
    

    //Sample of using data from an API for my website

    var name = javaObject[0].name;
    var list = document.createElement('li');
    list.innerHTML = name;
    document.body.appendChild(list);

    
    //displaying an image

    var imageURL = javaObject[0].image;
    var image = document.createElement('img');
    image.setAttribute('src',imageURL);
    document.body.appendChild(image);

    
    //Display it as a whole

    var x = javaObject.length;
    for(var i=0;i<x;i++){

        var name = javaObject[i].name;
        var list = document.createElement('li');
        list.innerHTML = name;
        document.body.appendChild(list);
        list.style.background = "red"; 

        var imageURL = javaObject[i].image;
        var image = document.createElement('img');
        image.setAttribute('src',imageURL);
        document.body.appendChild(image);
        image.style.filter = "blur(20px)";


    }
   



};
responseo.send();