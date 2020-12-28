import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            user: ''
        }
    }
    
    componentDidMount() {
        this.setState({
            user:JSON.parse(localStorage.getItem('user'))
        })
    }
    render() {
        return (
            <div className="d-flex justify-content-between m-auto h-100-vh w-50 align-items-center">
                <Link to='/users'>
                    <button className="btn btn-primary p-3">Go to User page</button>
                </Link>
                <Link to='/admin'>
                    <button className="btn btn-primary p-3">Go to Admin page</button>
                </Link>
                <Link to={`${this.state.user ? '/mail':''}`}>
                    <button className={`${this.state.user ? '': 'disabled'} btn btn-primary p-3 bold`} >To send Mail</button>
                </Link>
            </div>
        )
    }
}

export default Home
