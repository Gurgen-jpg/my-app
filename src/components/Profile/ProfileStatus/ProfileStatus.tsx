import React, {ChangeEvent, useEffect, useState} from 'react';


type PropsType = {
    status: string
    changeStatus: (status: string) => void
}
export const ProfileStatus = (props: PropsType) => {
    const [localStatus, setLocalStatus] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)


    console.log(localStatus)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)

    }
    const onChangeEditModeHandler = () => {
        setEditMode(true)
    }
    const onBlurHandler = () => {
        props.changeStatus(localStatus)
        setEditMode(false)
    }
    console.log()
    return (
        <div>
            {!editMode && <span onClick={onChangeEditModeHandler}>{props.status || `Click to add Status`}</span>}
            {editMode &&
                <input autoFocus={true} onChange={onChangeHandler} onBlur={onBlurHandler} value={localStatus}/>
            }
        </div>
    )


};

