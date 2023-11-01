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

// returns a random index from a given array
const randomizer = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

// creates the message from given arrays
const messageGenerator = (path, damage, debuff, amp, sustain) => {
    console.log('Challenge yourself in the Simulated Universe!');
    console.log(`Pick the path of ${randomizer(path)}`);
    console.log('Your team composition should be:');
    console.log(`${randomizer(damage)} as your main damage dealer`);
    console.log(`${randomizer(debuff)} as your debuffer`);
    console.log(`${randomizer(amp)} as your amplifier`);
    console.log(`${randomizer(sustain)} as your sustain`);
    console.log('Good luck!');
};

messageGenerator(path, damageDealer, debuffer, amplifier, sustain);