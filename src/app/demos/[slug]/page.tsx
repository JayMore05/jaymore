import type {Metadata} from "next";import {notFound} from "next/navigation";import SolutionDemo from "@/components/demos/SolutionDemo";
const kinds=["restaurant","clinic","pos","crm","inventory","education"] as const;type Kind=typeof kinds[number];
const titles:Record<Kind,string>={restaurant:"Restaurant Ordering Demo",clinic:"Clinic Booking Demo",pos:"POS Dashboard Demo",crm:"CRM Pipeline Demo",inventory:"Inventory Management Demo",education:"Education Portal Demo"};
export function generateStaticParams(){return kinds.map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;if(!kinds.includes(slug as Kind))return{title:"Demo not found"};return{title:titles[slug as Kind],description:"Try this interactive sample solution by NESBYTE Technologies. Uses fictional data only."};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const{slug}=await params;if(!kinds.includes(slug as Kind))notFound();return <SolutionDemo kind={slug as Kind}/>;}
