// bottleSong(99,'Coke');
function bottleSong(num,beverage) {
  // var num, beverage
  var onum = num;
  while(num >= 0) {
    console.log(bottlesOnTheWall(num,beverage));
    console.log(bottlesOnTheWall(num,beverage,''));
    console.log(takeOneDown(num));
    num--;
    if (num === -1) {
      console.log(bottlesOnTheWall(onum,beverage));
    }
    else {
      console.log(bottlesOnTheWall(num,beverage));
    }
    console.log('');
  }
}

function bottlesOnTheWall(num,beverage,place=' on the wall',onum) {
  var s = 's';
  if (num === 1) {
    var s = '';
  }
  if (num === 0) {
    num = 'No more'
  }
  return num + ' bottle' + s + ' of ' + beverage + place;
}

function takeOneDown(num) {
  if (num === 0) {
    return 'You go to the store and buy some more';
  }
  else {
    return 'You take one down and pass it around';
  }
}


