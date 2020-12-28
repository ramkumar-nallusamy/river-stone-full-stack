import React, { Component } from 'react'
import axios from 'axios';

export class Admin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users:''
        }
    }
    activateToggle(element) {
        axios.put(`http://localhost:5000/users/user/${element._id}`,{isActive: !element.isActive})
        .then( (data) => {
            console.log(data)
            this.getAllUsers()
        })
        .catch( (err) => {
            console.log(err)
        })
    }
    getAllUsers() {
        axios.get(`http://localhost:5000/users/`)
        .then( (data) => {
            console.log(data.data)
            const items = data.data.map( element => 
                <div class="col-sm-4 my-4" key={element._id}>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{element.name}</h5>
                            <p class="card-text">{element.email}</p>
                            {element.isActive ? <button onClick={() => this.activateToggle(element)} className="btn btn-primary">Deactivate</button> : <button onClick={() => this.activateToggle(element)} className="btn btn-primary">Activate</button>}
                        </div>
                    </div>
                </div>)
            this.setState({
                users:items
            })
            console.log(this.state.users)
        })
        .catch( (err) => {
            console.log(err)
        })
    }
    componentDidMount() {
        this.getAllUsers()
    }
    
    render() {
        return (
            <div>
                <div class="row m-5">
                    {this.state.users}
                </div>
            </div>
        )
    }
}

export default Admin