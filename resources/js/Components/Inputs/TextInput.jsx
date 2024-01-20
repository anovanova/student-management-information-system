import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ placeholder = "" ,type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            class={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full' +
                className
            }
            placeholder={placeholder}
            ref={input}
        />
    );
});