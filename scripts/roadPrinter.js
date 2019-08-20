var getRouteChar = () => {
    return "_";
}
var getCarChar = function() {
    return "🚗";
}

var road = {
    _carPosition: -1,
    _length: 1,
    setLength: function(length) {
        this._length = length;
        return this;
    },
    setCarAt: function(position) {
        this._carPosition = position;
        return this;
    },
    isCarPosition: function(position) {
        return position === this._carPosition;
    },
    print: function() {
        var roadString = "";
        for(var i=0; i<this._length; i++){
            roadString += this.isCarPosition(i) ? getCarChar() : getRouteChar()
        }
        console.log(roadString);
    }
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