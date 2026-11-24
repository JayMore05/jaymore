"use client";
import {useState} from "react";
import Link from "next/link";
import {ArrowUpRight,Menu,X} from "lucide-react";
import Brand from "@/components/Brand";
const links=[["Services","/services"],["Industries","/industries"],["Products","/products"],["About","/about"],["Work","/work"]];
export default function Navbar(){const[open,setOpen]=useState(false);return <header className="site-header"><div className="nav-wrap container"><Brand/><button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open}>{open?<X size={25}/>:<Menu size={25}/>}</button><nav className={open?"nav-links open":"nav-links"}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact" onClick={()=>setOpen(false)}>Let&apos;s talk <ArrowUpRight size={16}/></Link></nav></div></header>}
