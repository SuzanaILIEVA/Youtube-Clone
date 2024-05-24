import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import { useSearchParams } from 'react-router-dom'
import api from '../Utils/Api'
import VideoCard from '../Components/VideoCard'

const Results = () => {
    const [page,setPage] =useState(1)
    const [token,setToken] = useState()
    const [data,setData] = useState([])


   const [searchParams ] =  useSearchParams()
   // 1)URL'den aratilan terime uygun verileri aldik
   const query= searchParams.get("search_query")
   console.log(query);


   // queri'ye gore istek at
   useEffect(()=>{
    //
    const params = {
        query:query,
        token:page > 1 ? token : undefined,
    }

    // Api'den aratilan terime uygun verileri aldik 
     api.get("/search",{params}).then((res)=>{
        console.log(res)
        // verilerin devamini almamizi saglayacak token state
        setToken(res.data.continuation)

        setData((prev)=> prev.concat(res.data.data))
     })
   },[query,page])
   console.log(token)
   console.log(data)
   console.log(page)


  return (
    <div className='flex gap-3'>
     <SideBar/>

     <div className='mx-auto overflow-auto h-[90vh]'>
       <h1 className='text-xl'>
        <span>{query} için sonuçlar</span>
       </h1>

       <div className='flex flex-col justify-center'>
        {data.map((item,i)=> item.type === "video" &&
        ( <VideoCard video={item} key={i} isRow={true}/>)
           
    )}
    <button onClick={()=> setPage(page + 1)} className='bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition'>Daha Fazla</button>
       </div>
     </div>

    </div>
  )
}

export default Results
