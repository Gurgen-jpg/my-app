import React from 'react';
import {Formik, Form} from "formik";
import {ErrorMessage, useField} from "formik";
import s from "./loginPage.module.css";
import * as Yup from "yup";
import {loginThunkC} from "../redux/authReducer/auth-reducer";
import {useDispatch} from "react-redux";

type TextFieldType = {
    label: string
    name: string
    type: string
}

export const TextField = ({label, ...props}: TextFieldType) => {
    const [field, meta] = useField(props)
    return (
        <div className={s.text_field}>
            <label className={s.text_field__label} htmlFor={field.name}>{label}</label>
            <input className={meta.touched && meta.error ? s.text_field_error : s.text_field__input} {...field} {...props}/>
            <ErrorMessage name={field.name}/>
        </div>
    )
}

export const LoginForm = () => {
    const validate = Yup.object({
        login: Yup.string().max(40, 'Must be 40 characters or less').required('Required'),
        password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
    })
    const dispatch = useDispatch()
    return (
        <Formik initialValues={
            {
                login: '',
                password: '',
                saveForm: false,
            }
        }
                validationSchema={validate}
                onSubmit={(values) => {
                    const {login, password, saveForm} = values
                    dispatch(loginThunkC(login, password,saveForm))
                }}>
            {
                ({values}) =>
                    <Form>
                        <TextField label={'Login'} name={'login'} type={'text'}/>
                        <TextField label={'Password'} name={'password'} type={'password'}/>
                        <TextField label={'Remember me'} name={'saveForm'} type={'checkbox'}/>
                        <button type="submit">Submit</button>
                    </Form>
            }


        </Formik>
    )
};

export const LoginPage = () => {
    return (
        <div className={s.wrapper}>
            <h2>Login</h2>
            <LoginForm/>
        </div>
    );
};


