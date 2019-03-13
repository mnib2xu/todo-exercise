import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {
    getStyle = () => {
        return {
        textDecoration: this.props.completed ? 'line-through' : 'none',
        display : 'flex',
        'flex-wrap': 'wrap',
        'width' : '200px'
        
        }
    }
    render() {
        return ( 
        <div style={this.getStyle()}>

            <h1 onClick={()=>{this.props.update(this.props.index)}}>

            {this.props.title}
            
            </h1>
            
            <button onClick={() => {this.props.delList(this.props.index)}}>
            remove list
            </button>
            
            {this.props.tasks.map(task => {
            return <ListItem 
            itemtitle={task.itemtitle} 
            update={this.props.update} 
            updateItem={this.props.updateItem} 
            getstyle={this.getStyle} 
            index={task.id} 
            completed={task.completed}
            />
            })}
        </div>
        )
    }
}