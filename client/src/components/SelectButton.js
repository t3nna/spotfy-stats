import React, {useCallback, useRef, useState} from 'react';
import useClickOutside from "./hooks/useOutsideClick";
import {useDispatch} from "react-redux";
import {setTimeRange} from "./features/paramSlice";
import {startFetching} from "./features/tracksSlice";

function SelectButton({select, setSelect, options}) {
    const [selectOpen, setSelectOpen] = useState(false);

    const buttonRef = useRef()
    const openSelectRef = useRef()

    const outsideHandler = useCallback(
        () => {
            setSelectOpen(false)
        }, [selectOpen])

    useClickOutside([buttonRef, openSelectRef], outsideHandler)

const dispatch = useDispatch()
    // const handleClick = function(item){
    //     setSelect(item)
    //     dispatch(setTimeRange(item))
    //     dispatch(startFetching())
    // }

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