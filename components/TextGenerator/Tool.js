"use client";

import React, { useState, useEffect } from "react";
import SlateEditor from "./SlateEditor";
import DOMPurify from 'dompurify';
import { Language } from "./Language";

export const Tool = ({userData}) => {

  const [has_subscription, setHaveSubscription] = useState(false);
  const inputCallback = (val) => {
    setTextInput(val);
  }
  const [words, setWordCount] = useState(0);
  function getCount(str) {
    return str.split(' ').filter(function(num) {
     return num != ''
    }).length;
   }

  const backspace = (val) => {
     setTextInput(val);
   
     let filterText = DOMPurify.sanitize(val, {ALLOWED_TAGS: [], FORBID_ATTR: ['style', 'dir', 'id', 'class']});
     filterText = filterText.replace(/&nbsp;/g, "");
     var countWord = getCount(filterText);
     setWordCount(countWord);
   }
   const [placeholder, setPlaceHolder] = useState(true);

  // Start of modes module
  const [showmodes, setShowModes] = useState(false);
  const showModes = () => {
      setShowModes(!showmodes);
  }
  const [mode, setMode] = useState({text: 'Premium Mode'});
  const changeMode = (text) => {
   if(text === 'Premium Mode') {
       setMode({...mode, text: "Premium Mode"});    
       setShowModes(false);
   }
   if(text === 'Lightning Mode') {
       if(has_subscription){
          setMode({...mode, text: "Lightning Mode"});
          setShowModes(false);
       }else{
         alert('Please subscribe to our monthly plan to unlock Lightning/Unlimited Mode')
       }
     }
   }
   // End of modes module

   // Language module
   const [show_language, setShowLanguage] = useState(false);
   const [language, setLanguage] = useState('English');
   const changeLanguage = (lang) => {
     setLanguage(lang);
     setShowLanguage(false);
   }
   const showLanguage = () => {
      if(show_language === true){
         setShowLanguage(false);
      }else{
         setShowLanguage(true);
      }
   }
   // End Language module

   // Start of reset module 
   const [disable_reset, setDisableReset] = useState(false);
   const [reset_editor, setResetEditor] = useState(false);
   const resetInputText = () => {
      setTextInput('');
      setResetEditor(true);
      setRequest(0);
      setParaphrasedText('');
   } 
   const resetEditorFalse = () => {
      setResetEditor(false);
   }
   // End of reset module 

   // Start of content conversion module - paraphrasing
   const [request_process, setRequestProcess] = useState(0);
   const [textInput, setTextInput] = useState('');
   const [request, setRequest] = useState(0);
   const [paraphrasedText, setParaphrasedText] = useState('');
   let msgCnt = 0;
   var source;
   const free_word_limit = 300;
   const [TextBottomRight, setTextBottomRight] = useState(false);

   const paraphrase2 = () => {
     alert('Coming soon...')
   }

   return(
    <div id='tool'>
    <div id="top-bar">
        <span id="mode">
          <span id="mode-title"><i className="feather-cast"></i> Mode: </span>
          <button onClick={showModes}>{mode.text === 'Premium Mode' ? 'Premium' : 'Lightning (Unlimited)'}</button>
          { showmodes === true ? 
            <span id="mode-dropdown">
              <span className="tooltip" onClick={() => changeMode('Premium Mode')}>Premium<span className="tooltiptext">95% Accuracy , Formatted results.</span></span>
              <span className="tooltip" onClick={() => changeMode('Lightning Mode')}>Lightning (Unlimited)🔥{has_subscription ? '' : <i className="feather-lock" style={{color: '#828282', fontSize: '15px', verticalAlign: 'top'}}></i> }<span className="tooltiptext">85% Accuracy, Lightning Fast & Unlimited usage.</span></span>
            </span>
          : ''
          }
        </span>

       <Language 
          language={language} 
          show_language={show_language} 
          showLanguage={showLanguage} 
          changeLanguage={changeLanguage}
       />

       <ul id="topbar-ul">
          <li>{mode.text === 'Premium Mode' ? <i className="feather-check"></i> : <i className="feather-x"></i> } Retains Formatting</li>
          <li><i className="feather-check"></i> Perfect Grammar</li>
          <li><i className="feather-check"></i> High Readability Score</li>
        </ul>
        
        <a id="documentation" href="/documentation"><i className="feather-file-text"></i> Docs</a>
 
        <span className="tooltip" id="tooltip-reset">{ disable_reset === true ? <i className="feather-repeat" style={{color: '#999', cursor: 'no-drop'}}></i> : <i className="feather-repeat" onClick={resetInputText}></i> }<span className="tooltiptext">Reset</span></span>
    </div>
    <div id="row justify-content-center">
      <div className="col-lg-6" id="left-column">
        <div id="InputWrapper">
           <SlateEditor focus={true} inputCallback={inputCallback} resetEditor={reset_editor} resetEditorFalse={resetEditorFalse} backspace={backspace}/>
           { placeholder === true ?
                  <div id="placeholder" onClick={() => setPlaceHolder(false)}>
                    <h4>Insert your AI content here to make it Undetectable</h4> 
                    <br></br>You can add content directly from any AI tool, no need to process it or do anything, this tool will not only humanize the content but also make it sound better.
                    <br></br><br></br>Press the button "Make it Human" after pasting or writing the content 
              </div> 
              : '' 
                }
          </div>
        <div id="bottom-left">
           { userData.user_status === 'success' ?
            <>
            {/* { quota.plan === 700 || monthly_credits_exhausted === true ?
              <p id="small-text-left-bottom">
                <DiamondIcon style={{
                  fontSize: '14px', 
                  color: '#fdb114', 
                  verticalAlign: 'sub',
                  marginRight: '4px',
                }}/>
                <span style={{
                   textDecoration: 'underline',
                   cursor: 'pointer'
                 }} 
                 onClick={() => {setProModal(true); setShowBack(false); setSecondPro(true);}}>
                 Upgrade
                </span> to remove Word limit & improve conversion quality
             </p>
              : ''
            } */}
             <span id="quota">
               { has_subscription && mode.text === 'Lightning Mode' ? 
                 <span className="quota-col">
                   {/* <AccessTimeIcon/> */}
                   <span>Lightning Mode</span> <br></br>
                   <span><small>Unlimited Words</small></span>
                 </span>
                : 
               <span className="quota-col">
                 {/* <AccessTimeIcon/> */}
                 {/* <span>{quota.text} {showupdatebtn === true ? <>{quota.number}</> : '' }</span> <br></br> */}
                 <span>Words 1000</span> <br></br>
                 {/* { showupdatebtn === true ?
                   <button onClick={() => {setProModal(true); setSecondPro(true);}} className="myupgrade">Buy Words</button>
                   :
                 <>  
                 <span><b>{quota.number} Words</b></span>
                 <span className="tooltip">
                   <InfoOutlinedIcon/>
                   <span className="tooltiptext">{quota.tooltip}</span>
                   <span className="tooltiptext">Example text</span>
                 </span> 
                 </>
                 } */}
               </span>
              }
 
               <span className="quota-col">
                 {/* <SearchIcon/> */}
                 <span>Words</span><br></br>
                 <span id="word-count">
                 {/* <b>{words}/{quota.plan === 700 ? free_word_limit : '1500'}</b> */}
                 <b>200/1500</b>
                 {/* { CountWarning === true ?
                  <span className="tooltip"><ErrorOutlineIcon style={{color: 'red'}}/>
                     <span className="tooltiptext warning-count">Words limit exceeded. Upgrade.</span>
                   </span>
                   : ''
                  } */}
                 </span>
               </span>
               <span className="quota-col tos">
                 <input
                  type="checkbox"
                  name="tos"
                  // onChange={handleTosChange}
                  // checked={TosChecked}
                 />
                 <span>I AGREE TO THE <a href="/tos" target="_blank">TOS</a> (NO ACADEMIC MISUSE)</span>
               </span>
             </span>
               {/* { matches_medium === true ?
                 <button id="paraphrase" type="button" className={login.account === 'active' ? 'paraphrase-loggedin' : ''} onClick={paraphrase2}><i></i><span>{ request_process === 1 ? <span class="dot-pulse"></span> : 'Humanize'}</span></button>
               :
                 <button id="paraphrase" type="button" className={login.account === 'active' ? 'paraphrase-loggedin' : ''} onClick={paraphrase2}><i></i><span>{ request_process === 1 ? <span class="dot-pulse"></span> : 'Make it Human'}</span></button>
               } */}
               <button id="paraphrase" type="button" className="btn-default btn-small round" onClick={paraphrase2}><i></i>Humanize</button>
             </>
            : 
              <span id="quota" style={{width: '100%', position: 'relative'}}>
                <span className="quota_login" onClick={() => {setShow(true); setToggle('switch to login'); }}>Login</span> 
                <span className="quota_login"> | </span>
                <span className="quota_login" onClick={() => {setShow(true); setToggle('switch to register'); }}>Sign Up</span>
                <button id="paraphrase" type="button" style={{position: 'absolute', top: '-8px', right: '2px'}} onClick={() => {setShow(true); setToggle('switch to login'); }}>Humanize</button>
              </span>
           }
 
        </div>
      </div>
      <div className="col-lg-6" id="right-column">
       { request === 2 ? 
           <>
           <div id="result-warpper">
             <div id="result" className={ height_decresed === true ? 'tool-height-decresed' : ''} contentEditable={true} suppressContentEditableWarning={true} dangerouslySetInnerHTML={{__html: paraphrasedText}} />
           </div>
           <div id="right-bottom">
              <div>
               { mode.text !== 'Premium Mode' && TextBottomRight === true ?
                 <span id="TextBottomRight">Finding the tone too informal? Try <span onClick={() => changeMode('Premium Mode')}>Premium Mode</span></span>
                 : ''
               }
                <span className="tooltip" onClick={copyContent}><ContentCopyIcon/><span className="tooltiptext">Copy</span></span>
              </div>
             </div>
             </>
         : ''
       }
      </div>
    </div>
   </div>
   )
}