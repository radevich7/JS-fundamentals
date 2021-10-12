"useStrict";
function firstPlace(road) {
  if (road.length == 0) {
    return "No road available";
  }

  let regex = /[a-z]|[A-Z]/g;
  let res = road.match(regex);
  console.log(res);
  if (res == null) {
    return "No car available";
  } else {
    return res.slice(-1)[0];
  }
}
console.log(firstPlace("====="));
