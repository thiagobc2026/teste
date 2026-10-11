import React from 'react';
import {AbsoluteFill,Easing,staticFile,useVideoConfig} from 'remotion';
import {Audio} from '@remotion/media';
import {TransitionSeries,linearTiming,TransitionPresentationComponentProps} from '@remotion/transitions';
import {Brand} from './MotionKit';
import {Opening} from './Opening';import {BrandPulse} from './BrandPulse';import {Service} from './Service';import {People} from './People';import {Process} from './Process';import {Action} from './Action';import {PromiseScene} from './Promise';import {Ending} from './Ending';
const Travel=({children,presentationProgress:p,presentationDirection,passedProps:{kind}}:TransitionPresentationComponentProps<{kind:string}>)=>{const enter=presentationDirection==='entering';let style:React.CSSProperties={};
 if(kind==='iris')style=enter?{clipPath:`circle(${p*150}% at 78% 46%)`,scale:1.12-p*.12}:{scale:1-p*.06};
 else if(kind==='lift')style={translate:`0 ${(enter?1-p:-p)*1920}px`,rotate:`${(enter?1-p:-p)*4}deg`};
 else if(kind==='split')style=enter?{clipPath:`polygon(0 0,${p*140}% 0,${p*140-40}% 100%,0 100%)`,translate:`${(1-p)*130}px 0`}:{translate:`${-p*140}px 0`,scale:1-p*.04};
 else style={translate:`${(enter?1-p:-p)*1080}px 0`,scale:enter?1.05-p*.05:1};
 return <AbsoluteFill style={{...style,overflow:'hidden'}}>{children}</AbsoluteFill>;
};
export const DynamicFilm=({brand}:{brand:Brand})=>{const {fps}=useVideoConfig();return <AbsoluteFill style={{background:'#061B17'}}>
 <TransitionSeries>
  <TransitionSeries.Sequence name="Impacto / Tipografia em movimento" durationInFrames={3.4*fps} premountFor={fps}><Opening brand={brand}/></TransitionSeries.Sequence>
  <TransitionSeries.Transition timing={linearTiming({durationInFrames:.4*fps,easing:Easing.bezier(.76,0,.24,1)})} presentation={{component:Travel,props:{kind:'iris'}}}/>
  <TransitionSeries.Sequence name="Símbolo / Prevenção e cuidado" durationInFrames={3.4*fps} premountFor={fps}><BrandPulse brand={brand}/></TransitionSeries.Sequence>
  <TransitionSeries.Transition timing={linearTiming({durationInFrames:.4*fps,easing:Easing.bezier(.76,0,.24,1)})} presentation={{component:Travel,props:{kind:'lift'}}}/>
  <TransitionSeries.Sequence name="Serviço principal / Construção" durationInFrames={4.4*fps} premountFor={fps}><Service brand={brand}/></TransitionSeries.Sequence>
  <TransitionSeries.Transition timing={linearTiming({durationInFrames:.4*fps,easing:Easing.bezier(.76,0,.24,1)})} presentation={{component:Travel,props:{kind:'split'}}}/>
  <TransitionSeries.Sequence name="Pessoas / Mosaico animado" durationInFrames={3.4*fps} premountFor={fps}><People brand={brand}/></TransitionSeries.Sequence>
  <TransitionSeries.Transition timing={linearTiming({durationInFrames:.4*fps,easing:Easing.bezier(.76,0,.24,1)})} presentation={{component:Travel,props:{kind:'push'}}}/>
  <TransitionSeries.Sequence name="Documentos e etapas / Profundidade" durationInFrames={3.4*fps} premountFor={fps}><Process brand={brand}/></TransitionSeries.Sequence>
  <TransitionSeries.Transition timing={linearTiming({durationInFrames:.4*fps,easing:Easing.bezier(.76,0,.24,1)})} presentation={{component:Travel,props:{kind:'iris'}}}/>
  <TransitionSeries.Sequence name="Manifesto / Montagem cinética" durationInFrames={3.4*fps} premountFor={fps}><Action brand={brand}/></TransitionSeries.Sequence>
  <TransitionSeries.Transition timing={linearTiming({durationInFrames:.4*fps,easing:Easing.bezier(.76,0,.24,1)})} presentation={{component:Travel,props:{kind:'split'}}}/>
  <TransitionSeries.Sequence name="Assinatura / Pessoas no centro" durationInFrames={2.6*fps} premountFor={fps}><PromiseScene brand={brand}/></TransitionSeries.Sequence>
  <TransitionSeries.Transition timing={linearTiming({durationInFrames:.4*fps,easing:Easing.bezier(.76,0,.24,1)})} presentation={{component:Travel,props:{kind:'lift'}}}/>
  <TransitionSeries.Sequence name="Marca e contato" durationInFrames={2.8*fps} premountFor={fps}><Ending brand={brand}/></TransitionSeries.Sequence>
 </TransitionSeries>
 <Audio src={staticFile(`audio/${brand}-v2.wav`)} volume={.95} premountFor={fps}/>
 </AbsoluteFill>};
export const ENGSEGv2=()=> <DynamicFilm brand="engseg"/>;
export const EFICAZv2=()=> <DynamicFilm brand="eficaz"/>;
