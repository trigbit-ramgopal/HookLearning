import React, { useState } from 'react'
import { TextInput } from 'react-native'

const Search = ({ }) => {
    const [searchTerm, setSearchTerm] = useState('')
    let timeout = null
    onTextChange = (value) => {
        setSearchTerm(value)
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log("call api here")
        }, 1500);
    }

    return (
        <TextInput
            placeholder='Search here...'
            onChange={(e) => this.onTextChange(e.target.value)}
        />
    )
}

export default Search