import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Spinner from 'react-spinner-material';

import { FlexDiv } from './Components.styled'

const Container = styled.div`
  flex: 1 0;
  width: 100%;
  text-align: center;
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

class FetchBookButtonComponent extends React.Component {
  static propTypes = {
    initialBookFetching: PropTypes.bool,
    fetchBookInitial: PropTypes.func.isRequired,
    autoUpdateIntervalObj: PropTypes.any,
  }

  static defaultProps = {
    initialBookFetching: false,
    autoUpdateIntervalObj: '',
  }

  render() {
    const {
      initialBookFetching,
      fetchBookInitial,
      autoUpdateIntervalObj,
     } = this.props
    return (
      <Container>
        {
          initialBookFetching ?
            <Spinner
              size={60}
              spinnerColor={"#333"}
              spinnerWidth={4}
              visible={true}
            /> :
            <Button
              onClick={fetchBookInitial}
            >
              {
                autoUpdateIntervalObj ?
                'Change Params' :
                  'Start with current params'
              }
            </Button>
        }
      </Container>
    )
  }
}

export default FetchBookButtonComponent
