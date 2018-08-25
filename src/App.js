import React, { Component } from 'react'
import firebase from './config'

class App extends Component {
    state = {
        speed: 10,
    }

    componentWillMount() {
        const rootRef = firebase
            .database()
            .ref()
            .child('react')

        const speedRef = rootRef.child('speed')

        speedRef.on('value', snap => {
            this.setState({
                speed: snap.val(),
            })
        })
    }

    render() {
        return <div className="App">{this.state.speed}</div>
    }
}

export default App
