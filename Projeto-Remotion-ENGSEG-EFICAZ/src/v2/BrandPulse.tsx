import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Brand,Canvas,Corner,Letters,Mark3D,Orbit,FlowRibbon,Mini,p,palette} from './MotionKit';
export const BrandPulse=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const en=brand==='engseg';const c=palette[brand];return <Canvas brand={brand}>
 <Corner brand={brand} label={en?'PREVENÇÃO EM MOVIMENTO':'CUIDADO EM MOVIMENTO'}/>
 <Orbit brand={brand} y={950} size={990} progress={p(f,0,20)}/>
 <div style={{position:'absolute',left:80,top:310,zIndex:2}}><Letters text={en?'A PREVENÇÃO':'A SAÚDE'} size={en?174:220} start={5}/><Letters text={en?'TAMBÉM NÃO.':'VEM JUNTO.'} size={en?166:196} color={c.accent} start={15}/></div>
 <Mark3D brand={brand} size={620} style={{left:230,top:740}}/>
 <Mini style={{position:'absolute',left:80,top:1450,opacity:p(f,29,45)}}>{en?'Gestão • Orientação • Proteção':'Atenção • Avaliação • Cuidado'}</Mini>
 <FlowRibbon brand={brand} text={en?'ENGSEG / PREVENIR É AGIR':'EFICAZ / CUIDAR É AGIR'} y={1600}/>
 </Canvas>};
