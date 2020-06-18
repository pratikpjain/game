var name1 = prompt('Enter the name of Player 1 ');
var name2 = prompt('Enter the name of Player 2 ');
var first = document.getElementById('p1');
first.innerHTML = name1;
var sec = document.getElementById('p2');
sec.innerHTML = name2;
function die() {
    var sc1 = Math.floor(Math.random() * 6) + 1;
    var sc2 = Math.floor(Math.random() * 6) + 1;
    var p1 = document.getElementById('player1');
    var p2 = document.getElementById('player2');
    var imgname = ['one.jpg' , 'two.jpg' , 'three.jpg' , 'four.jpg' , 'five.jpg' , 'six.jpg'];
    document.querySelector('#player1').setAttribute('src' , imgname[sc1-1])
    document.querySelector('#player2').setAttribute('src' , imgname[sc2-1])
    p1.innerText = sc1;
    p2.innerText = sc2;
    if(sc1 > sc2) {
        var y = document.getElementById('result')
        y.innerHTML = '<img class = "flag" src = "winner.jpg"><h1>Congrats , ' + name1 + ' Wins!!!</h1>';
    }
    else if (sc1 < sc2) {
        var y = document.getElementById('result')
        y.innerHTML = '<img class = "flag" src = "winner.jpg"><h1>Congrats , ' + name2 + ' Wins!!!</h1>';
    }
    else {
        var y = document.getElementById('result')
        y.innerHTML = '<h1>Opps ,Draw!!!</h1>';
    } 

}
