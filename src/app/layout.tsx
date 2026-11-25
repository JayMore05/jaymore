import type { Metadata } from "next";
import "./globals.css";

export const metadata:Metadata={
  metadataBase:new URL("https://nesbyte.in"),
  title:"NESBYTE Technologies | Website Under Development",
  description:"We're building a new digital experience for NESBYTE Technologies. Our website will be back soon.",
  icons:{icon:"/nesbyte-symbol.svg",shortcut:"/nesbyte-symbol.svg"},
  robots:{index:false,follow:false}
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}