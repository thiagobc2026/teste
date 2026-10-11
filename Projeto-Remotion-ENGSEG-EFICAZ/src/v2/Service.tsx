import React from 'react';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
import {Brand,Canvas,Corner,Letters,LineText,Type,LivePhoto,Trace,Mini,Arrow,p,q,palette} from './MotionKit';
const Sheet=({f,i}:{f:number;i:number})=>{const a=p(f,i*8,i*8+28);return <div style={{position:'absolute',width:620,height:690,left:230,top:800,background:i===2?'#F1F3E9':i===1?'#A6F04B':'#15795B',transformOrigin:'50% 95%',transform:`perspective(1600px) translate(${(2-i)*36}px,${(1-a)*750+(2-i)*-30}px) rotateZ(${(2-i)*-10+Math.sin(f*.025)*2}deg) rotateY(${(1-a)*-70}deg) rotateX(8deg)`,boxShadow:'0 24px 45px #0003',padding:54,color:'#07392D'}}>{i===2&&<><Mini style={{fontSize:24}}>INFORMAÇÃO ORGANIZADA</Mini><Type size={118} style={{marginTop:26,marginBottom:44}}>eSocial</Type>{[0,1,2].map(j=><div key={j} style={{height:78,display:'flex',alignItems:'center',gap:24,opacity:p(f,25+j*14,35+j*14)}}><div style={{width:42,height:42,border:'3px solid #07392D',background:f>38+j*14?'#A6F04B':'transparent',fontSize:33,textAlign:'center',lineHeight:'35px'}}>{f>38+j*14?'✓':''}</div><div style={{height:7,width:[325,260,295][j]*p(f,25+j*14,45+j*14),background:'#07392D'}}/></div>)}<div style={{position:'absolute',right:44,bottom:30}}><Arrow size={83}/></div></>}</div>};
export const Service=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const en=brand==='engseg';const c=palette[brand];return <Canvas brand={brand}>
 <Corner brand={brand} label={en?'01 / GESTÃO':'01 / ATENDIMENTO'}/>
 {en?<>
  <svg width={1080} height={1920} style={{position:'absolute'}}><path d="M0 750H125V1550H960V690H1080" stroke={c.accent} strokeWidth={5} fill="none" pathLength={1} strokeDasharray={1} strokeDashoffset={1-p(f,10,88)}/></svg>
  <div style={{position:'absolute',left:80,top:340}}><LineText size={145} start={4}>GESTÃO DE</LineText><Letters text="eSocial" size={292} start={12} color={c.accent}/></div>
  <Sheet f={f} i={0}/><Sheet f={f} i={1}/><Sheet f={f} i={2}/>
  <div style={{position:'absolute',left:80,top:1600}}><LineText size={66} start={65}>ORGANIZAÇÃO QUE ACOMPANHA</LineText><LineText size={66} start={70}>O RITMO DA SUA EMPRESA.</LineText></div>
 </>:<>
  <div style={{position:'absolute',left:0,top:640,width:1080,height:1150,clipPath:`inset(0 ${38*(1-p(f,0,35))}% 0 ${38*(1-p(f,0,35))}% round ${250*(1-p(f,0,35))}px)`,rotate:`${(1-p(f,0,35))*9}deg`}}><LivePhoto brand={brand} index={0} h={1150}/><AbsoluteFill style={{background:`linear-gradient(transparent 50%,${c.dark} 100%)`}}/></div>
  <div style={{position:'absolute',left:80,top:335}}><Letters text="CONSULTAS" size={184} start={4}/><Letters text="E AVALIAÇÕES." size={132} start={14} color={c.accent}/></div>
  <div style={{position:'absolute',width:570,height:530,left:175+Math.sin(f*.025)*25,top:790,clipPath:`inset(0 ${100*(1-p(f,28,50))}% 0 0)`,border:`3px solid ${c.accent}`}}><div style={{height:4,background:c.accent,position:'absolute',left:0,right:0,top:((f*6)%530),opacity:.6}}/></div>
  <Trace brand={brand} y={1360} start={26}/><Mini style={{position:'absolute',left:80,top:1670,opacity:p(f,45,64)}}>Atenção a quem trabalha.</Mini>
 </>}
 </Canvas>};
