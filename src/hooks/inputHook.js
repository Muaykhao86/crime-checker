import React from 'react'
// * Reusable Hook for forms
const useInput = (initialValue) => {
const [value, setValue] = React.useState(initialValue)
    return{
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        }
    }
}

export default useInput;