import React, { useContext } from 'react'
import Code from './Code'
import { DataContext } from '../context/DataProvider'
const CodeSpace = () => {
  const {html, css,js, setHtml, setCss, setJs} = useContext(DataContext)
  return (
    <div className='codespace'>
        <Code 
              name="HTML" 
              language="html" 
              value={html} 
              onChange={(value)=>{setHtml(value)}
          }
        />
        <Code 
          name="CSS" 
          language="css" 
          value={css} 
          onChange={(value)=>{setCss(value)}
          }
        />
        <Code 
          name="JS" 
          language="javascript" 
          value={js} 
          onChange={(value)=>{setJs(value)}
          }
        />
    </div>
  )
}

export default CodeSpace