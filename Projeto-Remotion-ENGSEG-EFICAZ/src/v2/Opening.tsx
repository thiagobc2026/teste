import React from 'react';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
import {Brand,Canvas,Corner,Letters,Type,LivePhoto,Star,Mini,p,q,palette} from './MotionKit';
export const Opening=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const c=palette[brand];const en=brand==='engseg';const reveal=p(f,24,54);return <Canvas brand={brand}>
 <div style={{position:'absolute',inset:0,scale:1.05-f*.0008,clipPath:`inset(${(1-reveal)*45}% ${(1-reveal)*46}% ${15*(1-reveal)}% round ${160*(1-reveal)}px)`}}><LivePhoto brand={brand} index={en?0:2}/><AbsoluteFill style={{background:`linear-gradient(180deg,${c.dark}22 0%,${c.dark}11 35%,${c.dark}F5 92%)`}}/></div>
 <Corner brand={brand} label={en?'SEGURANÇA DO TRABALHO':'SAÚDE OCUPACIONAL'}/>
 <div style={{position:'absolute',left:-50,top:365,whiteSpace:'nowrap',opacity:.24,translate:`${-f*4}px 0`,rotate:'-7deg'}}><Type size={290} style={{color:'transparent',WebkitTextStroke:`2px ${c.paper}`}}>{en?'MOVIMENTO MOVIMENTO':'CUIDADO CUIDADO'}</Type></div>
 <Star brand={brand} size={118} style={{right:90,top:1510,scale:p(f,15,34)}}/>
 <div style={{position:'absolute',left:80,top:1030,translate:`0 ${-p(f,60,94)*50}px`}}>
  <Mini style={{color:c.accent,marginBottom:32,opacity:p(f,2,12)}}>{en?'Sua empresa segue em frente.':'O trabalho move a vida.'}</Mini>
  <Letters text={en?'O TRABALHO':'QUEM TRABALHA'} size={en?178:133} start={0}/>
  <Letters text={en?'NÃO PARA.':'MERECE'} size={en?238:230} start={12}/>
  {!en&&<Letters text="CUIDADO." size={238} start={23} color={c.accent}/>}
 </div>
 <div style={{position:'absolute',bottom:190,left:80,right:80,height:4,background:'#ffffff33'}}><div style={{height:4,width:`${p(f,10,84)*100}%`,background:c.accent}}/></div>
 <div style={{position:'absolute',width:300,height:300,border:`3px solid ${c.accent}`,borderRadius:'50%',left:390,top:670,scale:1+q(f,75,102)*9,opacity:p(f,64,77)}}/>
 </Canvas>};
