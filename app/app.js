const sentence = (word) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Hello ${word}!`), 1000);
});

const say = async (name) => {
    console.log(await sentence(name));
}

say('Arm');