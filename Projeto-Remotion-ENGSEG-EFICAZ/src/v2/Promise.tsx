import React from 'react';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
import {Brand,Canvas,Corner,Letters,LivePhoto,Trace,Arrow,p,palette} from './MotionKit';
export const PromiseScene=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const en=brand==='engseg';const c=palette[brand];return <Canvas brand={brand}>
 <div style={{position:'absolute',inset:0,clipPath:`inset(${(1-p(f,0,25))*28}% ${(1-p(f,0,25))*18}% round ${120*(1-p(f,0,25))}px)`}}><LivePhoto brand={brand} index={2}/><AbsoluteFill style={{background:`linear-gradient(180deg,${c.dark}55,transparent 20%,${c.dark}F2 77%,${c.dark})`}}/></div>
 <Corner brand={brand} label={en?'ENGSEG / SST':'EFICAZ / MEDICINA'}/>
 <div style={{position:'absolute',left:80,top:1030,translate:`0 ${-p(f,20,72)*35}px`}}><Letters text={en?'PROTEÇÃO':'CUIDADO'} size={en?205:248} start={4} color={c.accent}/><Letters text="PARA SUA" size={192} start={12}/><Letters text={en?'EMPRESA.':'EQUIPE.'} size={en?216:250} start={20}/></div>
 <Arrow size={150} color={c.accent} style={{position:'absolute',left:810,top:760,translate:`${p(f,0,60)*25}px ${-p(f,0,60)*25}px`}}/>
 <Trace brand={brand} y={1470} start={20} thin/>
 </Canvas>};
