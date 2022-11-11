import {useState, useEffect, useRef} from 'react';

export default function useClickOutside([buttonRef, openNavRef], handler) {
    useEffect(
        () => {
            console.log('render')
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                    if (openNavRef.current && !openNavRef.current.contains(event.target)) {

                        handler(event);
                    }
                }
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [buttonRef, openNavRef, handler]
    );
}
