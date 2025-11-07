import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FAQS = [
  {
    question: "WHO QUALIFIES FOR AN E-2 VISA?",
    answer:
      "You must be a national of one of the Treaty Countries to qualify. Treaty countries include Canada, the United Kingdom, Mexico, Argentina, France, Germany, Italy, and Spain.",
  },
  {
    question: "HOW LONG DOES AN E2 VISA LAST FOR?",
    answer:
      "Most E-2 visas are issued for up to five years, but the length of stay per entry may vary by treaty country. Extensions can be requested indefinitely as long as the business remains active and compliant.",
  },
  {
    question: "DOES AN E2 VISA LEAD TO A GREEN CARD?",
    answer:
      "The E-2 visa is a non-immigrant classification and does not directly lead to a green card. However, many entrepreneurs use their E-2 status as a foundation to pursue EB-2 NIW, EB-5, or family-based residency pathways.",
  },
  {
    question: "WHAT IS THE DIFFERENCE BETWEEN CONSULAR FILING AND USCIS FILING?",
    answer:
      "Consular filing means you interview and receive the visa at a U.S. embassy abroad. USCIS filing (change of status) is processed inside the United States and does not confer an actual visa stamp, so international travel is restricted until approval.",
  },
  {
    question: "WHAT IS AN E-2 VISA AND WHAT ARE THE REQUIREMENTS?",
    answer:
      "An E-2 visa allows investors from treaty countries to direct and develop a U.S. enterprise. Applicants must invest a substantial amount, prove the business is real and operating, show they will develop and direct the venture, and intend to depart when status ends.",
  },
];

const resources = [
  {
    category: "BLOG",
    title: "UNDERSTANDING VISA CATEGORIES: WHICH ONE IS RIGHT FOR YOU?",
    date: "23 OCT",
    featured: false,
  },
  {
    category: "NEWS",
    title: "VISA PROCESSING TIMES EXPLAINED: TIPS TO AVOID COMMON DELAYS",
    date: "23 OCT",
    featured: false,
  },
  {
    category: "BLOG",
    title: "HOW TO STRENGTHEN YOUR IMMIGRATION CASE",
    date: "23 OCT",
    featured: true,
  },
];

const ResourceSection = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(FAQS[0].question);

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-primary-light">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
            WHAT YOU NEED TO KNOW
          </h2>
          <p className="max-w-2xl text-muted-foreground leading-relaxed">
            Explore the answers to commonly asked questions and gain valuable insights into how we can help make your
            journey to the United States seamless and successful.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-border/60 shadow-sm">
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={(value) => setOpenItem(value || undefined)}
            className="divide-y divide-border/60"
          >
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question} className="px-6">
                <AccordionTrigger className="flex items-center gap-4 py-6 text-left text-base font-semibold uppercase tracking-[0.2em] text-foreground">
                  <span className="text-accent">Q.</span>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pl-10 pb-6 text-sm leading-relaxed text-muted-foreground transition-all duration-300 data-[state=closed]:-translate-y-2 data-[state=closed]:opacity-0 data-[state=open]:translate-y-0 data-[state=open]:opacity-100">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-none border border-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-accent transition hover:bg-accent hover:text-accent-foreground">
            MORE FAQS
          </button>
        </div>

        <div className="relative mt-24">
          <div className="pointer-events-none absolute inset-0 text-center">
            <div className="text-[6rem] lg:text-[10rem] font-black text-muted-foreground/5 leading-none whitespace-nowrap">
              DRIVEN BY EXPERIENCE
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <p className="text-primary-light text-sm font-medium tracking-wide uppercase mb-4">
                LEARN. PLAN. SUCCEED.
              </p>
              <h2 className="text-5xl font-black text-foreground mb-4">
                IMMIGRATION RESOURCE CENTER
              </h2>
              <p className="text-muted-foreground">
                Educational Posts About Visa Processes, Timelines, and Strategy
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all hover:shadow-lg group ${
                    resource.featured ? "bg-primary text-primary-foreground" : "hover:border-primary"
                  }`}
                >
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-xs font-medium ${
                            resource.featured ? "text-accent" : "text-primary-light"
                          }`}
                        >
                          {resource.category}
                        </span>
                        <span
                          className={`text-xs ${
                            resource.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}
                        >
                          {resource.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-4 leading-tight">
                        {resource.title}
                      </h3>
                    </div>
                    <Button
                      size="icon"
                      variant={resource.featured ? "secondary" : "outline"}
                      className={`self-end ${
                        resource.featured ? "bg-accent hover:bg-accent-hover text-accent-foreground" : ""
                      }`}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold"
              >
                VIEW MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
