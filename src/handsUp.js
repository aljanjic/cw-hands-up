function handsUp(num) {

  return [num % 3, Math.floor(num / 3) % 3, Math.floor(num / 9) % 3];

//   raisedHands = [0, 0, 0];

//   for (let i = 0; i < num; i++){
//     if (raisedHands[0] === 2){
//       raisedHands[0] = 0;
//       if (raisedHands[1] === 2){
//         raisedHands[1] = 0
//         if(raisedHands[2] === 2){
//           raisedHands[2] = 0;
//         } else {
//           raisedHands[2] += 1;
//         }
//       } else {
//         raisedHands[1] += 1;
//       }
//     } else {
//       raisedHands[0] += 1;
//     }
//   }

//  return raisedHands;

}

module.exports = handsUp;
