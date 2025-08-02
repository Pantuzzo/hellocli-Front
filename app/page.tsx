"use client"

import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Demo } from "@/components/sections/demo"
import { Problem } from "@/components/sections/problem"
import { Solution } from "@/components/sections/solution"
import { Features } from "@/components/sections/features"
import { SocialProof } from "@/components/sections/social-proof"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Demo />
      <Problem />
      <Solution />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
