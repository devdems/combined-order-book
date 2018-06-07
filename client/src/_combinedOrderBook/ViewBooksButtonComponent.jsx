import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Spinner from 'react-spinner-material';

import { FlexDiv } from './Components.styled'

const Container = styled.div`
  flex: 1 0;
  width: 100%;
`
const Button = FlexDiv.extend`
  border-radius: 10px;
  padding: 10px;
  height: 30px;
  border: 1px solid green;
  max-width: 200px;
  cursor: pointer;
  &:active {
    background-color: blue;
  }
  &:hover {
    background-color: green;
  }
`

class CombinedOrderBookComponent extends React.Component {
  static propTypes = {
    initialBookFetching: PropTypes.bool,
    fetchBooks: PropTypes.func.isRequired,
  }

  static defaultProps = {
    initialBookFetching: false,
  }

  render() {
    const { initialBookFetching, fetchBooks } = this.props
    return (
      <Container>
        {
          initialBookFetching ?
            <Spinner
              size={120}
              spinnerColor={"#333"}
              spinnerWidth={2}
              visible={true}
            /> :
            <Button
              onClick={fetchBooks}
            >
              Start Fetching Books
            </Button>
        }
      </Container>
    )
  }
}

export default CombinedOrderBookComponent
