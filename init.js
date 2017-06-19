var request = require ('request');
var mazeGuid = '';
var maze = {};
function map(NORTH, EAST, SOUTH, WEST) {
  this.NORTH = maze.currentCell.north;
  this.EAST = maze.currentCell.east;
  this.SOUTH = maze.currentCell.south;
  this.WEST = maze.currentCell.west;
}

startMaze();

function startMaze () {
  request ({
    url: 'http://www.epdeveloperchallenge.com/api/init',
    method: 'POST',
  }, (error, response, body) => {
    if (error) {
      console.log(error);
      console.log(response);
    } else {
      maze = JSON.parse(body);
      mazeGuid = maze.currentCell.mazeGuid;
      var location = new map(maze);
      //console.log(location);
      scanner(location);
    }
  })
}


// function storeCoords(direction, x) {
//   pointer[direction] = x;
// }

function scanner(location) {
  var direction = [];
  var x = [];
  var y = [];
  var queue = [direction, x, y];
  for (var key in location) {
    if (location.hasOwnProperty(key)) {
      if (location[key] === 'UNEXPLORED') {
        direction.push(key);
        x.push(maze.currentCell.x);
        y.push(maze.currentCell.y);
        }
      }
    }
  console.log(location);
  console.log(queue);
  move(direction);
  return;
}


function move(where) {
  request ({
    url: 'http://www.epdeveloperchallenge.com/api/move?mazeGuid=' + mazeGuid + '&direction=' + where[0],
    method: 'POST',
  }, (error, response, body) => {
    if(error) {
      console.log(error);
      console.log(response);
    } else {
      console.log('going' + where);
      maze = JSON.parse(body);
      var location = new map(maze);
      console.log(location);
    }
  })
  return;
}
function jumpback(x, y, direction) {
  request ({
    url: 'http://www.epdeveloperchallenge.com/api/jump?mazeGuid=' + mazeGuid + '&x=' + x[0] + '&y=' + y[0],
    method: 'POST',
  }, (error, response, body) => {
    if(error) {
      console.log(error);
      console.log(response);
    } else {
      x.unshift();
      y.unshift();
      direction.unshift();
      console.log(direction);
      maze = JSON.parse(body);
      var location = new map(maze);
      console.log(location);

    }
  })
  return;
}



//
//
// function move(direction) {
  // request ({
  //   url: 'http://www.epdeveloperchallenge.com/api/move?mazeGuid=' + mazeGuid + '&direction=' + direction,
  //   method: 'POST',
  // }, (error, response, body) => {
  //   if(error) {
  //     console.log(error);
  //     console.log(response);
  //   } else {
  //     console.log(direction);
  //     maze = JSON.parse(body);
  //     var location = new map(maze);
  //     console.log(location);
  //   }
  // })
  // return direction;
// }
// function goback(direction) {
//
//   var back = '';
//   if (direction === 'NORTH') {
//     back === 'SOUTH';
//   } else if (direction === 'SOUTH') {
//     back === 'NORTH';
//   } else if (direction === 'EAST') {
//     back === 'WEST';
//   } else if (direction === 'WEST') {
//     back === 'EAST';
//   }
//   request ({
//     url: 'http://www.epdeveloperchallenge.com/api/move?mazeGuid=' + mazeGuid + '&direction=' + back,
//     method: 'POST',
//   }, (error, response, body) => {
//     if(error) {
//       console.log(error);
//       console.log(response);
//     } else {
//       maze = JSON.parse(body);
//       console.log(back);
//       var location = new map(maze);
//       console.log(location);
//     }
//   })
// }
//
//
//
//
//
//
//
//
//
//








// function breadthmoves(location) {
//   if (VISITED && direction === 'UNEXPLORED') {
//     moves(direction);
//     goback(direction);
//   } else if (VISITED === 'false' && direction === 'UNEXPLORED') {
//     goback(direction);
//   }
// }
