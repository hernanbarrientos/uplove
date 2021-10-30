import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constants/urls'



const Post = () => {

    const [curtido, setCurtido] = useState(false)

    useEffect(() => {
        axios.get(`${BASE_URL}`)

    }, [])


return(

    <div>
        <p>Vai dar tudo certo!</p>
    </div>

)

}

export default Post