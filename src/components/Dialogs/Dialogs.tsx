import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogs/DialogItem";
import Message from "./message/message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, Form, Formik} from "formik";
import {TextField} from "../Login/LoginPage";

const Dialogs = (props: DialogsPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget!.value
        props.onChange(text)
    }
    const onClickHandler = (newMessageText: string) => {
        props.onClick(newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message} id={m.id}/>)}

                <Formik
                    initialValues={{newMessageText: ''}}
                    onSubmit={(values, actions)=>{
                        onClickHandler(values.newMessageText)
                        actions.resetForm({})
                    }}
                >
                    {({values}) => {
                        return <Form>
                            <label htmlFor={'newMessageText'}>new message</label>
                            <div>
                                <Field name="newMessageText" placeholder="Message Text"/>
                                <button type={'submit'}>Send message</button>
                            </div>
                        </Form>
                    }}
                </Formik>

                {/*<textarea value={props.newMessageText} onChange={onChangeHandler}></textarea>
                <button className={s.button} onClick={onClickHandler}>send</button>
                */}


            </div>
        </div>
    )
}

export default Dialogs;