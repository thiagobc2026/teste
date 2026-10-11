import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Brand,Frame,Header,Logo,Reveal,Title,Label,Grid,Rule,themes,move} from '../design';
export const BrandReveal=({brand}:{brand:Brand})=>{const f=useCurrentFrame();const e=brand==='engseg';return <Frame brand={brand} light={e}>
<Grid brand={brand} light={e}/><Header brand={brand} section={e?'CONSULTORIA':'MEDICINA OCUPACIONAL'} light={e}/>
<div style={{position:'absolute',left:76,top:335}}><Reveal><Title size={132} color={e?themes[brand].ink:'white'}>{e?'PREVENÇÃO':'CUIDADO'}</Title></Reveal><Reveal delay={5}><Title size={132} color={e?'#168B44':'#80C6FF'}>{e?'COMEÇA AQUI.':'COMEÇA AQUI.'}</Title></Reveal></div>
<div style={{position:'absolute',left:162,top:660,translate:`0 ${(1-move(f,5,23))*90}px`,scale:.95+.05*move(f,5,23),opacity:move(f,3,12),background:e?'white':'#000',padding:18,boxShadow:e?'0 28px 60px #062c1610':'0 25px 60px #0003'}}><Logo brand={brand} width={720}/></div>
<Rule brand={brand} y={1440} delay={13} color={e?'#1AA04A':'#80C6FF'}/><Label style={{position:'absolute',top:1480,left:88,right:88,fontSize:24,lineHeight:1.5,letterSpacing:1}}>{e?'CONSULTORIA EM SEGURANÇA DO TRABALHO':'MEDICINA E SEGURANÇA DO TRABALHO'}</Label>
</Frame>};
