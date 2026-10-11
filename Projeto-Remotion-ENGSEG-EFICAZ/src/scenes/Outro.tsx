import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Frame,Brand,Header,Logo,Reveal,Title,Arrow,move,Grid} from '../design';
export const Outro=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const e=brand==='engseg';return <Frame brand={brand} light={e}>
{e?<Grid brand={brand} light/>:<div style={{position:'absolute',inset:0,background:'linear-gradient(160deg,#0B4AE0,#062781)'}}/>}<Header brand={brand} section={e?'FALE COM A GENTE':'AGENDE SEUS EXAMES'} light={e}/>
<div style={{position:'absolute',left:162,top:390,padding:18,background:e?'white':'black',translate:`0 ${(1-move(f,0,17))*80}px`,opacity:move(f,0,9),boxShadow:e?'0 20px 80px #092f1712':'0 25px 65px #00134355'}}><Logo brand={brand} width={720}/></div>
<div style={{position:'absolute',top:1210,left:88,right:88}}><Reveal delay={5}><Title size={e?100:108}>{e?'VAMOS CONVERSAR?':'AGENDE SEUS EXAMES.'}</Title></Reveal><Reveal delay={11}><div style={{marginTop:35,padding:'24px 30px',background:e?'#0A3B24':'white',color:e?'white':'#063BCC',fontSize:39,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'space-between'}}><span>{e?'@engsegconsultoria':'@eficaz.med'}</span><Arrow size={45}/></div></Reveal>{!e&&<Reveal delay={15}><div style={{fontSize:38,fontWeight:650,marginTop:22,letterSpacing:.5}}>(66) 3497-3833</div></Reveal>}</div>
<div style={{position:'absolute',left:88,right:88,top:1595,height:3,background:e?'#169046':'#7BBFFF',opacity:.4}}/>
<div style={{position:'absolute',left:0,top:1525,height:6,width:1080*move(f,108,119),background:e?'#21E66A':'#80C6FF'}}/>
</Frame>};
