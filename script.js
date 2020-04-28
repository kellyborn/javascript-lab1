const name = "Kelly";
const age = 42;
const birthday = "December 14";
const detroitGC = true;
const lifeEvents = ["I grew up in Grosse Ile, Michigan.", "I played golf at Michigan State University.", "I met my husband 19 years ago.", "We have two amazing boys, Michael and Braxton."];

if (detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}
else {
    console.log(`My name is ${Kelly} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    if (randomNumber !== 5) {
        console.log(`${randomNumber} !== 5`);
        counter++
    } else {
        console.log(`5===5. It took ${counter} interations to randomly generate the number 5.`)
        break;
    }

}
