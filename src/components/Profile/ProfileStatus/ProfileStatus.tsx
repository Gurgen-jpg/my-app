import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    changeStatus: (status: string) => void
}
export const ProfileStatus = (props: PropsType) => {
    const [localStatus, setLocalStatus] = useState<string>('Click to change status')
    const [editMode, setEditMode] = useState<boolean>(false)

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
    return (
        <div>
            {!editMode && <span onClick={onChangeEditModeHandler}>{props.status}</span>}
            {editMode &&
                <input autoFocus={true} onChange={onChangeHandler} onBlur={onBlurHandler}/>
            }
        </div>
    )


};

