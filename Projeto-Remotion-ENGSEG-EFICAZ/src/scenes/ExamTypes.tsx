import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Frame,Header,Title,Reveal,Photo,Label,move} from '../design';
export const ExamTypes=()=>{const f=useCurrentFrame();return <Frame brand="eficaz"><div style={{position:'absolute',inset:0,background:'#0645D2'}}/><Header brand="eficaz" section="03 / EXAMES OCUPACIONAIS"/>
<Photo brand="eficaz" index={1} x={425} y={375} w={655} h={535} style={{opacity:.68,clipPath:`inset(0 ${(1-move(f,0,18))*100}% 0 0)`}}/>
<div style={{position:'absolute',left:0,top:375,width:1080,height:535,background:'linear-gradient(90deg,#0645D2 18%,transparent 85%)'}}/>
<div style={{position:'absolute',left:88,top:495}}><Reveal><Label color="#AFE0FF" style={{marginBottom:24}}>NO INÍCIO DA JORNADA</Label></Reveal><Reveal delay={4} direction="left"><Title size={140}>ADMISSIONAL</Title></Reveal></div>
<div style={{position:'absolute',left:88,right:88,top:947,height:3,background:'#9BCEFF',scale:move(f,7,25),transformOrigin:'left'}}/>
<Photo brand="eficaz" index={2} x={0} y={1010} w={590} h={520} style={{opacity:.6,clipPath:`inset(0 0 0 ${(1-move(f,7,27))*100}%)`}}/>
<div style={{position:'absolute',left:0,top:1010,width:1080,height:520,background:'linear-gradient(270deg,#0645D2 22%,transparent 90%)'}}/>
<div style={{position:'absolute',right:88,top:1135,textAlign:'right'}}><Reveal delay={12}><Label color="#AFE0FF" style={{marginBottom:24}}>NO ENCERRAMENTO DO VÍNCULO</Label></Reveal><Reveal delay={16} direction="right"><Title size={140}>DEMISSIONAL</Title></Reveal></div>
<Label style={{position:'absolute',left:88,top:1580,fontSize:23,letterSpacing:1}}>SAÚDE OCUPACIONAL EM CADA ETAPA.</Label>
</Frame>};
