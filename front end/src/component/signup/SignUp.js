import React from 'react';
import {Avatar, Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import './SignUp.css';



import {Form, Formik, Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';


const SignUp = () => {


    const paperStyle ={padding:'50px 30px',width:500,margin:'70px auto'};
    const headerStyle ={margin:0};
    const avatarStyle ={backgroundColor:'green'};
    const buttonStyle ={margin:'20px auto',backgroundColor:'green'};
    const textStyle ={margin:'20px auto'};
    const initialValues={
        username:'',
        email:'',
        password:''
    }

    const validationSchema =Yup.object().shape({
        name:Yup.string().required('Required'),
        email:Yup.string().email('Please enter valid email').required('Required'),
        password:Yup.string().required('Required')
    })

    const onSubmit=(values,props)=>{
        console.log(values);
        props.resetForm();
        console.log(props);
    }
    
    return (
        <div className='body-class' >
           
                <Grid >
                    <Paper elevation={20} style={paperStyle} >
                        <Grid align='center'>
                            <Avatar style={avatarStyle}></Avatar>
                            <h1 style={headerStyle}>Sign Up</h1>
                            <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                        </Grid>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            {(props)=>(
                                <Form >
                                    <Field as={TextField} label='Name' name='username' fullWidth placeholder='Enter your name' style={textStyle} helperText={<ErrorMessage name='username' />} required />
                                    <Field as={TextField} label='Email' name='email' fullWidth placeholder='Enter your email' style={textStyle} helperText={<ErrorMessage name='email' />} required />
                                    <Field as={TextField} label='Password' name='password' fullWidth placeholder='Enter your password' type='password' helperText={<ErrorMessage name='password' />} style={textStyle} required />
                                    <Button type='submit' fullWidth variant='contained' color='primary' style={buttonStyle} >Sign Up</Button>

                                </Form>
                            )}
                        </Formik>
                        {/* <form>
                        <TextField label='Name' fullWidth placeholder='Enter your name' style={textStyle} />
                                    <TextField label='Email' fullWidth placeholder='Enter your email' style={textStyle} />
                                    <TextField label='Password' fullWidth placeholder='Enter your password' type='password' style={textStyle} />
                                    <Button type='submit' fullWidth variant='contained' color='primary' style={buttonStyle} >Sign Up</Button>
                            
                        </form> */}

                    </Paper>

                </Grid>
            
        
          
        </div>
    );
};

export default SignUp;