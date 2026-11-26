import Link from "next/link";
export function BrandMark({large=false}:{large?:boolean}){return <span className={large?"brand-mark brand-mark-large":"brand-mark"}><img src="/nesbyte-logo.png" alt="NESBYTE symbol" /></span>}
export default function Brand(){return <Link href="/" className="brand" aria-label="NESBYTE Technologies home"><BrandMark/><span className="brand-name">NESBYTE<small>TECHNOLOGIES</small></span></Link>}
