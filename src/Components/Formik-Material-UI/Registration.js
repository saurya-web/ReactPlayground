import React from 'react'
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Typography } from '@material-ui/core';
import { TextField } from 'formik-material-ui'

export default function Registration() {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 1000);
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Form>
                    <Typography variant="h5">Registration Form - Formik Material UI</Typography>
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
                    {isSubmitting && <LinearProgress />}
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={submitForm}
                        style={{ marginTop: 20, marginBottom: 20 }}
                    >
                        Submit
          </Button>
                </Form>
            )}
        </Formik >
    )
}
