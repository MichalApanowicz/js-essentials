var getRouteChar = () => {
    return "_";
}
var getCarChar = function() {
    return "🚗";
}

var road = {
   /*
    ...
   */
}


// #region Ex 1
road.setLength(10)
    .print();

// output:
// __________
// #endregion

// #region Ex2
road.setLength(60)
    .setCarAt(20)
    .print();

// output:
// ____________________🚗_______________________________________

// #endregion 