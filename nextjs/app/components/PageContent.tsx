import Header from './Header';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import BackToTop from './BackToTop';
import { Language, content } from '../content';

interface PageContentProps {
  lang: Language;
}

export default function PageContent({ lang }: PageContentProps) {
  const t = content[lang];

  return (
    <>
      <Header lang={lang} />
      
      <main className="section-content">
        {/* Main Section */}
        <section id="main" className="w-[940px] max-w-full mx-auto bg-none relative">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <h1 className="mt-[10px] mb-[15px]">{t.welcome.title}</h1>
              <p className="intro">{t.welcome.intro}</p>
              <ul>
                {t.welcome.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <p className="intro">{t.welcome.cta}</p>
            </div>

            {/* Image Slider */}
            <div className="flex-1 min-w-0">
              <ImageSlider images={['/images/slides/slide.png']} />
            </div>
          </div>

          <BackToTop text={t.backToTop} />
        </section>

        {/* Services Section */}
        <section id="services">
          <div className="section-content">
            <h1 className="mb-[25px]">{t.services.title}</h1>
            
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-0">
              {/* Left Column */}
              <div className="flex-1 space-y-6">
                {/* Welding Service */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/images/services/welding.png" 
                      alt={t.services.welding.title}
                      className="w-[42px] h-[41px] flex-shrink-0"
                    />
                    <h2 className="text-[22px] leading-[25px] mt-0 mb-0 font-serif">{t.services.welding.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {t.services.welding.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                    <li>
                      {lang === 'pt' ? 'Nas ligas:' : 'In:'}
                      <ul className="mt-1">
                        {t.services.welding.materials.map((material) => (
                          <li key={material}>{material}</li>
                        ))}
                      </ul>
                    </li>
                    <li>{lang === 'pt' ? 'Soldadura de estruturas, tubagem, e peças diversas' : 'Welding of structures, piping, and various parts'}</li>
                    <li>{lang === 'pt' ? 'Cedência de soldadores certificados e preparadores' : 'Provision of certified welders and preparers'}</li>
                  </ul>
                </div>

                {/* Coordination Service */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/images/services/coord.png" 
                      alt={t.services.coordination.title}
                      className="w-[42px] h-[41px] flex-shrink-0"
                    />
                    <h2 className="text-[22px] leading-[25px] mt-0 mb-0 font-serif">{t.services.coordination.title}</h2>
                  </div>
                  <p className="mb-4">{t.services.coordination.intro}</p>
                  <ul className="space-y-2">
                    {t.services.coordination.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 space-y-6">
                {/* Training Service */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/images/services/webdevelopment.png" 
                      alt={t.services.training.title}
                      className="w-[42px] h-[41px] flex-shrink-0"
                    />
                    <h2 className="text-[22px] leading-[25px] mt-0 mb-0 font-serif">{t.services.training.title}</h2>
                  </div>
                  <p className="mb-4">{t.services.training.intro}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <strong className="block mb-2">{lang === 'pt' ? 'Processos' : 'Processes'}</strong>
                      <ul className="space-y-1">
                        {t.services.training.processes.map((process) => (
                          <li key={process}>{process}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <strong className="block mb-2">{t.services.training.materialsLabel}</strong>
                      <ul className="space-y-1">
                        {t.services.training.materials.map((material) => (
                          <li key={material}>{material}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <strong className="block mb-2">{t.services.training.aboutLabel}</strong>
                      <ul className="space-y-1">
                        {t.services.training.about.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <strong className="block mb-2">{t.services.training.certificationLabel}</strong>
                      <p className="mb-2">{t.services.training.certificationText}</p>
                      <ul className="space-y-1">
                        {t.services.training.certifications.map((cert) => (
                          <li key={cert}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clear-both overflow-hidden mb-[25px]">
              <div className="float-left w-full">
                <img 
                  src="/images/services/webdesign.png" 
                  alt={t.services.consultancy.title}
                  className="float-left w-[42px] h-[41px] mt-[13px] mr-3"
                />
                <h2 className="mt-[15px] mb-[10px]">{t.services.consultancy.title}</h2>
                <p>{t.services.consultancy.intro}</p>
                <ul>
                  {t.services.consultancy.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <BackToTop text={t.backToTop} />
          </div>
        </section>

        {/* Advantages Section */}
        <section id="advantages" className="clear-both relative">
          <div className="section-content">
            <h1>{t.advantages.title}</h1>

            <div className="float-left w-full">
              <br />
              <p className="intro text-[21px] italic">{t.advantages.intro}</p>
              <br />
              
              <div className="clear-both overflow-hidden mb-0">
                <div className="float-left w-full">
                  <strong>{t.advantages.qualityControl.title}</strong>
                  <ul>
                    {t.advantages.qualityControl.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <strong>{t.advantages.professionalism.title}</strong>
                  <ul>
                    {t.advantages.professionalism.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <BackToTop text={t.backToTop} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="clear-both relative">
          <div className="section-content">
            <h1>{t.contact.title}</h1>

            <div className="float-left w-[620px] max-w-full">
              <p className="intro">{t.contact.intro}</p>
              
              <p>
                <strong>LR MOURÃO</strong><br />
                LEIRIA<br />
                PORTUGAL
              </p>

              <p>
                {t.contact.phone}: (+351) 916 672 566<br />
                Email: <a href="mailto:geral@lrmourao.com">geral@lrmourao.com</a>
              </p>
            </div>

            <BackToTop text={t.backToTop} />
          </div>
        </section>
      </main>

      <div style={{ clear: 'both', marginBottom: '50px' }}></div>

      <Footer lang={lang} />
    </>
  );
}

