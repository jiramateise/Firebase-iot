
//image.onload = function(){
//console.log(image.width); // image is loaded and we have image width 
//}
let imageList = document.querySelector('#imageList');
let timeList = document.querySelector('#timeList');
let li = document.createElement('li');

database.ref('state/base64/encode').once('value').then(function (snapshort) {

    var content = '';

    snapshort.forEach(function (data) {
        var image = new Image();
        var value = data.val();
        var keys = data.key;
        let li = document.createElement('li');
        //let time = document.createElement('li');
        //let span = document.createElement('span');
        console.log(keys)

        console.log("encode", value);

        //content += '<tr>';
        //content += '<td>' +image+'</td>'

        image.src = 'data:image/jpeg;base64,' + value;
        
        li.appendChild(image);
        imageList.appendChild(li);
        // span= image;
        // li.appendChild(image);
        //li.appendChild(time);


        // content +='<td>'+ image+'</td>'
        //li.setAttribute('data-id', doc.id);
        // li.appendChild(image);
        // li.appendChild(Time);
        // imageList.appendChild(li);
       /* database.ref('state/base64/Time').once('value').then(function (snapshort) {



            snapshort.forEach(function (data) {
                var Time = data.val();
                var keys = data.key;
                // let li = document.createElement('li');
                let time = document.createElement('li');
                // let img = document.createElement('span');
                console.log(keys)

                console.log("Time", Time);

                // list.appendChild(data.val());

                time.textContent = Time;
                //li.appendChild(time)
                li.appendChild(time);
                
                
               // imageList.appendChild(time);








            });


        });*/

        


        //var theDiv = document.getElementById('table');
        //theDiv.innerHTML += content;

    });
    imageList.appendChild(li);

});
   // var theDiv = document.getElementById('col2');
   //theDiv.innerHTML += content;

database.ref('state/base64/Time').once('value').then(function(snapshort){


    var content = '';
    snapshort.forEach(function (data) {
        var Time = data.val();
        var keys = data.key;
       // let li = document.createElement('li');
        let time = document.createElement('li');
       // let img = document.createElement('span');
        console.log(keys)

        console.log("Time", Time);

       // list.appendChild(data.val());

        time.textContent = Time;
        //content += '<tr>'
        
        content += '<td>'+Time+'<br>'+'<br>'+'<br>'+'</td>';
        content += '<hr width = "100%" size = "20"></hr>'
        
        
        //content += '</tr>'
        //content += '<tr>'+Time;
        //content += '<td>'+Time+'</td>'
        //li.appendChild(time)
        //imageList.appendChild(li);







    });
    var theDiv = document.getElementById('col2');
        theDiv.innerHTML += content;

});
