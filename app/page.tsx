import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { DirectionsSection } from "@/components/home/directions-section"
import { HomePortfolio } from "@/components/home/home-portfolio"
import { AdvantagesSection } from "@/components/home/advantages-section"
import { OfferSection } from "@/components/home/offer-section"
import { ReviewsSection } from "@/components/home/reviews-section"
import { BrandsSection } from "@/components/home/brands-section"
import { BookingForm } from "@/components/booking-form"
import { ContactsSection } from "@/components/home/contacts-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DirectionsSection />
      <HomePortfolio />
      <AdvantagesSection />
      <OfferSection />
      <ReviewsSection />
      <BrandsSection />
      <BookingForm />
      <ContactsSection />
    </>
  )
}
