const normal = "🚗";
const police = "🚓";
const racing = "🏎️";

try {
    // zadeklaruj zmienną car z odpowiednią metodą


    // nie zmieniaj nic poniżej
    var car = carFactory.getByType("police");
    if(car !== "🚓") {
        throw new Error("funkcja getByType zwróciła niepoprawne auto!");
    }
    console.log("Dobra robota!");
} catch (e) {
    console.log("Błędne rozwiązanie!" + (!!e ? ` ${e}` : ""));
}