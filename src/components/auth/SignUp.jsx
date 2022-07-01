import React from 'react'
import { FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core'
import { Button, Modal, Typography } from '@mui/material'
import * as Yup from "yup"
import { useFormik } from 'formik'

const useStyles = makeStyles((theme) => ({

    modalcontainer: {
        backgroundColor:"white !important",
        borderRadius: "25px",
        height: "auto",
        width: "300",
        position: "absolute",
        top: "20%",
        left: "20%",
        bottom: "20%",
        right: "20%",
    },

    button: {
        // background: "#3bbab9",
        position: "absolute",
        top: "5px",
        right: "5px",
        "&:hover": {
            "background": "red",
        },
    },

    head: {
        textAlign: "center",
        position: "relative",
        paddingTop: theme.spacing(2)
    },
    item: {
        width: "90%",
        margin: "20px auto",

    },

    input: {
        width: "100%",
        "&:hover":{
            backgroundColor:"rgba(246, 238, 238) !important",
        }

    },

    form:{
        backgroundColor:"white !important",
    },

    btn:{
        padding:theme.spacing(1),
        marginBottom:"20px"
    }
}))


function SignUp({ reg, setReg }) {
    const classes = useStyles();

    const regValidation = Yup.object({
        email: Yup.string().email("Invalid email").required("You omited Email"),
        firstName: Yup.string().required("You omitted first name "),
        lastName: Yup.string().required("You omitted last name "),
        username: Yup.string().required("You omitted username ").min(5, "Should be up to 5").max(12, "Cannot be more than 12"),
        gender: Yup.string().required("You omitted gender "),
        password: Yup.string().required("Password is requried"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "password must match")


    })
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            gender: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: ""

        },


        validationSchema: regValidation,

        onSubmit: (values, action) => {
            console.log(values);

            action.setSubmitting(false)
        }
    })

    return (
        <Modal open={reg} className={classes.modalcontainer}>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
                <div className={classes.head}>
                    <Typography variant="h4" >
                        SignUp
                    </Typography>
                    <Button variant="contained" className={classes.button} onClick={() => setReg(false)}> &times;</Button>
                </div>

                <div className={classes.item}>
                    <TextField
                        type="email"
                        variant='outlined'
                        label="Email"
                        name="email"
                        id="email"
                        values={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        className={classes.input} />
                </div>

                <div className={classes.item}>
                    <TextField
                        type="text"
                        variant='outlined'
                        label="First Name"
                        name="firstName"
                        id="firstName"
                        values={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        className={classes.input} />
                </div>
                <div className={classes.item}>
                    <TextField
                        type="text"
                        variant='outlined'
                        label="lastName"
                        name="lastName"
                        id="firstName"
                        values={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        className={classes.input} />
                </div>

                <div className={classes.item}>
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Username"
                        name="username"
                        id="username"
                        values={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        className={classes.input} />

                    <div className={classes.item}>
                        <FormLabel component="h5">Gender</FormLabel>
                        <RadioGroup className={classes.radio}>
                            <FormControlLabel
                                value="M"
                                control={<Radio size="small" />}
                                label="Male"
                            />

                            <FormControlLabel
                                value="F"
                                control={<Radio size="small" />}
                                label="Female"
                            />

                            <FormControlLabel
                                value="Others"
                                control={<Radio size="small" />}    
                                label="Others"
                            />
                        </RadioGroup>
                    </div>
                    <div className={classes.item}>
                        <Button variant='contained' align="rigth" className={classes.btn} color="primary"> Submit</Button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default SignUp