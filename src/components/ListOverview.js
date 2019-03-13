import React, { Component } from 'react'
import Lists from './Lists'

export default class ListOverview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lists: [
                {
                    title: 'Chores', 
                    tasks: [ 
                        {
                        itemtitle: 'Wash stroopwafel from clothes',
                        completed: false,
                        id: 0.1
                        },
                        {
                        itemtitle: 'Remove stroopwaffel stains from table',
                        completed: false,
                        id: 0.2
                        }
                    ],
                    id: 0,
                    completed: false
                },
                {
                    title: 'Shopping', 
                    tasks: [ 
                        {
                        itemtitle: 'Purchase stroopwaffel',
                        completed: false,
                        id: 1.1
                        },
                        {
                        itemtitle: 'Buy stroopwafel cleaning gear',
                        completed: false,
                        id: 1.2
                        }
                    ],
                    id: 1,
                    completed: false
                }
            ]
        }
        this.update = this.update.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.delList = this.delList.bind(this)
    }

    update(id) {
        this.setState({ lists: this.state.lists.map(list => {
            if (list.id === id) {
                list.completed = !list.completed
            } 
            return list
        }) });
    }

    updateItem(id) {
        this.setState({ lists: this.state.lists.map(list => {
            list.tasks.map(items => {
                if (items.id === id) {
                    items.completed = !items.completed
                }
                return items
            }) 
            return list
        }) });
    }

    delList(id) {
        let newArray = [...this.state.lists]
        newArray.splice(id, 1); 
        this.setState({ lists: newArray})
    }
    
    render() {
        return (
        <div>
            <Lists 
            lists={this.state.lists} 
            update={this.update}
            updateItem={this.updateItem}
            delList={this.delList}
            />
        </div>
        )
    }
}