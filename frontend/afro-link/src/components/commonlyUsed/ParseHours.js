// const objHours = {
//   mon: {
//     open: '10:00AM',
//     close: '06:00PM',
//   },
//   tues: {
//     open: '10:00AM',
//     close: '6:00PM',
//   },
//   weds: {
//     close: 'close',
//   },
// };

export const parseTimes = (obj) => {
  let results = [];
  let daysArr = [];

  const parseDays = (obj) => {
    for (let key in obj) {
      daysArr.push(key);
      daysArr.push(obj[key]);
    }
    return daysArr;
  };

  const getHours = (arr) => {
    arr = parseDays(obj);
    let newArr = arr.join(' ').replace(/[^\w\s]/g, '');

    let final = [];
    final = newArr.split('');

    final.map((day, i) => {
      results.push(day);
        results.push(day[i]);
        results.push(day.day);
    });
    return results.join('');
  };
  return getHours(parseDays(obj));
};
// console.log(parseTimes(objHours))