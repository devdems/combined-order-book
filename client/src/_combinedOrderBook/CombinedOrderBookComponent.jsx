import React from 'react'
import PropTypes from 'prop-types'

export default class CombinedOrderBookComponent extends React.Component {
  static propTypes = {
    fetchingExchanges: PropTypes.bool,
  }

  static defaultProps = {
    fetchingExchanges: false,
  }

  constructor(props) {
    super(props)

    this.props.fetchSupportedExchanges()
  }

  render() {
    const { fetchingExchanges } = this.props
    return (
      fetchingExchanges ?
        <div>LOADING</div> :
        <div>DONE</div>
    )
  }
}
