import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Spinner from 'react-spinner-material';

const Container = styled.div`
  display: flex;
  flex: 1 0;
  width: 100%;
`
const Button = styled.div`
  
`

class CombinedOrderBookComponent extends React.Component {
  static propTypes = {
    fetchingBooks: PropTypes.bool,
  }

  static defaultProps = {
    fetchingBooks: false,
  }

  render() {
    const { fetchingBooks } = this.props
    return (
      <Container>
        {
          fetchingBooks ?
            <Spinner
              size={120}
              spinnerColor="#333"
              spinnerWidth={2}
              visible={true}
            /> :

        }
      </Container>
    )
  }
}

export default CombinedOrderBookComponent
