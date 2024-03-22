// Частина №1
let birthYear = prompt("Введіть свій рік народження:");
let city = prompt("Введіть місто, де ви живете:");
let favoriteSport = prompt("Введіть свій улюблений вид спорту:");

if (birthYear === null || city === null || favoriteSport === null) {
    alert("Шкода, що Ви не захотіли ввести свій(ю) " + (birthYear === null ? "рік народження" : city === null ? "місто" : "вид спорту"));
} else {
    let age = new Date().getFullYear() - parseInt(birthYear);

    let message = "Ваш вік: " + age + "\n";
    switch (city.toLowerCase()) {
        case "київ":
        case "прага":
        case "лондон":
            message += "Ти живеш у столиці " + getCountry(city) + ".";
            break;
        default:
            message += "Ти живеш у місті " + city + ".";
    }

    let champions = {
        "футбол": "Ліонель Мессі",
        "баскетбол": "Леброн Джеймс",
        "теніс": "Рафаель Надаль"
    };

    if (champions.hasOwnProperty(favoriteSport.toLowerCase())) {
        message += "\nКруто! Хочеш стати " + champions[favoriteSport.toLowerCase()] + "?";
    }

    alert(message);
}

function getCountry(city) {
    switch (city.toLowerCase()) {
        case "київ":
            return "України";
        case "прага":
            return "Чехії";
        case "лондон":
            return "Великої Британії";
        default:
            return "";
    }
}