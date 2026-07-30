"use client";
import {useState} from "react";
export default function ContactForm(){
 const [form,setForm]=useState({name:"",phone:"",email:"",consultation:"Online Meeting",office:"India",datetime:"",message:""});
 const update=e=>setForm({...form,[e.target.name]:e.target.value});
 const text=()=>`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nConsultation: ${form.consultation}\nOffice: ${form.office}\nPreferred date/time: ${form.datetime}\n\nLegal matter:\n${form.message}`;
 const valid=()=>form.name&&form.phone&&form.email&&form.message;
 const email=()=>{if(!valid())return alert("Please complete all required fields.");location.href=`mailto:contact@larslegal.in?subject=${encodeURIComponent("Consultation request — "+form.name)}&body=${encodeURIComponent(text())}`};
 const wa=()=>{if(!valid())return alert("Please complete all required fields.");const nums={India:"919860243066",London:"447553359850",Dublin:"353894775244"};window.open(`https://wa.me/${nums[form.office]}?text=${encodeURIComponent("Hello LARS Legal Associates,\nI would like to book a consultation.\n\n"+text())}`,"_blank")};
 return <div className="form">
 {["name","phone","email"].map(f=><div className="field" key={f}><label>{f==="name"?"Full name *":f==="phone"?"Phone / WhatsApp *":"Email *"}</label><input name={f} type={f==="email"?"email":"text"} value={form[f]} onChange={update}/></div>)}
 <div className="field"><label>Consultation type *</label><select name="consultation" value={form.consultation} onChange={update}><option>Online Meeting</option><option>Office Meeting</option><option>Telephone Consultation</option></select></div>
 <div className="field"><label>Preferred office *</label><select name="office" value={form.office} onChange={update}><option>India</option><option>London</option><option>Dublin</option></select></div>
 <div className="field"><label>Preferred date and time</label><input type="datetime-local" name="datetime" value={form.datetime} onChange={update}/></div>
 <div className="field"><label>Brief description of the legal matter *</label><textarea name="message" value={form.message} onChange={update}/></div>
 <div className="formActions"><button className="btn dark" type="button" onClick={email}>Prepare Email</button><button className="btn" type="button" onClick={wa}>Send on WhatsApp</button></div>
 </div>
}
