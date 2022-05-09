import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../redux/users-reducer";

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = (props) => {
    const submit = (values: FilterType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.onFilterChanged(values)
    }

    return (
        <div>
            <Formik initialValues={{
                search: '',
            }}
                    onSubmit={submit}>
                {
                    ({isSubmitting}) => {
                        return <Form>
                            <Field type={'text'} name={'search'}/>
                            <button type={'submit'} >Find</button>
                        </Form>
                    }
                }
            </Formik>


        </div>
    )
}