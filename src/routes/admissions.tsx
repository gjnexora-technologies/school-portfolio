import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, FileText, MessageCircle, School } from "lucide-react";
import { EnquiryForm } from "@/components/school/EnquiryForm";
import { PageBanner, PlaceholderNote, SchoolFooter, SchoolHeader, SectionHeading } from "@/components/school/SchoolShell";
import { Button } from "@/components/ui/button";
import { faqItems, learningStages, photographs } from "@/data/school";

export const Route = createFileRoute("/admissions")({
  head: () => ({ meta: [
    { title: "Admissions | APG Matriculation Higher Secondary School" },
    { name: "description", content: "Learn about admission enquiries, classes, application steps, required documents, and FAQs at APG." },
    { property: "og:title", content: "Admissions at APG Matriculation Higher Secondary School" },
    { property: "og:description", content: "Start your child's journey with APG. Contact the school to ask about admission." },
  ] }),
  component: AdmissionsPage,
});

const processSteps = [
  { title: "Send an enquiry", text: "Tell the school which class you are interested in and how to reach you." },
  { title: "Speak with the school", text: "Ask about current availability, eligibility, and the admissions process." },
  { title: "Prepare documents", text: "The school will confirm the documents required for your application." },
  { title: "Next steps", text: "Follow the school's guidance on any next steps and important dates." },
];

function AdmissionsPage() {
  return <><SchoolHeader /><main>
    <PageBanner title="Start Your Child's Journey With APG." description="Begin with a conversation. The school can share current availability, requirements, and application guidance." image={photographs.classroom} />
    <section className="section-space"><div className="site-wrap two-column">
      <div><span className="eyebrow">Admissions enquiry</span><h2>A few simple steps to get started.</h2><p>The admissions team can help families learn about class availability and the application process.</p>
        <div className="detail-list"><div className="detail-row"><School size={18} /><span>Classes include primary, middle, secondary, and higher secondary education. Confirm current openings directly with the school.</span></div><div className="detail-row"><Check size={18} /><span>Eligibility and admission requirements may vary by class; please confirm with the admissions team.</span></div><div className="detail-row"><FileText size={18} /><span>Ask the school for its current list of required documents.</span></div><div className="detail-row"><MessageCircle size={18} /><span>Dates and class availability are confirmed by the school.</span></div></div>
        <PlaceholderNote>Admissions dates, eligibility, class openings, and required documents were not specified. Confirm these details with the school before publication.</PlaceholderNote>
      </div>
      <EnquiryForm />
    </div></section>
    <section className="section-space section-paper"><div className="site-wrap"><SectionHeading eyebrow="The process" title="A clear first conversation" description="Each family's path begins with an enquiry. The admissions team will confirm the details for the current school year." /><div className="steps-list">{processSteps.map((step) => <article className="step-item" key={step.title}><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
    <section className="section-space"><div className="site-wrap two-column"><div><span className="eyebrow">Common questions</span><h2>What families often ask.</h2><p>For the most up-to-date guidance, contact the school directly.</p><Button asChild className="school-button"><Link to="/contact">Contact the school <ArrowRight /></Link></Button></div>
      <div className="faq-list">{faqItems.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
    </div></section>
  </main><SchoolFooter /></>;
}