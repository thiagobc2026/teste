import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Frame,Header,Title,Reveal,Photo,Label,Pulse,Footer,move} from '../design';
export const Consultation=()=>{const f=useCurrentFrame();return <Frame brand="eficaz"><div style={{position:'absolute',inset:0,background:'#0646D5'}}/><Header brand="eficaz" section="01 / ATENDIMENTO"/>
<div style={{position:'absolute',left:88,top:345,zIndex:3}}><Reveal><Title size={179}>CONSULTAS</Title></Reveal><Reveal delay={7}><Title size={142} color="#A4D7FF">E AVALIAÇÕES.</Title></Reveal></div>
<Photo brand="eficaz" index={0} x={0} y={685} w={1080} h={930} style={{clipPath:`inset(${(1-move(f,4,21))*100}% 0 0 0)`}}/>
<div style={{position:'absolute',left:0,top:1300,width:1080,height:620,background:'linear-gradient(transparent,#071846 78%)'}}/>
<div style={{position:'absolute',right:88,top:620,width:96,height:96,borderRadius:'50%',background:'#A4D7FF',display:'flex',alignItems:'center',justifyContent:'center',scale:move(f,7,25)}}><svg width="50" height="50" viewBox="0 0 50 50"><path d="M25 5V45M5 25H45" stroke="#063BCC" strokeWidth="6"/></svg></div>
<Label style={{position:'absolute',left:88,top:1410,fontSize:29,letterSpacing:1}}>ATENÇÃO A QUEM TRABALHA.</Label><Pulse brand="eficaz" y={1380} progress={move(f,17,48)} opacity={.55}/><Footer brand="eficaz" text="Saúde ocupacional com cuidado."/>
</Frame>};
