import { useEffect } from 'react'
import './Typewriter.css'

function Typewriter({data = [], TypeSpeed = 100, MsgDelay = 2000}) {
useEffect(() => {
let CharactarPos = 0;
let MsgBuffer = '';
let MsgIndex = 0;
let delay;

function StartTyping() {
    let id = document.getElementById("typing-text");
    
    if (CharactarPos !== data[MsgIndex].length) {
       MsgBuffer = MsgBuffer + data[MsgIndex].charAt(CharactarPos);
       id.value = MsgBuffer + " ";
       delay = TypeSpeed;
        } else {
delay = MsgDelay;
MsgBuffer = '';
CharactarPos = -1;
if (MsgIndex !== data.length-1) {
    MsgIndex++;
} else {
    MsgIndex = 0;
}
        }
           
CharactarPos++;
setTimeout(StartTyping, delay);
    }
StartTyping();

}, [ data, TypeSpeed, MsgDelay]);

  return (

    <textarea id="typing-text" readOnly></textarea>
   
  )
}

export default Typewriter
