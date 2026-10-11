import React,{useEffect,useState} from 'react';
import {Composition,Folder,delayRender,continueRender,staticFile} from 'remotion';
import {ENGSEG,EFICAZ} from './Films';
import {ENGSEGv2,EFICAZv2} from './v2/Films';
import {Opening} from './v2/Opening';
import {BrandPulse} from './v2/BrandPulse';
import {Service} from './v2/Service';
import {People} from './v2/People';
import {Process} from './v2/Process';
import {Action} from './v2/Action';
import {PromiseScene} from './v2/Promise';
import {Ending} from './v2/Ending';
import {Intro} from './scenes/Intro';import {BrandReveal} from './scenes/BrandReveal';import {Esocial} from './scenes/Esocial';import {Training} from './scenes/Training';import {Documents} from './scenes/Documents';import {Verbs} from './scenes/Verbs';import {Consultation} from './scenes/Consultation';import {Exams} from './scenes/Exams';import {ExamTypes} from './scenes/ExamTypes';import {Care} from './scenes/Care';import {Message} from './scenes/Message';import {Outro} from './scenes/Outro';
import './styles.css';
const Fonts=()=>{const [handle]=useState(()=>delayRender('Carregando fontes locais'));useEffect(()=>{Promise.all([new FontFace('Barlow',`url(${staticFile('fonts/BarlowCondensed-Bold.ttf')})`,{weight:'700'}).load(),new FontFace('Barlow',`url(${staticFile('fonts/BarlowCondensed-SemiBold.ttf')})`,{weight:'600'}).load(),new FontFace('Manrope',`url(${staticFile('fonts/Manrope.ttf')})`,{weight:'200 800'}).load()]).then(fonts=>{fonts.forEach(font=>(document.fonts as FontFaceSet & {add(font:FontFace):FontFaceSet}).add(font));continueRender(handle);}).catch(e=>{console.error(e);continueRender(handle);});},[handle]);return null;};
export const Root=()=> <><Fonts/>
<Composition id="ENGSEG-Motion" component={ENGSEGv2} durationInFrames={720} fps={30} width={1080} height={1920}/>
<Composition id="EFICAZ-Motion" component={EFICAZv2} durationInFrames={720} fps={30} width={1080} height={1920}/>
<Folder name="V2-Cenas-ENGSEG">
<Composition id="V2-E-Impacto" component={Opening} defaultProps={{brand:'engseg' as const}} durationInFrames={102} fps={30} width={1080} height={1920}/>
<Composition id="V2-E-Simbolo" component={BrandPulse} defaultProps={{brand:'engseg' as const}} durationInFrames={102} fps={30} width={1080} height={1920}/>
<Composition id="V2-E-Gestao" component={Service} defaultProps={{brand:'engseg' as const}} durationInFrames={132} fps={30} width={1080} height={1920}/>
<Composition id="V2-E-Treinamentos" component={People} defaultProps={{brand:'engseg' as const}} durationInFrames={102} fps={30} width={1080} height={1920}/>
<Composition id="V2-E-Documentos" component={Process} defaultProps={{brand:'engseg' as const}} durationInFrames={102} fps={30} width={1080} height={1920}/>
<Composition id="V2-E-Acoes" component={Action} defaultProps={{brand:'engseg' as const}} durationInFrames={102} fps={30} width={1080} height={1920}/>
<Composition id="V2-E-Assinatura" component={PromiseScene} defaultProps={{brand:'engseg' as const}} durationInFrames={78} fps={30} width={1080} height={1920}/>
<Composition id="V2-E-Contato" component={Ending} defaultProps={{brand:'engseg' as const}} durationInFrames={84} fps={30} width={1080} height={1920}/>
</Folder>
<Folder name="V2-Cenas-EFICAZ">
<Composition id="V2-F-Impacto" component={Opening} defaultProps={{brand:'eficaz' as const}} durationInFrames={102} fps={30} width={1080} height={1920}/>
<Composition id="V2-F-Simbolo" component={BrandPulse} defaultProps={{brand:'eficaz' as const}} durationInFrames={102} fps={30} width={1080} height={1920}/>
<Composition id="V2-F-Consultas" component={Service} defaultProps={{brand:'eficaz' as const}} durationInFrames={132} fps={30} width={1080} height={1920}/>
<Composition id="V2-F-Exames" component={People} defaultProps={{brand:'eficaz' as const}} durationInFrames={102} fps={30} width={1080} height={1920}/>
<Composition id="V2-F-Etapas" component={Process} defaultProps={{brand:'eficaz' as const}} durationInFrames={102} fps={30} width={1080} height={1920}/>
<Composition id="V2-F-Acoes" component={Action} defaultProps={{brand:'eficaz' as const}} durationInFrames={102} fps={30} width={1080} height={1920}/>
<Composition id="V2-F-Assinatura" component={PromiseScene} defaultProps={{brand:'eficaz' as const}} durationInFrames={78} fps={30} width={1080} height={1920}/>
<Composition id="V2-F-Contato" component={Ending} defaultProps={{brand:'eficaz' as const}} durationInFrames={84} fps={30} width={1080} height={1920}/>
</Folder>
<Folder name="Versao-1">
<Composition id="ENGSEG-V1" component={ENGSEG} durationInFrames={720} fps={30} width={1080} height={1920}/>
<Composition id="EFICAZ-V1" component={EFICAZ} durationInFrames={720} fps={30} width={1080} height={1920}/>
</Folder>
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
