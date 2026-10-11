import React from 'react';
import {AbsoluteFill,Sequence,useCurrentFrame,useVideoConfig,staticFile} from 'remotion';
import {Audio} from '@remotion/media';
import {Intro} from './scenes/Intro';import {BrandReveal} from './scenes/BrandReveal';import {Esocial} from './scenes/Esocial';import {Training} from './scenes/Training';import {Documents} from './scenes/Documents';import {Verbs} from './scenes/Verbs';import {Consultation} from './scenes/Consultation';import {Exams} from './scenes/Exams';import {ExamTypes} from './scenes/ExamTypes';import {Care} from './scenes/Care';import {Message} from './scenes/Message';import {Outro} from './scenes/Outro';
import {Brand,move,themes} from './design';
const SceneWipes=({brand}:{brand:Brand})=>{
 const f=useCurrentFrame();const cuts=[60,120,210,300,390,480,600];const index=cuts.findIndex(c=>f>=c-7&&f<=c+9);if(index<0)return null;
 const t=f-cuts[index];const p=move(t,-7,9);const accent=themes[brand].accent;
 const base:React.CSSProperties={position:'absolute',inset:'-140px -230px'};
 if(index===5){const radius=t<=0?move(t,-7,0)*1450:(1-move(t,0,9))*1450;return <AbsoluteFill style={{background:accent,clipPath:`circle(${radius}px at 50% 46%)`,pointerEvents:'none'}}/>;}
 if(index===4){const height=t<=0?move(t,-7,0)*960:(1-move(t,0,9))*960;return <AbsoluteFill style={{pointerEvents:'none'}}><div style={{position:'absolute',top:0,left:0,right:0,height,background:accent}}/><div style={{position:'absolute',bottom:0,left:0,right:0,height,background:accent}}/></AbsoluteFill>;}
 const vertical=index===1||index===3;const reverse=index===2;
 const pos=-145+p*290;const trans=vertical?`0 ${-pos}%`:`${reverse?-pos:pos}% 0`;
 const follow=-170+p*310;const trans2=vertical?`0 ${-follow}%`:`${reverse?-follow:follow}% 0`;
 return <AbsoluteFill style={{pointerEvents:'none',overflow:'hidden'}}><div style={{...base,background:accent,translate:trans,rotate:brand==='engseg'&&!vertical?'-11deg':'0deg',borderRadius:brand==='eficaz'?240:0}}/><div style={{...base,background:'#F2F7F0',translate:trans2,rotate:brand==='engseg'&&!vertical?'-11deg':'0deg',borderRadius:brand==='eficaz'?240:0}}/></AbsoluteFill>;
};
export const ENGSEG=()=>{const {fps}=useVideoConfig();return <AbsoluteFill>
<Sequence name="Abertura" from={0} durationInFrames={2*fps} premountFor={fps}><Intro brand="engseg"/></Sequence>
<Sequence name="Marca" from={2*fps} durationInFrames={2*fps} premountFor={fps}><BrandReveal brand="engseg"/></Sequence>
<Sequence name="eSocial" from={4*fps} durationInFrames={3*fps} premountFor={fps}><Esocial/></Sequence>
<Sequence name="Treinamentos" from={7*fps} durationInFrames={3*fps} premountFor={fps}><Training/></Sequence>
<Sequence name="Documentos e laudos" from={10*fps} durationInFrames={3*fps} premountFor={fps}><Documents/></Sequence>
<Sequence name="Visão integrada" from={13*fps} durationInFrames={3*fps} premountFor={fps}><Verbs/></Sequence>
<Sequence name="Proteção" from={16*fps} durationInFrames={4*fps} premountFor={fps}><Message brand="engseg"/></Sequence>
<Sequence name="Contato" from={20*fps} durationInFrames={4*fps} premountFor={fps}><Outro brand="engseg"/></Sequence>
<SceneWipes brand="engseg"/><Audio src={staticFile('audio/engseg-mix.wav')} volume={.9} premountFor={fps}/>
</AbsoluteFill>};
export const EFICAZ=()=>{const {fps}=useVideoConfig();return <AbsoluteFill>
<Sequence name="Abertura" from={0} durationInFrames={2*fps} premountFor={fps}><Intro brand="eficaz"/></Sequence>
<Sequence name="Marca" from={2*fps} durationInFrames={2*fps} premountFor={fps}><BrandReveal brand="eficaz"/></Sequence>
<Sequence name="Consultas e avaliações" from={4*fps} durationInFrames={3*fps} premountFor={fps}><Consultation/></Sequence>
<Sequence name="Exames" from={7*fps} durationInFrames={3*fps} premountFor={fps}><Exams/></Sequence>
<Sequence name="Admissional e demissional" from={10*fps} durationInFrames={3*fps} premountFor={fps}><ExamTypes/></Sequence>
<Sequence name="Rotina de trabalho" from={13*fps} durationInFrames={3*fps} premountFor={fps}><Care/></Sequence>
<Sequence name="Cuidado" from={16*fps} durationInFrames={4*fps} premountFor={fps}><Message brand="eficaz"/></Sequence>
<Sequence name="Agendamento" from={20*fps} durationInFrames={4*fps} premountFor={fps}><Outro brand="eficaz"/></Sequence>
<SceneWipes brand="eficaz"/><Audio src={staticFile('audio/eficaz-mix.wav')} volume={.9} premountFor={fps}/>
</AbsoluteFill>};
