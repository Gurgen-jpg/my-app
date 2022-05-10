import s from "./MyPosts.module.css";
import React, {useEffect, useState} from "react";
import Post from "./Post/Post";

import {useDispatch, useSelector} from "react-redux";
import {addPostAC, PostType} from "../../redux/profile-reudcer";
import {AppStateType} from "../../redux/reduxStore";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"


export function MyPosts() {
    let posts = useSelector<AppStateType, PostType[]>(state => state.profilePage.posts)


    let myPostsItem =
        posts.map((p, id) =>
            <Post
                key={id}
                message={p.message}
                likesCount={p.likesCount}
            />)
    //добавляю ссылку на объект

    const dispatch = useDispatch()
    //функция кнопки добавить пост

    const addPost = (newPostText: string) => {
        dispatch(addPostAC(newPostText))
    }
// Стейт получает каждое значение !!!! Добавил формик избавился от контроля глобального стейта
    /*    const onPostOnchange = () => {
            dispatch(onPostOnchangeActionCreator(newPostElement.current!.value))
        }*/

    const validate = Yup.object({
        newPostText: Yup.string().min(1).required('Nothing to post, form is empty')
    })
    return (
        <div className={s.postsBlock}>
            <div>
                <Formik initialValues={
                    {
                        newPostText: '',
                    }}
                        onSubmit={(values, actions) => {
                            addPost(values.newPostText)
                            actions.resetForm({})
                        }}
                        validationSchema={validate}
                >
                    {({values, isValid}) => {

                        return <Form>
                            <div>
                                <div><label htmlFor={'newPostText'}>write new post</label></div>
                                <Field type={'textarea'} name={'newPostText'} placeholder={'new post'}/>
                                <ErrorMessage name={'newPostText'}/>
                                <button type={'submit'}>Add post</button>
                            </div>
                        </Form>
                    }}

                </Formik>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {myPostsItem}
            </div>
        </div>
    )
}