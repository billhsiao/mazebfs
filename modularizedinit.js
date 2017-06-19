var request = require ('request');
var mazeChallenge = 'http://www.epdeveloperchallenge.com/api/init';
var postMethod = 'POST';
var directions = [];
var x = [];
var y = [];
var breadth = function (error, response) {
  if (error) {
    return;
  } else {
  for (var key in response) {
  if (response.hasOwnProperty(key)) {
    if (response[key] === 'UNEXPLORED') {
    console.log(key);
    directions.push(response[key]);
    x.push(currentCell)
    }
  }
}
  this.response = response;
  return response;
  }
}

// var maze = {
//   this.north = maze.currentCell.north;
//   this.east = maze.currentCell.east;
//   this.south = maze.currentCell.south;
//   this.west = maze.currentCell.west;
//   this.x = maze.currentCell.x;
//   this.y = maze.currentCell.y;
// }
//



smallrequest(mazeChallenge, postMethod);

function smallrequest (link, type) {
  var response;
  request ({
    url: link,
    method: type,
  }, (error, response, body) => {
    if (error) {
      console.log(error);
      console.log(response);
    } else {
      breadth;
      response = JSON.parse(body);
      console.log(response);
    }
  })
  return response;
}
