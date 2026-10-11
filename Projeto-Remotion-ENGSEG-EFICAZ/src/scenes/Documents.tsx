import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Frame,Header,Title,Reveal,Label,Grid,Footer,Rule,move} from '../design';
export const Documents=()=>{const f=useCurrentFrame();return <Frame brand="engseg" light><Grid brand="engseg" light/><Header brand="engseg" section="03 / DOCUMENTAÇÃO" light/>
<div style={{position:'absolute',top:335,left:88}}><Reveal><Title size={160}>DOCUMENTOS</Title></Reveal><Reveal delay={6}><Title size={167} color="#138640">E LAUDOS.</Title></Reveal></div>
{[2,1,0].map((i)=><div key={i} style={{position:'absolute',top:750+i*20,left:245+i*45,width:570,height:580,background:i===0?'#0B3E27':i===1?'#21E66A':'#C9E5C8',rotate:`${-9+i*13+(1-move(f,i*4,22+i*4))*28}deg`,translate:`0 ${(1-move(f,i*4,22+i*4))*360}px`,boxShadow:'0 18px 42px #052f2018',padding:55}}>{i===0&&<><Label color="#89FBAF" style={{fontSize:20}}>GESTÃO COM RESPONSABILIDADE</Label><svg width="460" height="290" viewBox="0 0 460 290" style={{marginTop:30}}><path d="M0 60H320M0 99H410M0 138H350M0 177H380" stroke="#C4E4D0" strokeWidth="8" pathLength="1" strokeDasharray="1" strokeDashoffset={1-move(f,15,38)}/><path d="M320 240L350 270L421 203" stroke="#21E66A" strokeWidth="9" fill="none" pathLength="1" strokeDasharray="1" strokeDashoffset={1-move(f,28,43)}/></svg><div style={{height:3,background:'#69B189',marginTop:22}}/></>}</div>)}
<Rule brand="engseg" y={1480} delay={17} color="#118744"/><Footer brand="engseg" text="Organização para a rotina da sua empresa." light/>
</Frame>};
