import React from 'react'
import { useFormik} from 'formik'
import axios from 'axios';

function UserRegister() {
    const validate = (values) => {
        let errors = {} 
        if(!values.email) {
            errors.email = "This field is required"
        }
        if(!values.name) {
            errors.name = "This field is required"
        }
        if(!values.password) {
            errors.password = "this field is required"
        }
        return errors
    }
    const onSubmit = (values) => {
        if(!formik.errors.length) {
            console.log(values)
            axios.post(`http://localhost:5000/users/register`,values)
            .then( (data) => {
                console.log(data)
                localStorage.setItem('user',JSON.stringify(data.data))
                console.log(localStorage.getItem('user'))
                alert("account created successfully")
            })
            .catch( (err) => {
                alert(err)
                alert("unable to create account")
            })
        }
    }
    const initialValues = {
        password:'',
        name:'',
        email:''
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.log(formik.errors)
    return (
        <div>
            <form className="container m-auto mt-5 pt-5" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor='name'>Full name</label>
                    <input type="text" className="form-control" id="name"
                     name="name" onChange={formik.handleChange} value={formik.values.name} 
                     onBlur={formik.handleBlur} aria-describedby="nameHelp" placeholder="Enter Your full name"></input>
                    {formik.errors.name && formik.touched.name? <small className="text-danger">{formik.errors.name}</small>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email"
                     name="email" onChange={formik.handleChange} value={formik.values.email} 
                     onBlur={formik.handleBlur} aria-describedby="emailHelp" placeholder="Enter email"></input>
                    {formik.errors.email && formik.touched.email? <small className="text-danger">{formik.errors.email}</small>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" onChange={formik.handleChange}
                     value={formik.values.password} id="Password" placeholder="Password" 
                     onBlur={formik.handleBlur} name="password"></input>
                    {formik.errors.password && formik.touched.password ? <small className="text-danger">{formik.errors.email}</small>: null}
                </div>
                <button type="submit" className="btn btn-primary mt-2">Register</button>
            </form>
        </div>
    )
}

export default UserRegister
