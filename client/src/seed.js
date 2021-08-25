import data from './data.json';

export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    });
    /* eslint-enable */
  }

const works = data.works;
const techs = data.techs;
const gears  = data.gear;


gears.map((gear) =>(
    firebase.firestore().collection('gear').add({
      id : getUUID(),
      title : gear.title,
      items : gear.items,
    })

));

techs.map((tech) =>(
    firebase.firestore().collection('techs').add({
      id : getUUID(),
      title : tech.title,
      items : tech.items,
    })

));

works.map((work) =>(
    firebase.firestore().collection('works').add({
      id : getUUID(),
      title : work.title,
      items : work.items,
    })

));



}
