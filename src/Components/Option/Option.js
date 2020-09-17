import React from 'react'

const Option = ({ categoria }) => {
    return (

        <option
            value={categoria.strCategory}
        >{categoria.strCategory}</option>

    )
}

export default Option;
