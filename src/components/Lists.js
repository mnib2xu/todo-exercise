import React, { Component } from 'react'
import List from './List'

export default class Lists extends Component {
  render() {
    return this.props.lists.map(list => (
      <List 
      title={list.title} 
      tasks={list.tasks} 
      index={list.id} 
      completed={list.completed}
      update={this.props.update}
      updateItem={this.props.updateItem}
      delList={this.props.delList}
      />
      ));
    }
  }