import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  flex-grow: ${props => props.grow ? props.grow : 1};
  flex-shrink: ${props => props.shrink ? props.shrink : 0};
  justify-content: center;
  align-items: center;
  align-self: stretch;
  ${'' /* border: 1px solid blue; */}
`
export const FlexSpacer = styled.div`
  flex-grow: ${props => props.grow ? props.grow : 1};
`
