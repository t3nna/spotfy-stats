import React, {useCallback, useRef, useState} from 'react';
import useClickOutside from "./hooks/useOutsideClick";

function SelectButton({select, setSelect, options}) {
    const [selectOpen, setSelectOpen] = useState(false);

    const buttonRef = useRef()
    const openSelectRef = useRef()

    const outsideHandler = useCallback(
        () => {
            setSelectOpen(false)
        }, [selectOpen])

    useClickOutside([buttonRef, openSelectRef], outsideHandler)



    return (
        <div className="select-container">

            <button
                ref={buttonRef}
                className={'btn-select | fw-medium'}
                    onClick={()=>setSelectOpen(!selectOpen)}>{select}</button>
            <div
                ref={openSelectRef}
                className={selectOpen ? `select-options open`: `select-options`}>
                {
                    options.map((item, index) => (
                        <p className={'fw-medium fs-500'} key={index} onClick={()=>setSelect(item)}>{item}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default SelectButton;