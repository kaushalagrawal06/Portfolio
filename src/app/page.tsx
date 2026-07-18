import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import SectionHeading from '@/components/SectionHeading'
import PositioningDiagram from '@/components/PositioningDiagram'
import ExpertiseCard from '@/components/ExpertiseCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import ProcessSteps from '@/components/ProcessSteps'
import NexWerkFeature from '@/components/NexWerkFeature'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import SkillsCloud from '@/components/SkillsCloud'
import WorkingPrinciples from '@/components/WorkingPrinciples'
import FinalCTA from '@/components/FinalCTA'
import MagneticButton from '@/components/MagneticButton'
import SectionBackground from '@/components/SectionBackground'
import FAQSection from '@/components/FAQSection'
import { expertiseAreas } from '@/data/expertise'
import { caseStudies } from '@/data/ventures'
import { experience } from '@/data/experience'
import { faqItems } from '@/data/faq'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-10">
        <SectionHeading
          eyebrow="Positioning"
          title="AI is valuable only when it improves how the business actually works."
          description="Every engagement starts with the operating problem, not the technology — automation and AI are tools applied once the process itself is understood."
        />
        <PositioningDiagram />
      </section>

      <section className="relative py-24">
        <SectionBackground variant="expertise" />
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col gap-12">
          <SectionHeading
            eyebrow="Expertise"
            title="Where I create the most business value"
            description="Six areas I work in most — each grounded in real operating experience, not a generic services menu."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area, i) => (
              <ExpertiseCard key={area.slug} area={area} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <SectionBackground variant="work" />
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHeading
              eyebrow="Selected Work"
              title="Systems I've built and businesses I've helped run better"
            />
            <MagneticButton href="/work" variant="secondary" className="shrink-0">
              View all work
            </MagneticButton>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-12">
        <SectionHeading eyebrow="How I Work" title="A practical, five-step process" />
        <ProcessSteps />
      </section>

      <NexWerkFeature />

      <section className="relative py-24">
        <SectionBackground variant="experience" />
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col gap-12">
          <SectionHeading eyebrow="Experience" title="A journey across industries and markets" />
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-12">
        <SectionHeading eyebrow="Skills" title="The toolkit behind the work" />
        <SkillsCloud />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-12">
        <SectionHeading eyebrow="Working Principles" title="How I approach every engagement" />
        <WorkingPrinciples />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 flex flex-col gap-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions, answered directly"
          description="Straight answers about what I do, who I work with, and how engagements start."
        />
        <FAQSection items={faqItems} />
      </section>

      <FinalCTA />
    </>
  )
}
