
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
export default function Footer(){
return <>
<footer className="footer"><div className="container"><div className="footerGrid">
<div><div className="eyebrow">LARS Legal Associates</div><h3 style={{color:"white"}}>Strategic Legal Solutions Across Borders.</h3><p>Client-first, modern and technology-driven legal services for individuals and businesses.</p></div>
<div><h3 style={{color:"white"}}>Firm</h3><Link href="/about">About</Link><Link href="/team">Our Team</Link><Link href="/locations">Global Presence</Link><Link href="/contact">Book Consultation</Link></div>
<div><h3 style={{color:"white"}}>Information</h3><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/disclaimer">Disclaimer</Link><a href="https://www.linkedin.com/company/lars-legal-associates/" target="_blank">LinkedIn</a><a href="https://www.instagram.com/larslegal.in" target="_blank">Instagram</a></div>
</div><div className="footerBottom">© 2026 LARS Legal Associates. All rights reserved. Offices and contact locations operate subject to applicable local laws and professional regulations. Website content is general and does not constitute legal advice.</div></div></footer>
<a className="floating call" href="tel:+919860243066" aria-label="Call"><Phone size={22}/></a>
<a className="floating whatsapp" href="https://wa.me/919860243066?text=Hello%20LARS%20Legal%20Associates%2C%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" aria-label="WhatsApp"><MessageCircle size={24}/></a>
</>;
}
