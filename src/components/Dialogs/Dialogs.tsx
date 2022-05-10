import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogs/DialogItem";
import Message from "./message/message";
import * as Yup from "yup";
import {DialogsPropsType} from "./DialogsContainer";
import {ErrorMessage, Field, Form, Formik} from "formik";

const Dialogs = (props: DialogsPropsType) => {

    const onClickHandler = (newMessageText: string) => {
        props.onClick(newMessageText)
    }
    const validate = Yup.object({
        newMessageText: Yup.string().trim().min(1,'Message is empty').required('Message is empty')
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message} id={m.id}/>)}

                <Formik
                    initialValues={{newMessageText: ''}}
                    onSubmit={(values, actions) => {
                        onClickHandler(values.newMessageText)
                        actions.resetForm({})
                    }}
                    validationSchema={validate}
                >
                    {(formik) => {
                        return <Form>
                            <label htmlFor={'newMessageText'}>new message</label>
                            <div>
                                <Field as={'textarea'} name="newMessageText" placeholder="Message Text"/>
                                <button type={'submit'} disabled={!formik.isValid}>Send message</button>
                                <ErrorMessage name={'newMessageText'}/>
                            </div>
                        </Form>
                    }}
                </Formik>

            </div>
        </div>
    )
}

export default Dialogs;