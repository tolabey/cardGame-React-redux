const svgs = require.context('../svg-cards', true, /\.svg$/)

const svgsObj = svgs.keys()
    .reduce((images, key) => {
        images[key] = svgs(key)
        return images
    }, {});
// //render all cards
// cardsRender() {
//     return svgs.keys().map((key => {
//         return <img key={key} alt="default" src={svgsObj[String(key)]}/>
//
//     }))
// }

//render one card
function randomCards() {
    var tempCard = null;
    var control = 0;
    var a = parseInt(Math.random() * svgs.keys().length, 10);

    svgs.keys().map((key => {
        if(a === control) {
            control += 1;
            tempCard = key;
            return key
        }
        control += 1;
        return key
    }));
    return tempCard
}


let initialCards = [];
for(var i = 0; i < 60; i++) {
    var a = {card: randomCards(), id: Math.random()}
    initialCards = [...initialCards, a]
}


export function cardsReducer(state=initialCards) {

return state
}
