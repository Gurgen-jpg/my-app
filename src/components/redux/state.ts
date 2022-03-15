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
}
export type RootStateType = {
    profilePage: ProfilePageTypeProps,
    messagePage: MessagePageTypeProps
    /*getState: ()=>void,
    reRenderEntireTree :(state:RootStateType)=>void,
    addPost :()=> void,
    updateNewPostText :(newText:string)=> void,
    subscribe: (observe: (state:RootStateType)=>void)=> void*/
}
export type StoreType = {
    _state:RootStateType,
    getState: ()=>RootStateType,
    reRenderEntireTree :(state:RootStateType)=>void,
    addPost :()=> void,
    updateNewPostText :(newText:string)=> void,
    subscribe: (observe: ()=>void)=> void
}

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
            ]
        }
    },
    getState(){return this._state},
    reRenderEntireTree (state:RootStateType) {
    },
    addPost (){
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
    },
     subscribe (observe: ()=> void){
        this.reRenderEntireTree = observe
    }

}
/*let reRenderEntireTree = (state:RootStateType) => {
}*/

/*
let state: RootStateType = {
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
        ]
    }
}*/

/*export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts.at(-1)!.id + 1 ,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    reRenderEntireTree(state);
}*/

/*
export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    reRenderEntireTree(state)
  
}
*/

/*export const subscribe = (observe: (state:RootStateType)=>void) => {
    reRenderEntireTree = observe
}*/

export default store;
