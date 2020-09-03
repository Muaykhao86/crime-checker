import React, { useState } from 'react'
// * Reusable Hook for forms
export default function useInput(initialValue) {
const [value, setValue] = useState(initialValue)
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
