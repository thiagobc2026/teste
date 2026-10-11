import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Frame,Photo,Header,Reveal,Title,Label,Arrow,move,Footer} from '../design';
export const Training=()=>{const f=useCurrentFrame();return <Frame brand="engseg"><Photo brand="engseg" index={1} x={120} y={490} w={960} h={1190} style={{clipPath:`polygon(${(1-move(f))*100}% 0,100% 0,100% 100%,0 100%,0 12%)`}}/>
<div style={{position:'absolute',left:0,top:1040,width:1080,height:800,background:'linear-gradient(transparent,#06190F 79%)'}}/><Header brand="engseg" section="02 / CONHECIMENTO"/>
<div style={{position:'absolute',left:86,top:325,zIndex:2}}><Reveal><Title size={144}>TREINAMENTOS</Title></Reveal><Reveal delay={6}><Label color="#21E66A" style={{marginTop:18,fontSize:28,background:'#071A11',display:'inline-block',padding:'8px 14px 8px 0'}}>ORIENTAR É PROTEGER.</Label></Reveal></div>
<div style={{position:'absolute',left:0,top:610,width:18,height:600*move(f,4,28),background:'#21E66A'}}/>
<div style={{position:'absolute',left:88,top:1320}}><Reveal delay={14}><Title size={87}>CONHECIMENTO</Title></Reveal><Reveal delay={20}><Title size={87} color="#21E66A">PARA PREVENIR.</Title></Reveal></div>
<Arrow color="#21E66A" size={78} style={{position:'absolute',right:87,top:1450,rotate:`${(1-move(f,18,35))*-90}deg`}}/><Footer brand="engseg" text="Segurança também se aprende."/>
</Frame>};
