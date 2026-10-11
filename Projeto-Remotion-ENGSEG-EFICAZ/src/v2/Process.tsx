import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Brand,Canvas,Corner,Letters,Type,LivePhoto,Mini,Arrow,Orbit,p,q,palette} from './MotionKit';
export const Process=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const en=brand==='engseg';const c=palette[brand];return <Canvas brand={brand} light={en}>
 <Corner brand={brand} light={en} label={en?'03 / DOCUMENTAÇÃO':'03 / ACOMPANHAMENTO'}/>
 {en?<>
 <div style={{position:'absolute',left:80,top:330}}><Letters text="DOCUMENTOS" size={158} start={5}/><Letters text="E LAUDOS." size={200} start={14} color="#168658"/></div>
 <div style={{position:'absolute',left:240,top:800,perspective:1800,width:600,height:700,transform:`rotateZ(${-10+Math.sin(f*.028)*5}deg)`}}>{[0,1,2].map(i=><div key={i} style={{position:'absolute',width:570,height:670,background:['#CCE9B7','#24D985','#07392D'][i],color:c.paper,padding:48,transformOrigin:'50% 100%',transform:`translate(${(2-i)*-46}px,${(2-i)*-50+(1-p(f,i*7,i*7+30))*850}px) rotateY(${(1-p(f,i*7,i*7+30))*100}deg) rotateZ(${(2-i)*-8}deg)`,boxShadow:'0 20px 40px #082b1b22'}}>{i===2&&<><Mini style={{fontSize:24,color:c.accent}}>GESTÃO COM RESPONSABILIDADE</Mini><div style={{height:2,background:c.accent,marginTop:30}}/>{[0,1,2,3,4].map(j=><div key={j} style={{height:7,width:(j===4?250:420)*p(f,25+j*4,45+j*4),background:'#EAF1D9',marginTop:38}}/>)}<div style={{position:'absolute',bottom:60,right:30,width:390,border:`8px solid ${c.accent}`,padding:'16px 24px',color:c.accent,rotate:'-8deg',scale:1+(1-p(f,52,64))*1.5,opacity:p(f,50,55)}}><Type size={70}>PREVENÇÃO</Type></div></>}</div>)}</div>
 <Mini style={{position:'absolute',left:80,top:1650,opacity:p(f,47,65)}}>Informação para orientar decisões.</Mini>
 </>:<>
 <Orbit brand={brand} x={540} y={1070} size={1120}/>
 <div style={{position:'absolute',top:330,left:80}}><Letters text="DO INÍCIO" size={190} start={4}/><Letters text="A CADA ETAPA." size={146} start={13} color={c.accent}/></div>
 <div style={{position:'absolute',left:80,top:830,width:700,height:355,overflow:'hidden',translate:`${(1-p(f,8,32))*-950}px 0`,rotate:'-4deg'}}><LivePhoto brand={brand} index={1} w={700} h={355}/></div>
 <div style={{position:'absolute',left:270,top:1230,width:730,height:350,overflow:'hidden',translate:`${(1-p(f,35,59))*1050}px 0`,rotate:'4deg'}}><LivePhoto brand={brand} index={2} w={730} h={350}/></div>
 <div style={{position:'absolute',left:80,top:740}}><Letters text="ADMISSIONAL" size={122} start={10}/></div>
 <div style={{position:'absolute',left:270,top:1540,color:c.accent}}><Letters text="DEMISSIONAL" size={123} start={38}/></div>
 <Arrow size={130} color={c.accent} style={{position:'absolute',left:805,top:1095,rotate:`${p(f,20,75)*180}deg`}}/>
 </>}
 </Canvas>};
