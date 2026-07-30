
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata={
  metadataBase:new URL("https://larslegal.in"),
  title:{default:"LARS Legal Associates",template:"%s | LARS Legal Associates"},
  description:"Strategic legal solutions across borders for individuals and businesses.",
  openGraph:{title:"LARS Legal Associates",description:"Strategic legal solutions across borders.",url:"https://larslegal.in",siteName:"LARS Legal Associates",images:["/office-entry.jpeg"],type:"website"},
};
export default function RootLayout({children}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
