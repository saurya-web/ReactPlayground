import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, LinearProgress, Typography } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import * as Yup from 'yup'
import { DisplayFormikState } from "./helper"

export default function Registration() {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().max(5, 'Must be max 5 characters').required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 1000);
            }}
        >
            {(props) => (
                <Form>
                    <Typography variant="h5">Registration Form - Formik Material UI</Typography>
                    {/* <div>{JSON.stringify(props)}</div> */}
                    <Field
                        component={TextField}
                        name="email"
                        type="email"
                        label="Email"
                        fullWidth
                        autoComplete={false}
                        required
                        style={{ marginTop: 20, marginBottom: 20 }}
                    />
                    <br />
                    <Field
                        component={TextField}
                        type="password"
                        label="Password"
                        name="password"
                        fullWidth
                        style={{ marginTop: 20, marginBottom: 20 }}
                    />
                    {props.isSubmitting && <LinearProgress />}
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={props.isSubmitting}
                        onClick={props.submitForm}
                        style={{ marginTop: 20, marginBottom: 20 }}
                    >
                        Submit
                    </Button>
                    <DisplayFormikState {...props} />
                </Form>
            )
            }
        </Formik >
    )
}
