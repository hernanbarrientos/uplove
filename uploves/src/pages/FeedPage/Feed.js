import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const Feed = () => {
    useProtectedPage()
    return(
        <div>
            <h1>Feed</h1>
        </div>
    )


}
export default Feed