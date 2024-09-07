import Image from 'next/image'
import QuoteAuthor from '@/public/images/quote-author-01.jpg'
import CardsIllustration from '@/public/images/cards-illustration.svg'
import Features from '@/public/images/features-02.png'

export default function Section02() {
  return (
    <section data-aos-id-2="">
      <div className="relative max-w-7xl mx-auto">

        {/* Bg */}
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-stone-800 pointer-events-none -z-10" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:py-20">

            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">

              {/* Content */}
              <div className="md:max-w-lg">

                {/* Copy */}
                <h2 className="h2 text-white mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="100">
                Transform the Way You Manage Your Restaurant
                </h2>
                <p className="text-lg text-slate-400 mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="200">
                Tacoza offers a robust, customizable dashboard that adapts to your needs. Whether you run a cafe, bar, food truck, or full-service restaurant, our system supports real-time order management, inventory tracking, and financial reporting.
<br className='mb-4'/>
Join the growing list of businesses optimizing their operations with our flexible and scalable solutions. With AI-driven insights, you can make data-backed decisions faster and smarter.
                </p>

                {/* Button */}
                <div className="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                  <div>
                    <a className="btn-sm inline-flex items-center text-rose-50 bg-rose-500 hover:bg-rose-600 group shadow-sm" href="apply.html">
                    Get Your Dashboard
                      <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                        <svg className="fill-current" width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Quote */}
                <div className="hidden flex max-w-md mx-auto md:mx-0 text-left" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                  <Image
                    className="rounded-full self-start shrink-0 mr-3"
                    src={QuoteAuthor}
                    width={32}
                    height={32}
                    alt="Quote author 01"
                  />
                  <div>
                    <blockquote className="text-slate-400 m-0">
                      “ We know the card market very well and this product provides the speed, flexible account model and API-first approach that no
                      one else can. ”
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="md:absolute md:left-[412px] md:top-0 -mb-12 mt-8 md:mt-36 md:mb-0">
                <div className="relative -mx-16 md:mx-0">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-16 md:mt-0 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                    src={CardsIllustration}
                    alt="Cards illustration"
                    aria-hidden="true"
                  />
                  <div data-aos="fade-up" data-aos-anchor="[data-aos-id-2]">
                    <Image src={Features} className="md:max-w-none md:rotate-[48deg]" width={775} alt="Features 01" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}