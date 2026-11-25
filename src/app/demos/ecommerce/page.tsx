import type {Metadata} from "next";
import EcommerceDemo from "@/components/demos/EcommerceDemo";
export const metadata:Metadata={title:"Interactive E-commerce Demo",description:"Try a sample online store with product filters, search, shopping bag and simulated checkout."};
export default function Page(){return <EcommerceDemo/>}
