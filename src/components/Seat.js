import styled from "styled-components"

const Seat = styled.div`
  height: 16px;
  width: 16px;
  background: ${props => props.occupied ? 'gray' : 'pink'};
`;

export default Seat;