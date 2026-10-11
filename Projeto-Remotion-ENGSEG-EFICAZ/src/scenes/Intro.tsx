import React from 'react';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
import {Brand,Frame,Header,Photo,Title,Reveal,Label,Pulse,KineticWord,themes,move,lerp} from '../design';
export const Intro=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const e=brand==='engseg';return <Frame brand={brand}>
<Photo brand={brand} index={0} zoom={1.04}/><AbsoluteFill style={{background:e?'linear-gradient(180deg,rgba(2,21,10,.13) 20%,rgba(3,21,12,.5) 49%,#05160D 83%)':'linear-gradient(180deg,rgba(0,25,75,.05) 12%,rgba(0,38,115,.55) 49%,#061A55 84%)'}}/>
<div style={{position:'absolute',top:310,left:88,width:2,height:620,background:'rgba(255,255,255,.25)'}}/>
<div style={{position:'absolute',top:310,left:88,width:80,height:4,background:themes[brand].accent,scale:move(f,0,20),transformOrigin:'left'}}/>
<Header brand={brand} section={e?'GESTÃO • PREVENÇÃO':'SAÚDE • TRABALHO'}/>
<div style={{position:'absolute',left:88,top:1020,right:70}}><Reveal duration={12}><Label color={themes[brand].accent} style={{marginBottom:27,fontSize:29,letterSpacing:2}}>{e?'Sua empresa em boas mãos':'Quem trabalha merece cuidado'}</Label></Reveal><KineticWord text={e?'SEGURANÇA':'CUIDADO'} size={e?184:240} delay={3}/><Reveal delay={9} duration={12}><Title size={e?122:132} style={{fontWeight:600,marginTop:8}}>EM MOVIMENTO.</Title></Reveal></div>
<Pulse brand={brand} y={1360} progress={move(f,13,38)}/>
<Label style={{position:'absolute',top:1620,left:88,fontSize:20,opacity:.75,letterSpacing:2}}>PESSOAS NO CENTRO. SEMPRE.</Label>
<div style={{position:'absolute',inset:0,background:themes[brand].accent,opacity:lerp(f,0,5,.25,0),pointerEvents:'none'}}/>
</Frame>};
