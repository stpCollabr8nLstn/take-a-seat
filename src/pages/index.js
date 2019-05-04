import React from 'react';
import { graphql } from 'gatsby';
import Seat from '../components/Seat';

export default ({ data }) => {
  const seats = data.allSeat.edges;
  return (
    <div>
      {seats.map(seat => (
        <Seat occupied={seat.node.occupied} />
      ))}
    </div>
  )
}

export const query = graphql`
  query AllSeatsQuery {
    allSeat {
      edges {
        node {
          row
          seat
          occupied
          class
        }
      }
    }
  }
`;