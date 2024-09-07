import Image from 'next/image'
import QuoteAuthor from '@/public/images/quote-author-02.jpg'
import Features from '@/public/images/features-03.png'

export default function Section03() {
  return (
    <section className="mt-12 md:mt-20" data-aos-id-3>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-6 pt-12 md:pt-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
                {/* Copy */}
                <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="100">
                Smart Ordering, Smarter Management                </h2>
                <p className="text-lg text-slate-500 mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="200">
                Your customers deserve the best. With Tacoza’s QR code-based ordering, customers can effortlessly scan, order, and pay. Meanwhile, you’ll benefit from AI-enhanced analytics, ensuring your restaurant operates at peak performance.
                </p>

                {/* Button */}
                <div className="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="300">
                  <div>
                    <a className="btn-sm inline-flex items-center text-rose-50 bg-rose-500 hover:bg-rose-600 group shadow-sm" href="apply.html">
                    Get Started
                      <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                        <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex max-w-md mx-auto md:mx-0 text-left" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="300">
                  <Image
                    className="rounded-full self-start shrink-0 mr-3"
                    src={QuoteAuthor}
                    width={32}
                    height={32}
                    alt="Quote author 02"
                  />
                  <div>
                    <blockquote className="text-slate-500 m-0">
                      “ Enjoy peace of mind knowing you have control over every aspect of your operations, from table orders to inventory, at your fingertips. ”
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0">
                <div className="relative -mx-8 md:mx-0">
                  <Image
                    src={Features}
                    className="md:max-w-none"
                    width={496}
                    height={496}
                    alt="Features 03"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}