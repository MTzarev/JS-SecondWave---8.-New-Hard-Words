function newHardWords(arr) {
let text = arr.shift();
let words = arr.shift();
let letter = text.split(` `);

    for (let word of letter){
        if (word.includes(`_`)){
            let idxStart = word.indexOf(`_`);
            let idxEnd = word.lastIndexOf(`_`);
            let hole = word.slice(idxStart, idxEnd+1);
            for (let toChange of words){
                if(toChange.length === hole.length){
                    text=text.replace(hole, toChange);
                }
            }
        }
    }

    console.log(text);
}
newHardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
