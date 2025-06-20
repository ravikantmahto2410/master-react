import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {  //Useffect pehli baar call hota hai jaise hi ye component pehli baar load hoga
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt='Git profile' width={300}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ravikantmahto2410')
    return response.json()
}