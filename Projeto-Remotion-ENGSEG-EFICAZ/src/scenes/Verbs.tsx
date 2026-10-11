import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {Frame,Header,Title,Reveal,Arrow,Label,move} from '../design';
export const Verbs=()=>{const f=useCurrentFrame();return <Frame brand="engseg"><AbsoluteFill style={{background:'#21E66A',color:'#052A16'}}/><Header brand="engseg" section="UMA VISÃO INTEGRADA" light/>
<div style={{position:'absolute',left:88,top:405,color:'#052A16'}}><Reveal delay={0} direction="left"><Title size={183}>ORGANIZAR.</Title></Reveal><div style={{height:37}}/><Reveal delay={13} direction="right"><Title size={183}>ORIENTAR.</Title></Reveal><div style={{height:37}}/><Reveal delay={26}><Title size={183}>PREVENIR.</Title></Reveal></div>
<svg width="1080" height="1920" style={{position:'absolute'}}><path d="M930 440V1070Q930 1170 825 1170H175Q88 1170 88 1270V1460" fill="none" stroke="#052A16" strokeWidth="5" pathLength="1" strokeDasharray="1" strokeDashoffset={1-move(f,8,50)}/></svg>
<div style={{position:'absolute',left:145,top:1290,width:780}}><Reveal delay={33}><Label color="#052A16" style={{fontSize:30,letterSpacing:1,lineHeight:1.55}}>SEGURANÇA DO TRABALHO<br/>CONECTADA À SUA ROTINA.</Label></Reveal></div><Arrow color="#052A16" size={90} style={{position:'absolute',right:95,top:1480,rotate:`${90*move(f,30,60)}deg`}}/>
</Frame>};
