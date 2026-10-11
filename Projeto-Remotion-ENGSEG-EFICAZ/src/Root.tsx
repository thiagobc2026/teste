import React,{useEffect,useState} from 'react';
import {Composition,Folder,delayRender,continueRender,staticFile} from 'remotion';
import {ENGSEG,EFICAZ} from './Films';
import {Intro} from './scenes/Intro';import {BrandReveal} from './scenes/BrandReveal';import {Esocial} from './scenes/Esocial';import {Training} from './scenes/Training';import {Documents} from './scenes/Documents';import {Verbs} from './scenes/Verbs';import {Consultation} from './scenes/Consultation';import {Exams} from './scenes/Exams';import {ExamTypes} from './scenes/ExamTypes';import {Care} from './scenes/Care';import {Message} from './scenes/Message';import {Outro} from './scenes/Outro';
import './styles.css';
const Fonts=()=>{const [handle]=useState(()=>delayRender('Carregando fontes locais'));useEffect(()=>{Promise.all([new FontFace('Barlow',`url(${staticFile('fonts/BarlowCondensed-Bold.ttf')})`,{weight:'700'}).load(),new FontFace('Barlow',`url(${staticFile('fonts/BarlowCondensed-SemiBold.ttf')})`,{weight:'600'}).load(),new FontFace('Manrope',`url(${staticFile('fonts/Manrope.ttf')})`,{weight:'200 800'}).load()]).then(fonts=>{fonts.forEach(font=>(document.fonts as FontFaceSet & {add(font:FontFace):FontFaceSet}).add(font));continueRender(handle);}).catch(e=>{console.error(e);continueRender(handle);});},[handle]);return null;};
export const Root=()=> <><Fonts/>
<Composition id="ENGSEG-Motion" component={ENGSEG} durationInFrames={720} fps={30} width={1080} height={1920}/>
<Composition id="EFICAZ-Motion" component={EFICAZ} durationInFrames={720} fps={30} width={1080} height={1920}/>
<Folder name="Cenas-ENGSEG">
<Composition id="E-Abertura" component={Intro} defaultProps={{brand:'engseg' as const}} durationInFrames={60} fps={30} width={1080} height={1920}/>
<Composition id="E-Marca" component={BrandReveal} defaultProps={{brand:'engseg' as const}} durationInFrames={60} fps={30} width={1080} height={1920}/>
<Composition id="E-eSocial" component={Esocial} durationInFrames={90} fps={30} width={1080} height={1920}/>
<Composition id="E-Treinamentos" component={Training} durationInFrames={90} fps={30} width={1080} height={1920}/>
<Composition id="E-Documentos" component={Documents} durationInFrames={90} fps={30} width={1080} height={1920}/>
<Composition id="E-Integracao" component={Verbs} durationInFrames={90} fps={30} width={1080} height={1920}/>
<Composition id="E-Mensagem" component={Message} defaultProps={{brand:'engseg' as const}} durationInFrames={120} fps={30} width={1080} height={1920}/>
<Composition id="E-Contato" component={Outro} defaultProps={{brand:'engseg' as const}} durationInFrames={120} fps={30} width={1080} height={1920}/>
</Folder><Folder name="Cenas-EFICAZ">
<Composition id="F-Abertura" component={Intro} defaultProps={{brand:'eficaz' as const}} durationInFrames={60} fps={30} width={1080} height={1920}/>
<Composition id="F-Marca" component={BrandReveal} defaultProps={{brand:'eficaz' as const}} durationInFrames={60} fps={30} width={1080} height={1920}/>
<Composition id="F-Consultas" component={Consultation} durationInFrames={90} fps={30} width={1080} height={1920}/>
<Composition id="F-Exames" component={Exams} durationInFrames={90} fps={30} width={1080} height={1920}/>
<Composition id="F-Tipos" component={ExamTypes} durationInFrames={90} fps={30} width={1080} height={1920}/>
<Composition id="F-Rotina" component={Care} durationInFrames={90} fps={30} width={1080} height={1920}/>
<Composition id="F-Mensagem" component={Message} defaultProps={{brand:'eficaz' as const}} durationInFrames={120} fps={30} width={1080} height={1920}/>
<Composition id="F-Contato" component={Outro} defaultProps={{brand:'eficaz' as const}} durationInFrames={120} fps={30} width={1080} height={1920}/>
</Folder></>;
