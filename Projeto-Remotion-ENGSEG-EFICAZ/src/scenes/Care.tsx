import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Frame,Header,Photo,Title,Reveal,Pulse,move} from '../design';
export const Care=()=>{const f=useCurrentFrame();return <Frame brand="eficaz"><Photo brand="eficaz" index={2} zoom={1.01}/><div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(0,32,100,.1) 30%,rgba(0,37,120,.6) 57%,#06266D 86%)'}}/><Header brand="eficaz" section="CUIDADO CONTÍNUO"/>
<div style={{position:'absolute',left:88,top:1060}}><Reveal><Title size={225}>CUIDADO</Title></Reveal><Reveal delay={8}><Title size={111}>NA ROTINA</Title></Reveal><Reveal delay={12}><Title size={111} color="#A2D8FF">DE TRABALHO.</Title></Reveal></div><Pulse brand="eficaz" y={1390} progress={move(f,10,44)}/>
</Frame>};
