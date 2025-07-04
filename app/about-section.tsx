import { Building2, Users, Wrench, Globe } from "lucide-react"
import SEOOptimizedContent from "../components/seo-optimized-content"

export default function AboutSection() {
  const features = [
    {
      icon: Building2,
      title: "Established 2006",
      description: "Over 17 years of experience in IT services and computer electronics",
    },
    {
      icon: Users,
      title: "Diverse Clientele",
      description: "Serving Government, semi-Government and Private organizations",
    },
    {
      icon: Wrench,
      title: "Comprehensive Services",
      description: "From repairs to data center installation and server customization",
    },
    {
      icon: Globe,
      title: "Strategic Location",
      description: "Located in the center of Gilgit, Gilgit-Baltistan for easy accessibility",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <SEOOptimizedContent />
      <div className="container mx-auto px-4">
        {/* SEO Optimized Heading Structure */}
        <header className="text-center mb-16 scroll-animate">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About STG - Soft Technical Group Pakistan</h1>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-glow"></div>
          <h2 className="text-xl text-gray-600 mt-4">Leading IT Solutions Provider in Gilgit-Baltistan Since 2006</h2>
        </header>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - SEO Optimized Content */}
          <div className="space-y-6 scroll-animate-left">
            <div className="prose prose-lg text-gray-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Premier IT Services & Data Center Solutions in Pakistan
              </h3>

              <p className="text-lg leading-relaxed text-gray-600 mb-6 scroll-animate stagger-1">
                <strong className="text-stg-orange">Soft Technical Group (STG)</strong> established during the year{" "}
                <strong className="text-stg-orange">2006</strong>, is the leading IT solutions provider in{" "}
                <strong className="text-stg-orange">Gilgit-Baltistan, Pakistan</strong>. We specialize in delivering
                comprehensive IT services, data center establishment, and computer electronics at competitive pricing
                with exceptional service and expert guidance.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Government & Enterprise IT Services Pakistan</h4>
              <p className="leading-relaxed text-gray-600 mb-6 scroll-animate stagger-2">
                STG provides access to <strong className="text-stg-orange">OEM products</strong> and{" "}
                <strong className="text-stg-orange">custom build systems</strong> for Government, semi-Government, and
                Private organizations across Pakistan. Our services include monthly and annual maintenance contracts for
                laptops, desktops, servers, tablets, phones, and GPS consoles throughout{" "}
                <strong className="text-stg-orange">Gilgit-Baltistan</strong>.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Data Center Establishment & Server Customization Expertise
              </h4>
              <p className="leading-relaxed text-gray-600 mb-6 scroll-animate stagger-3">
                We have extensive expertise in <strong className="text-stg-orange">Office Automation</strong>,{" "}
                <strong className="text-stg-orange">Data Center Installation</strong>, and{" "}
                <strong className="text-stg-orange">Server customization</strong> with professional installation and
                deployment services. STG has successfully established{" "}
                <strong className="text-stg-orange">4 tier data centers</strong> across Gilgit-Baltistan, helping
                customers optimize their network & systems while rapidly deploying new technologies.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Strategic Location in Gilgit, Pakistan</h4>
              <p className="leading-relaxed text-gray-600 mb-6 scroll-animate stagger-4">
                Located in the center of <strong className="text-stg-orange">Gilgit, Gilgit-Baltistan</strong>, our
                strategic position provides easy accessibility to the local community and regional businesses. We offer
                the latest technology computer hardware, custom-built computer systems, comprehensive computer services,
                equipment rentals, and professional networking services across{" "}
                <strong className="text-stg-orange">Pakistan</strong>.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Commitment to Excellence in IT Solutions</h4>
              <p className="leading-relaxed text-gray-600 scroll-animate stagger-5">
                We are dedicated to providing consistently high client satisfaction through excellent service, carrying
                items not locally available, and maintaining a professional atmosphere at competitive prices. Our work
                environment emphasizes respect for our clients and community throughout{" "}
                <strong className="text-stg-orange">Gilgit-Baltistan, Pakistan</strong>.
              </p>
            </div>

            {/* SEO Enhanced Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className={`flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all duration-300 card-hover scroll-animate stagger-${index + 6}`}
                >
                  <div className="w-10 h-10 bg-stg-orange rounded-lg flex items-center justify-center flex-shrink-0 hover-scale animate-glow">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 text-sm">{feature.title}</h5>
                    <p className="text-gray-600 text-xs">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column - Image with SEO Alt Text */}
          <div className="scroll-animate-right">
            <div className="relative group">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="STG Soft Technical Group office in Gilgit Pakistan - Leading IT solutions provider and data center establishment company"
                className="w-full h-[600px] object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stg-orange/20 to-transparent rounded-lg transition-opacity duration-500 group-hover:opacity-75"></div>

              {/* SEO Enhanced Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center card-hover scroll-animate-scale stagger-1">
                    <div className="text-2xl font-bold text-stg-orange animate-pulse-continuous">17+</div>
                    <div className="text-gray-600 text-sm">Years Experience Pakistan</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center card-hover scroll-animate-scale stagger-2">
                    <div className="text-2xl font-bold text-stg-orange animate-pulse-continuous">500+</div>
                    <div className="text-gray-600 text-sm">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-stg-orange rounded-full animate-float"></div>
              <div
                className="absolute top-20 left-4 w-3 h-3 bg-orange-300 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-20 right-8 w-2 h-2 bg-orange-400 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
