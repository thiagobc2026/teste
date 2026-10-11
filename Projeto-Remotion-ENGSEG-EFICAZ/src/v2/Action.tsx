import React from 'react';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
import {Brand,Canvas,Corner,Type,LivePhoto,Star,Mini,p,palette} from './MotionKit';
export const Action=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const en=brand==='engseg';const phase=Math.min(2,Math.floor(f/30));const local=f-phase*30;const c=palette[brand];const words=en?['PREVENIR.','ORIENTAR.','PROTEGER.']:['CONSULTAR.','AVALIAR.','CUIDAR.'];const word=words[phase];const sz=en?200:phase===0?172:225;return <Canvas brand={brand} light={phase===1}>
 {phase===2&&<><LivePhoto brand={brand} index={2}/><AbsoluteFill style={{background:`${c.dark}AD`}}/></>}
 <Corner brand={brand} light={phase===1} label={en?'ATITUDE QUE PROTEGE':'ATENÇÃO QUE CUIDA'}/>
 <div style={{position:'absolute',top:450,left:-120,rotate:'-9deg',translate:`${-local*7}px 0`,opacity:.24}}>{[0,1,2,3].map(i=><Type key={i} size={sz+20} style={{marginBottom:50,whiteSpace:'nowrap',color:'transparent',WebkitTextStroke:`2px ${phase===1?c.ink:c.accent}`,translate:`${i%2?140:0}px 0`}}>{word} {word}</Type>)}</div>
 <div style={{position:'absolute',left:80,right:80,top:850,transform:`scale(${1+(1-p(local,0,12))*.85}) rotateZ(${(1-p(local,0,12))*-12}deg)`,opacity:p(local,0,3)}}><Type size={sz} style={{color:phase===1?c.ink:c.paper}}>{word}</Type></div>
 <Star brand={brand} size={180} style={{left:770,top:1280,scale:p(local,3,15)}}/>
 <Mini style={{position:'absolute',left:80,top:1600}}>{en?'Pessoas no centro. Sempre.':'Saúde em cada jornada.'}</Mini>
 </Canvas>};
