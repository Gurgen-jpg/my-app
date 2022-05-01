import React, {ChangeEvent, useState} from 'react';

export const ProfileStatus = () => {
    const [status, setStatus] = useState<string>('Click to change status')

    const [editMode, setEditMode] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }
    const onChangeEditModeHandler = () => {
        setEditMode(true)
    }
    const onBlurHandler = () => {
        setEditMode(false)
    }


    return (
        <div>
            {!editMode && <span onClick={onChangeEditModeHandler}>{status}</span>}
            {editMode &&
                <input autoFocus={true} onChange={onChangeHandler} onBlur={onBlurHandler}/>
            }
        </div>
    )


};

