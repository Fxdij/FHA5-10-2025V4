import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { ServiceCard } from "@/components/service-card"

export default function Home() {
  const services = [
    {
      id: 1,
      name: "UTILITY DESIGN & ENGINEERING",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telecommunications.jpg-PGBWh74JwU10hdiQcHd3NWNP4YDdFL.jpeg",
      hoverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telecommunications%20colored.jpg-RyhJOYpUwn8MrFUfoRWbmCabn1uxBA.jpeg",
      description:
        "End-to-end fibre, coax, telecom, and hydro joint-use design. We deliver PEng-stamped engineering across underground, aerial, fibre, copper, and 5G networks — from initial concept through detailed design, with full project coordination across all parties involved.",
    },
    {
      id: 2,
      name: "SURVEY",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SURVEYING.jpg-aN9LO82m2Flb2m9QmEGNG2mCzy9TDx.jpeg",
      hoverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SURVEYINGcolor.jpg-kJ1CLDua73pMIyTv4m22ldflFAEv0E.jpeg",
      description:
        "Geospatial survey is the backbone of accurate project execution. We leverage GPS, IKE, and aerial methods to deliver SpatialNet-ready inputs, asbuilts, and fibre audits at scale — surveying 100 poles per week and 50 km of buried infrastructure per week.",
    },
    {
      id: 3,
      name: "NETWORK MANAGEMENT",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/engineering%20(1).jpg-6au8cx8LLUJaKsspvqdfDNpHgGR4WH.jpeg",
      hoverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/engineering%20colored%20(1).jpg-XIneU3m52Dl7jopjN3mM5s1lgFOkbN.jpeg",
      description:
        "Permitting, grantor coordination, and project delivery oversight. We process 500+ permits across 170+ active grantors with a 90% first-pass approval rate, leading the conversation between municipalities, LDCs, conservation authorities, railroads, and your construction crews.",
    },
  ]

  const metrics = [
    { value: "500+", label: "Permits Approved", sub: "Across Ontario · 6 months" },
    { value: "170+", label: "Active Grantors", sub: "Municipalities, LDCs, Conservation, Railroad" },
    { value: "90%", label: "First-Pass Approval", sub: "98% with one revision" },
    { value: "7 days", label: "Design Turnaround", sub: "As Prime · 1-day revisions" },
    { value: "100/wk", label: "Aerial Throughput", sub: "Poles surveyed & engineered" },
    { value: "50 km/wk", label: "Buried Throughput", sub: "Surveyed & engineered" },
  ]

  const specialtyPermits = [
    "MTO & TCPs",
    "Conservation Authorities",
    "Rail Crossings",
    "Bridge Crossings",
    "River Crossings",
    "High-Pressure Gas Crossings",
  ]

  const serviceCities = [
    "Toronto", "Mississauga", "Ottawa", "London", "Hamilton", "Kingston",
    "Waterloo", "Niagara", "Windsor", "Sudbury", "Thunder Bay",
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AutoSliderBanner />

      {/* Credential Strip */}
      <section className="w-full py-3 bg-[#0A0A0B] border-b border-[#27272A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#FF9F0A] mb-1">Currently Engaged As</p>
              <p className="text-base md:text-lg font-semibold text-gray-100">
                Prime Designer for <span className="text-[#FF9F0A] italic">Rogers Communications</span> across Ontario
              </p>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#27272A]"></div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#FF9F0A] mb-1">In Partnership With</p>
              <p className="text-base md:text-lg font-semibold text-gray-100">
                Wirecomm Systems Inc. <span className="text-gray-400">— Construction Partner</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about-us" className="w-full py-12 md:py-24 bg-[#010101]">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">ABOUT US</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              FHA Solutions Inc. is a Toronto-based utility design and engineering firm specializing in
              <span className="text-gray-100 font-semibold"> fibre, coax, telecom, and hydro joint-use design</span>.
              We deliver end-to-end services — survey, engineering, permitting, network design, and full project
              coordination — under one roof. As Prime Designer for Rogers Communications across Ontario, we lead
              the conversation between every party involved, from grantors to construction crews.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="w-full py-12 md:py-24 bg-[#010101]">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-100">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section id="performance" className="w-full py-12 md:py-24 bg-[#0A0A0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-[#FF9F0A] mb-2">6-Month Performance</p>
            <h2 className="text-3xl font-bold text-gray-100">BY THE NUMBERS</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px max-w-5xl mx-auto bg-[#27272A] border border-[#27272A]">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-[#010101] p-6 md:p-8">
                <div className="text-3xl md:text-4xl font-bold text-[#FF9F0A] mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm md:text-base font-semibold text-gray-100 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-400">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City of London Quote */}
      <section className="w-full py-12 md:py-20 bg-[#010101]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto border-l-4 border-[#FF9F0A] pl-6 md:pl-10 py-2">
            <p className="text-xl md:text-3xl font-semibold text-gray-100 leading-snug mb-3">
              &ldquo;FHA permit packages are the <span className="text-[#FF9F0A] italic">new standard</span> for utility coordination.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              — City of London, Ontario
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Permits */}
      <section id="specialty-permits" className="w-full py-12 md:py-20 bg-[#0A0A0B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-[#FF9F0A] mb-2">Specialty Permit Experience</p>
            <h2 className="text-3xl font-bold text-gray-100">SPECIALTY PERMITS</h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
            {specialtyPermits.map((permit, idx) => (
              <div
                key={idx}
                className="bg-[#010101] border border-[#27272A] p-4 text-center text-sm md:text-base font-semibold text-gray-100 hover:border-[#FF9F0A] transition-colors"
              >
                {permit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id="service-area" className="w-full py-12 md:py-20 bg-[#010101]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-widest text-[#FF9F0A] mb-2">Province-Wide Service · Ontario</p>
            <h2 className="text-3xl font-bold text-gray-100">WE SERVICE ALL OF ONTARIO</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {serviceCities.map((city, idx) => (
                <span key={city}>
                  <span className="font-semibold text-gray-100">{city}</span>
                  {idx < serviceCities.length - 1 && <span className="text-[#FF9F0A] mx-2">·</span>}
                </span>
              ))}
              <span className="text-[#FF9F0A] mx-2">·</span>
              <span className="text-gray-400">+ More</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us - 2-column with map */}
      <section id="contact-us" className="w-full py-12 md:py-24 bg-[#0A0A0B]">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-100">CONTACT US</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
            {/* Left: Contact info */}
            <div className="text-gray-300 lg:pr-8">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#FF9F0A] mb-2">Address</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1200+Bay+St+Unit+1201+Toronto+ON"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-100 hover:text-[#FF9F0A] transition-colors block"
                  >
                    1200 Bay Street, Unit 1201
                    <br />
                    Toronto, ON
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#FF9F0A] mb-2">Email</p>
                  <a
                    href="mailto:general@fhasolutions.ca"
                    className="text-lg text-gray-100 hover:text-[#FF9F0A] transition-colors"
                  >
                    general@fhasolutions.ca
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#FF9F0A] mb-2">Phone</p>
                  <a
                    href="tel:+16474927193"
                    className="text-lg text-gray-100 hover:text-[#FF9F0A] transition-colors"
                  >
                    (647) 492-7193
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#FF9F0A] mb-2">Web</p>
                  <a
                    href="https://www.fhasolutions.ca"
                    className="text-lg text-gray-100 hover:text-[#FF9F0A] transition-colors"
                  >
                    fhasolutions.ca
                  </a>
                </div>
              </div>
            </div>
            {/* Right: Map */}
            <div className="w-full h-80 lg:h-96 rounded-lg overflow-hidden border border-[#27272A]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0!2d-79.3868!3d43.6677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNDPCsDQwJzAzLjciTiA3OcKwMjMnMTIuNSJX!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FHA Solutions Inc. — 1200 Bay Street, Unit 1201, Toronto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
