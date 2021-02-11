function insert() {
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var country = document.getElementById("country").value;

    database.ref('user/' + name).set({
        userName: name,
        userGender: gender,
        userCountry: country,
        timestamp: Date.now(),

    });
}

    //var user=document.getElementById("user").value;
    database.ref('state/').once('value').then(function(snapshort){
      
        var content = '';
        
        snapshort.forEach(function (data) {
            var value = data.val();
            var keys = data.key;
            //console.log(keys)
            
            console.log("row", data.val());
            
            
            
            content += '<tr>';
            content += '<td>'+keys+'</td>'
            //content += '<td>'+data.getkey()+'</td>'
            if(value.val1 == 255){
                content += '<td>' + "Undetected" + '</td>';
            }else{
                content += '<td>' + "Detected !!" + '</td>';
            }
            
        
            content +='<td>'+value.Time2+'</td>'
            content +='<td> <button id='+data.key+' onclick="Delete(id);">Delete</button>'+'</td>'
        });

        var theDiv = document.getElementById('table');
        theDiv.innerHTML += content;





    });

function Delete(id){
    
    var database = firebase.database().ref('state/'+id);
    console.log("database",database)
    database.remove();
    
    

}





