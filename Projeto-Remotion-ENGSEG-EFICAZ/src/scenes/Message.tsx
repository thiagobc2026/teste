import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Frame,Brand,Header,Photo,Title,Reveal,Arrow,themes,move,Footer} from '../design';
export const Message=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const e=brand==='engseg';return <Frame brand={brand}>
<Photo brand={brand} index={2} x={0} y={0} w={1080} h={1180}/><div style={{position:'absolute',inset:0,background:e?'linear-gradient(180deg,#061E0F33 20%,#061B1055 40%,#071A11 68%)':'linear-gradient(180deg,#07235811 20%,#083CA955 40%,#062FA4 68%)'}}/>
<Header brand={brand} section="PESSOAS NO CENTRO"/>
<svg width="1080" height="1100" style={{position:'absolute',top:325}}><path d="M88 260V0H992V600H790" fill="none" stroke={themes[brand].accent} strokeWidth="5" pathLength="1" strokeDasharray="1" strokeDashoffset={1-move(f,0,34)}/></svg>
<div style={{position:'absolute',left:88,top:1055}}><Reveal><Title size={e?188:219} color={themes[brand].accent}>{e?'PROTEÇÃO':'CUIDADO'}</Title></Reveal><Reveal delay={7}><Title size={133}>PARA SUA</Title></Reveal><Reveal delay={13}><Title size={168}>{e?'EMPRESA.':'EQUIPE.'}</Title></Reveal></div>
<Arrow size={90} color={themes[brand].accent} style={{position:'absolute',right:88,top:1435,translate:`0 ${(1-move(f,15,35))*70}px`}}/><Footer brand={brand} text={e?'Foco na prevenção.':'Saúde em cada jornada.'}/>
</Frame>};
