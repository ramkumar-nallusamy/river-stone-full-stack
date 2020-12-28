import axios from 'axios';
import { useFormik} from 'formik'
import { Link } from 'react-router-dom'

export function Users() {
    const validate = (values) => {
        let errors = {} 
        if(!values.email) {
            errors.email = "This field is required"
        }
        if(!values.password) {
            errors.password = "this field is required"
        }
        return errors
    }
    const onSubmit = (values) => {
        if(!formik.errors.length) {
            console.log(values)
            axios.post(`http://localhost:5000/users/login`,values)
            .then((data) => {
                console.log(data)
                localStorage.setItem('user',JSON.stringify(data.data))
                console.log(localStorage.getItem('user'))
                alert("login Successfully")
            })
            .catch( (err) => {
                alert("incorrect authentication entered. Please try again")
            })
        }
    }
    const initialValues = {
        password:'',
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
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email"
                     name="email" onChange={formik.handleChange} value={formik.values.email} 
                     onBlur={formik.handleBlur} aria-describedby="emailHelp" placeholder="Enter email"></input>
                    {formik.errors.email && formik.touched.email? <small className="text-danger">{formik.errors.email}</small>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" onChange={formik.handleChange}
                     value={formik.values.password} id="Password" placeholder="Password" 
                     onBlur={formik.handleBlur} name="password"></input>
                    {formik.errors.password && formik.touched.password ? <small className="text-danger">{formik.errors.email}</small>: null}
                </div>
                <div className="d-flex mt-3">
                    <button type="submit" className="btn btn-primary mr-4">Log In</button>
                    <Link to="/register">
                        <button type="button" className="btn btn-success">New User Register</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Users
