import React from 'react'

class SingleGridCell extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      expanded: false,
      selected_id: '',
      window_width: window.innerWidth
    }
  }

  cellClick (event) {
    this.props.handleCellClick(event)
  }

  render () {
    var SingleGridCellStyle = {
      background: 'url(' + this.props.SingleGridCellData['img'] + ') no-repeat center center',
      backgroundSize: this.props.cellSize,
      width: this.props.cellSize,
      height: this.props.cellSize,
      display: 'inline-block',
      margin: this.props.cellMargin,
      marginBottom: 25,
      position: 'relative',
      cursor: 'pointer'
    }

    return (
      <li className='SingleGridCell' style={SingleGridCellStyle} id={this.props.id} onClick={this.cellClick.bind(this)} />
    )
  }
 }
export default SingleGridCell;