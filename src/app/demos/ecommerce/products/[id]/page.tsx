import {notFound} from "next/navigation";
import EcommerceDemo from "@/components/demos/EcommerceDemo";
export function generateStaticParams(){return Array.from({length:8},(_,i)=>({id:String(i+1)}))}
export default async function ProductPage({params}:{params:Promise<{id:string}>}){const {id}=await params;if(!/^([1-8])$/.test(id))notFound();return <EcommerceDemo/>}
