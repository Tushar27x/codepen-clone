import React, { useState } from 'react'

import CodeIcon from '@mui/icons-material/Code';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Editor } from '@monaco-editor/react';
const Code = (props) => {
    const [full, setFull] = useState(true);
    const getIcon = ()=>{
        if(props.name === 'HTML'){
            return <CodeIcon />
        }else if(props.name === 'CSS'){
            return <CssIcon />
        }else if(props.name === 'JS'){
            return <JavascriptIcon />
        }
    }
    const getDefaulValue = ()=>{
        if(props.name === 'HTML'){
            return "<!-- write html code -->"
        }else if(props.name === 'CSS'){
            return "/* write css code */"
        }else if(props.name === 'JS'){
            return "//write javascript code"
        }
    }


    const options = {
        minimap:{enabled:false}
    }

    const handleChange=(value)=>{
        props.onChange(value);
    }
    return (
    <div className='editor-window' style={full? null : {width:"10%", flexGrow:0}}>
        <div className='code-top'>
            <div className='code-icon-title'>
                <div className='icon'>
                    {getIcon()}                    
                </div>
                <div className='title'>
                    {props.name}
                </div>
            </div>
            <div className='toggle-full'>
                <CloseFullscreenIcon onClick={()=> setFull(!full)}
                />
            </div>
        </div>
        
        <Editor 
            theme='vs-dark'
            height="50vh" 
            defaultLanguage={props.language}
            defaultValue={getDefaulValue()}
            options={options}
            value={props.value}
            onChange={handleChange}
        />  
        
    </div>
  )
}

export default Code