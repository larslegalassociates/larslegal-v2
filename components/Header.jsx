
"use client";
import Link from "next/link";
import { useState } from "react";
export default function Header(){
  const [open,setOpen]=useState(false);
  return <>
    <div className="topbar"><div className="container"><span>India · London · Ireland · United States</span><span><a href="mailto:contact@larslegal.in">contact@larslegal.in</a> · <a href="tel:+919860243066">+91 98602 43066</a></span></div></div>
    <header className="header"><div className="container"><nav className="nav">
      <Link className="brand" href="/"><img src="/logo.png" alt="LARS Legal Associates logo"/><strong>LARS Legal Associates</strong></Link>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Open navigation">☰</button>
      <div className={`navlinks ${open?"open":""}`}>
        <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/practice-areas">Practice Areas</Link>
        <Link href="/team">Our Team</Link><Link href="/locations">Global Presence</Link><Link href="/insights">Insights</Link>
        <Link className="btn" href="/contact">Book Consultation</Link>
      </div>
    </nav></div></header>
  </>;
}
