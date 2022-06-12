import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
function UseDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay)

        return () => clearTimeout(handler)
    }, [delay, value])

    return debouncedValue;

}
UseDebounce.PropTypes = {
    value: PropTypes.string,
    delay: PropTypes.number
}
export default UseDebounce;