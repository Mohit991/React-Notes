import React from 'react'

const Student = ({name = "Default_name", age, isStudent}) => {
  return (
    <div className='student'>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

export default Student