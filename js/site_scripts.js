
    var partnerName = ["bustour","cabinrental","campingadv","collegetours","rentalbike","tourgroup"];
    var photos = [];
    var fileNames = [];
    var imageList = [];
    var image;
    var openList = "<li class='partner'>";
    var closeList = "</li>";

    for (var i=0; i<6; i++){
        partnerName.push(i+1);
        fileNames.push("partner-" + partnerName[i]);
        photos.push("<img src='content/partners/"+fileNames[i]+".png'>");
        image = openList + photos[i] + closeList;
        imageList.push(image);
    }
    document.getElementById("partners").innerHTML = imageList;


    /*RANDOM CODES*/
        //function to generate combination of characters
        var code = ' '; //initailize to null value
        var getCode = ' '; //to store entered code
        var btnvalue; // for buton boolean value 
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz0123456789@#$'; 

    