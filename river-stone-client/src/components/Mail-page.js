import React from 'react';
import { useFormik} from 'formik'
import axios from 'axios';

export function MailPage() {
    const validate = (values) => {
        let errors = {} 
        if(!values.email) {
            errors.email = "This field is required"
        }
        if(!values.subject) {
            errors.subject = "This field is required"
        }
        if(!values.body) {
            errors.body = "this field is required"
        }
        return errors
    }
    const onSubmit = (values) => {
        const body = {
            from:"ramkumar159075@gmail.com",
            to:values.email,
            text:values.body,
            subject:values.subject
        }
        console.log(body)
        axios.post(`http://localhost:5000/mail`,{body})
        .then( (data) => {
            console.log(data)
            alert("mail sent successfully")
        })
        .catch( (err) => {
            console.log(err)
            alert("something wrong please check")
        })
    }
    const initialValues = {
        body:'values from local host',
        subject:'',
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
                    <label htmlFor='name'>Email</label>
                    <input type="email" className="form-control" id="email"
                     name="email" onChange={formik.handleChange} value={formik.values.email} 
                     onBlur={formik.handleBlur} aria-describedby="nameHelp" placeholder="Enter receiver mail id"></input>
                    {formik.errors.email && formik.touched.email? <small className="text-danger">{formik.errors.email}</small>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="form-control" id="subject"
                     name="subject" onChange={formik.handleChange} value={formik.values.subject} 
                     onBlur={formik.handleBlur} aria-describedby="emailHelp" placeholder="Enter subject"></input>
                    {formik.errors.subject && formik.touched.subject? <small className="text-danger">{formik.errors.subject}</small>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="text-area">Body of the Mail</label>
                    <textarea className="form-control" onChange={formik.handleChange}
                     value={formik.values.body} id="text-area" placeholder="Enter body of the mail" 
                     onBlur={formik.handleBlur} name="text-area"></textarea>
                    {formik.errors.body && formik.touched.body ? <small className="text-danger">{formik.errors.body}</small>: null}
                </div>
                <button type="submit" className="btn btn-primary mt-2">Register</button>
            </form>
        </div>
    )
}

export default MailPage

