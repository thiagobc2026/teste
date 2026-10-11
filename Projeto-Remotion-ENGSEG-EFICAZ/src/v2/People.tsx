import React from 'react';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
import {Brand,Canvas,Corner,Letters,LivePhoto,FlowRibbon,Star,LineText,p,palette} from './MotionKit';
export const People=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const en=brand==='engseg';const c=palette[brand];return <Canvas brand={brand}>
 <div style={{position:'absolute',inset:0}}>{[0,1,2].map(i=><div key={i} style={{position:'absolute',left:i*360,top:0,width:360,height:1920,overflow:'hidden',translate:`0 ${(1-p(f,i*4,28+i*4))*(i%2?-1920:1920)}px`}}><div style={{position:'absolute',left:-i*360,top:0}}><LivePhoto brand={brand} index={1}/></div></div>)}<AbsoluteFill style={{background:`linear-gradient(180deg,${c.dark}B0,transparent 35%,${c.dark}EE 78%,${c.dark})`}}/></div>
 <Corner brand={brand} label={en?'02 / CONHECIMENTO':'02 / EXAMES'}/>
 <div style={{position:'absolute',left:80,top:330,rotate:`${(1-p(f,6,28))*-9}deg`}}><Letters text={en?'TREINAR.':'AVALIAR.'} size={216} start={6}/><LineText size={en?113:126} start={17} color={c.accent}>{en?'PARA PREVENIR.':'PARA CUIDAR.'}</LineText></div>
 <Star brand={brand} size={155} style={{left:840,top:865,scale:p(f,26,44)}}/>
 <div style={{position:'absolute',left:80,top:1290}}><LineText size={en?134:120} start={31}>{en?'TREINAMENTOS':'EXAMES CLÍNICOS'}</LineText><LineText size={en?96:100} start={43} color={c.accent}>{en?'QUE FAZEM DIFERENÇA.':'E OCUPACIONAIS.'}</LineText></div>
 <FlowRibbon brand={brand} text={en?'CONHECIMENTO EM AÇÃO':'SAÚDE EM CADA ETAPA'} y={1610}/>
 </Canvas>};
