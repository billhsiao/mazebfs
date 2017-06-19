var request = require ('request');

// request
//   .post('http://www.epdeveloperchallenge.com/api/init')
//   .on('response', function(response){
//     console.log(response);
//   });

function init ()
request ({
  url: 'http://www.epdeveloperchallenge.com/api/init',
  method: 'POST'
}, function(error, response, body) {
  if(error) {
    console.log(error);
    console.log(response);
  } else {
    var current = JSON.parse(body)
    var mazeGuid = current.currentCell.mazeGuid;
    console.log(current);
    function move(current) {
      var north = current.currentCell.north, east = current.currentCell.east, south = current.currentCell.south, west = current.currentCell.west;
      var map = [north, east, south, west];
      var directions = ['north', 'east', 'south', 'west'];
      var direction = '';
      var storage = [];
      var storage2 = [];
      for (let i = 0; i <4; i++) {
        if (map[i] === 'UNEXPLORED') {
          direction = directions[i];
          storage.push(direction);
        }
      }
      if (storage.length > 1) {
        storage2.push(current.currentCell.x, current.currentCell.y);
        jump();
        return move(current);
      }
      return direction;
    }
    request ({
      url: 'http://www.epdeveloperchallenge.com/api/move?mazeGuid=' + mazeGuid + '&direction=' + direction,
      method: 'POST',
    }, function(error, response, body) {
      if(error) {
        console.log(error);
        console.log(response);
      } else {
        var current = JSON.parse(body)
        console.log(current);
        move(current);
      }
    });

  move(current);
  }
});
function jump () {
request ({
    url: 'http://www.epdeveloperchallenge.com/api/jump?mazeGuid=' + mazeGuid + '&x=' + storage2[0] + '&y=' + storage2[1];
    method: 'POST',
    }, function(error, response, body) {
    if(error) {
      console.log(error);
      console.log(response);
    }
    }
  }

// function initializer
// function that recursion


//JSON.parse (parses json
// api/move?mazeGuid=927ee80e-c19d-4e03-a1e7-4277fd109d66&direction=NORTH
