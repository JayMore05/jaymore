import type {Metadata} from "next";import {notFound} from "next/navigation";import ServiceDemo from "@/components/demos/ServiceDemo";
const slugs=["web-development","custom-software","mobile-apps","pos-commerce","crm-erp","process-automation","cloud-saas","ai-integration","api-integrations"] as const;type Slug=typeof slugs[number];
export function generateStaticParams(){return slugs.map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;if(!slugs.includes(slug as Slug))return{title:"Demo not found"};return{title:slug.replaceAll("-"," ").replace(/\b\w/g,x=>x.toUpperCase())+" Demo",description:"Explore an interactive sample solution from NESBYTE Technologies."};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const{slug}=await params;if(!slugs.includes(slug as Slug))notFound();return <ServiceDemo slug={slug as Slug}/>;}
