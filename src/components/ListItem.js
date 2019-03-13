import React, { Component } from 'react'

export default class ListItem extends Component {
    getStyle = () => {
        return {
        textDecoration: this.props.completed ? 'line-through' : 'none',
        'flex-wrap': 'wrap',
        'width' : '200px'
        }
    }
    render() {
        return (
        <div style={this.getStyle()}>
            <p onClick={()=>{this.props.updateItem(this.props.index)}} >{this.props.itemtitle}</p>
        </div>
        )
    }
}