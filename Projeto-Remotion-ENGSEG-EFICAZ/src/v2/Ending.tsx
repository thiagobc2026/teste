import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Brand,Canvas,Corner,BrandLogo,Orbit,LineText,Arrow,Mini,p,palette} from './MotionKit';
export const Ending=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const en=brand==='engseg';const c=palette[brand];return <Canvas brand={brand} light>
 <Corner brand={brand} light label={en?'FALE COM A GENTE':'AGENDE SEUS EXAMES'}/>
 <Orbit brand={brand} x={540} y={850} size={890} progress={.65}/>
 <div style={{position:'absolute',left:235,top:530,transform:`translateY(${(1-p(f,0,28))*180}px) scale(${.82+p(f,0,28)*.18})`,opacity:p(f,0,12)}}><BrandLogo brand={brand} width={610}/></div>
 <div style={{position:'absolute',left:80,right:80,top:1270}}><LineText size={en?117:103} start={12}>{en?'VAMOS CONVERSAR?':'AGENDE SEUS EXAMES.'}</LineText><div style={{height:107,marginTop:35,display:'flex',alignItems:'center',justifyContent:'space-between',background:en?c.ink:c.accent,color:en?c.paper:c.ink,padding:'0 34px',clipPath:`inset(0 ${100*(1-p(f,20,38))}% 0 0)`}}><span style={{fontSize:en?43:51,fontWeight:700}}>{en?'@engsegconsultoria':'@eficaz.med'}</span><Arrow size={62} style={{translate:`${Math.sin(f*.11)*6}px ${-Math.sin(f*.11)*6}px`}}/></div>{!en&&<div style={{fontSize:45,fontWeight:600,marginTop:35,opacity:p(f,29,41)}}>(66) 3497-3833</div>}</div>
 <Mini style={{position:'absolute',left:80,top:1700,fontSize:25,opacity:p(f,26,45)}}>{en?'Consultoria em Segurança do Trabalho':'Medicina e Segurança do Trabalho'}</Mini>
 </Canvas>};
