import PropTypes from 'prop-types'
import { useState } from "react";

export default function SearchForm({onSubmit}) {
    const [query, setQuery] = useState('')
      const handelChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(query)
        setQuery('')
    }
  
    return <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handelChange} />
        <button type="submit">submit</button>
    </form>
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}