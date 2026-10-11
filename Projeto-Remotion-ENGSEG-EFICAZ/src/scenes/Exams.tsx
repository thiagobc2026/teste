import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Frame,Header,Title,Reveal,Photo,Arrow,Footer,move} from '../design';
export const Exams=()=>{const f=useCurrentFrame();return <Frame brand="eficaz" light><Header brand="eficaz" section="02 / SAÚDE OCUPACIONAL" light/>
<div style={{position:'absolute',left:88,top:340,zIndex:3}}><Reveal><Title size={239}>EXAMES</Title></Reveal><Reveal delay={7}><Title size={92} style={{lineHeight:1.03}}>CLÍNICOS E<br/>OCUPACIONAIS.</Title></Reveal></div>
<Photo brand="eficaz" index={1} x={190} y={770} w={890} h={740} style={{clipPath:`polygon(${(1-move(f,3,20))*100}% 0,100% 0,100% 100%,0 100%,0 11%)`}}/>
<div style={{position:'absolute',left:0,top:795,width:190,height:715,background:'#063BCC',translate:`${(1-move(f,6,24))*-230}px 0`}}><div style={{position:'absolute',top:245,left:72,width:46,height:46,border:'3px solid #9ED5FF',borderRadius:'50%'}}/><div style={{position:'absolute',top:315,left:93,width:3,height:310,background:'#9ED5FF'}}/></div>
<Arrow color="#063BCC" size={96} style={{position:'absolute',right:88,top:590,rotate:`${(1-move(f,8,24))*-50}deg`}}/><Footer brand="eficaz" text="Cuidado presente na rotina." light/>
</Frame>};
