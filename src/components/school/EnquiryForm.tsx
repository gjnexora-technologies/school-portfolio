import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EnquiryForm({ contact = false }: { contact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return <form className="form-panel" onSubmit={handleSubmit}>
    <h2>{contact ? "Send an enquiry" : "Enquire about admission"}</h2>
    <p>{contact ? "Share a question with the school." : "Tell us a little about your child's application."}</p>
    <div className="form-grid">
      <div className="field"><label htmlFor={contact ? "contact-name" : "student-name"}>{contact ? "Your name" : "Student name"}</label><input id={contact ? "contact-name" : "student-name"} name={contact ? "name" : "studentName"} autoComplete="name" required /></div>
      {!contact && <div className="field"><label htmlFor="parent-name">Parent / guardian</label><input id="parent-name" name="parentName" autoComplete="name" required /></div>}
      {!contact && <div className="field"><label htmlFor="class-applying">Class applying for</label><select id="class-applying" name="classApplying" defaultValue="" required><option value="" disabled>Select a class</option>{["Primary Education", "Middle School", "Secondary Education", "Higher Secondary Education"].map((item) => <option key={item}>{item}</option>)}</select></div>}
      <div className="field"><label htmlFor={contact ? "contact-phone" : "enquiry-phone"}>Phone</label><input id={contact ? "contact-phone" : "enquiry-phone"} type="tel" name="phone" autoComplete="tel" inputMode="tel" pattern="[+0-9 ()-]{7,20}" title="Enter a phone number using digits and common phone symbols." required /></div>
      <div className={`field ${contact ? "field-wide" : ""}`}><label htmlFor={contact ? "contact-email" : "enquiry-email"}>Email</label><input id={contact ? "contact-email" : "enquiry-email"} type="email" name="email" autoComplete="email" required /></div>
      <div className="field field-wide"><label htmlFor={contact ? "contact-message" : "enquiry-message"}>Message</label><textarea id={contact ? "contact-message" : "enquiry-message"} name="message" minLength={8} required /></div>
    </div>
    <Button className="school-button form-submit" type="submit">{contact ? "Send message" : "Send admission enquiry"} <ArrowRight aria-hidden="true" /></Button>
    {submitted && <div className="form-success" role="status"><CheckCircle2 size={17} aria-hidden="true" /> Thank you. Your enquiry is ready. The school will need to connect an official inbox to receive it.</div>}
  </form>;
}