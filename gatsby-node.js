const fetch = require('isomorphic-fetch');
const crypto = require('crypto');

const url = 'https://s3.amazonaws.com/frontend-candidate-homework.lola.co/seats.json';

const getSeatData = () => {
  return fetch(url)
    .then(res => res.json())
};

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const seatMap = await getSeatData();
  console.log(seatMap);
  seatMap.forEach((s, i) => {
    createNode({
      seat: s.seat,
      row: s.row,
      class: s.class,
      occupied: s.occupied,
      // Required fields.
      id: `${s.row}${s.seat}`,
      parent: null,
      children: [],
      internal: {
        type: `Seat`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(seatMap))
          .digest(`hex`),
      }
    })
  })
  return;
};
