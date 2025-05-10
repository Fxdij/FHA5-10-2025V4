import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { ServiceCard } from "@/components/service-card"

export default function Home() {
  const services = [
    {
      id: 1,
      name: "UTILITY DESIGN",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telecommunications.jpg-PGBWh74JwU10hdiQcHd3NWNP4YDdFL.jpeg",
      hoverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telecommunications%20colored.jpg-RyhJOYpUwn8MrFUfoRWbmCabn1uxBA.jpeg",
      description:
        "Our expertise in utility design spans underground, aerial, fiber, copper, and 5G networks. From initial concept to detailed engineering, we ensure seamless integration of utility infrastructure into urban development projects. By combining technical precision with innovative solutions, we deliver high-quality designs that meet modern demands. Whether handling specialty permits or optimizing network layouts, our team is dedicated to efficiency, reliability, and compliance at every step.",
    },
    {
      id: 2,
      name: "GEOSPATIAL SURVEY",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SURVEYING.jpg-aN9LO82m2Flb2m9QmEGNG2mCzy9TDx.jpeg",
      hoverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SURVEYINGcolor.jpg-kJ1CLDua73pMIyTv4m22ldflFAEv0E.jpeg",
      description:
        "Surveying is the backbone of accurate and effective project execution. We leverage cutting-edge tools and technology to collect precise data, offering insights critical for planning and design. From land assessments to detailed site analysis, our surveys provide the foundation for seamless integration with engineering and construction efforts. Our commitment to accuracy ensures every project aligns with regulatory standards and site-specific requirements.",
    },
    {
      id: 3,
      name: "ENGINEERING",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/engineering%20(1).jpg-6au8cx8LLUJaKsspvqdfDNpHgGR4WH.jpeg",
      hoverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/engineering%20colored%20(1).jpg-XIneU3m52Dl7jopjN3mM5s1lgFOkbN.jpeg",
      description:
        "we offer end-to-end engineering solutions tailored to transform ideas into reality. specializing in design, drafting, and project management, our services prioritize sustainability, innovation, and compliance. from complex urban developments to tailored designs, we focus on creating efficient and cost-effective solutions. our multidisciplinary approach ensures smooth collaboration across all project phases, meeting timelines and exceeding client expectations.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AutoSliderBanner />

      <section id="about-us" className="w-full py-12 md:py-24 bg-[#010101]">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">ABOUT US</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300">
              We are a dedicated utility design and engineering firm. With extensive experience in both underground and
              aerial projects, we pride ourselves on delivering high-quality work efficiently and effectively. Our
              commitment to excellence ensures that your projects are completed on time and to the highest standards.
            </p>
          </div>
        </div>
      </section>

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

      <section id="contact-us" className="w-full py-12 md:py-24 bg-[#010101]">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-100">CONTACT US</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-gray-300">
              <p className="mb-4">
                <strong>Address:</strong>
                <br />
                <a
                  href="https://www.google.com/maps?sca_esv=74f7731948ddd43d&rlz=1C1ONGR_enCA1046CA1046&output=search&q=25+SHEPPARD+AVE.+W.+SUITE+%23300,+NORTH+YORK,+ON,+M2N+6S6&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpIgVFCTcbZI9VMGzNoV0iOW2r2RmmbgIG0Wrb1wPZ_5-5ZhyOApT8uhUDcWen8VYAbEzSycY2vztd5NAB-wyDpImFEz5JbNoaCeOl_Bk_qeVFjmcoMbtplpR8IsToCrsEBIpUnoqI3eBpKSCh_v3dtKNhiU4jW4P1hsLFg7Tzj1j1H7TlcG2X_h_k-YFlw5FQnZBeOg&entry=mc&ved=1t:200715&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  25 Sheppard Ave. W. Suite #300,
                  <br />
                  North York, ON, M2N 6S6
                </a>
              </p>
              <p className="mb-4">
                <strong>Email:</strong>
                <br />
                General@FHASolutions.ca
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                (647) 492-7193
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
