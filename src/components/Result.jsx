import React, { useContext, useEffect, useState } from 'react'
import {DataContext}  from '../context/DataProvider'
const Result = () => {
    const [src, setSrc] = useState('');
    const {html,css,js} = useContext(DataContext)
    const code = `
      <html>${html}</html>
      <style>${css}</style>
      <script>${js}</script>
    `

    useEffect(()=>{
      const timeout = setTimeout(()=>{
        setSrc(code);
      },2000)

      return ()=>{ clearTimeout(timeout)}
    },[html,css,js]);
  return (
    <div>
        <iframe
            srcDoc={src}
            width="100%"
            title='output'
            sandbox='allow-scripts'
            height="100%"
        />
    </div>
  )
}

export default Result