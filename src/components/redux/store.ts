import {profileReducer} from "./profile-reudcer";
import {dialogsReducer} from "./dialogs-reducer";

export type PostTypeProps = {
    id: number
    message: string
    likesCount: number
}
export type DialogsTypeProps = {
    id: number
    name: string
}
export type MessageTypeProps = {
    id: number
    message: string
}
export type ProfilePageTypeProps = {
    posts: Array<PostTypeProps>
    newPostText: string
}
export type MessagePageTypeProps = {
    dialogs: Array<DialogsTypeProps>
    message: Array<MessageTypeProps>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageTypeProps,
    messagePage: MessagePageTypeProps

}
type StoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    reRenderEntireTree: (state: RootStateType) => void,
    subscribe: (observe: () => void) => void

    /*addPost :()=> void,
    updateNewPostText :(newText:string)=> void,*/
    dispatch: (action: ActionsTypes) => void

}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActonType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type UpdateNewMessage = {
    type: 'UPDATE-NEW-MESSAGE',
    newMessageText: string
}
export type AddNewMessage = {
    type: 'ADD-NEW-MESSAGE'
}






export type ActionsTypes = AddPostActionType | UpdateNewPostTextActonType | UpdateNewMessage | AddNewMessage
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, it`s my first post', likesCount: 15},
                {id: 2, message: '"Hi, how are you?"', likesCount: 20}
            ],
            newPostText: ''
        },
        messagePage: {
            dialogs: [
                {id: 1, name: 'Gurgen'},
                {id: 2, name: 'Katiy'},
                {id: 3, name: 'Artem'},
                {id: 4, name: 'Kirill'}
            ],
            message: [
                {id: 1, message: 'How is your IT'},
                {id: 2, message: 'Yooo'},
                {id: 3, message: 'Hello man'},
                {id: 4, message: 'Hey!'}
            ],
            newMessageText: ''
        }
    },

    getState() {
        return this._state
    },
    reRenderEntireTree(state: RootStateType) {
    },
    /*addPost (){
        let newPost = {
            id: this._state.profilePage.posts.at(-1)!.id + 1 ,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.reRenderEntireTree(this._state);
    },
    updateNewPostText (newText:string){
        this._state.profilePage.newPostText = newText;
        this.reRenderEntireTree(this._state)
    },*/
    subscribe(observe: () => void) {
        this.reRenderEntireTree = observe
    },
    dispatch(action: ActionsTypes) {
        ///Страница Постов
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this.reRenderEntireTree(this._state)
        /*if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.posts.at(-1)!.id + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this.reRenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this.reRenderEntireTree(this._state)
        }
        ////Страница сообщений и диалогов
        else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.messagePage.newMessageText = action.newMessageText;
            this.reRenderEntireTree(this._state)
        } else if (action.type === ADD_NEW_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.messagePage.newMessageText
            }
            this._state.messagePage.newMessageText = ""
            this._state.messagePage.message.push(newMessage)
            this.reRenderEntireTree(this._state)*/
        }
    }







export default store;
