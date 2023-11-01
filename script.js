// sim universe randomizer for Honkai Starrail
// arrays holding all the paths and current characters as of patch 1.4
const path = ["Preservation", "Remembrance", "Nihility", "Abundance",
"Hunt", "Destruction", "Elation", "Propagation"];
const damageDealer = ["Imbibitor Lunae", "Jingliu", "Qingque", "Seele",
"Blade", "Jing Yuan", "Kafka", "Clara", "Pitch dark Hook the great",
"Sushang", "Yanqing", "Dan Heng", "Himeko", "Serval", "Arlan", "Herta"];
const debuffer = ["Silver wolf", "Pela", "Topaz & Numby", "Guinaifen", "Luka", "Welt", "Sampo"];
const amplifier = ["Bronya", "Tingyun", "Asta", "Yukong"];
const sustain = ["Fu Xuan", "Luocha", "Gepard", "Lynx", "Bailu", "March 7th", "Natasha", "Trailblazer"];

const randomizer = (arr) => {
    return Math.floor(Math.random() * arr.length);
};

