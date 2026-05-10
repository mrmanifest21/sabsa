import { useEffect, useRef, useState } from 'react';

const galleryItems = [
  {
    src: '/images/brain-activation-session.jpg',
    title: 'Brain Activation Sessions',
    aspect: '16/10',
  },
  {
    src: '/images/sensory-stimulation.jpg',
    title: 'Sensory Stimulation',
    aspect: '4/3',
  },
  {
    src: '/images/neural-pathways.jpg',
    title: 'Neural Pathways',
    aspect: '4/3',
  },
  {
    src: '/images/community-team.jpg',
    title: 'Community Team',
    aspect: '4/3',
  },
  {
    src: '/images/measured-outcomes.jpg',
    title: 'Measured Outcomes',
    aspect: '16/10',
  },
  {
    src: '/images/proudly-south-african.jpg',
    title: 'Proudly South African',
    aspect: '4/3',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative section-padding bg-[#0A1628]"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span
            className={`font-mono text-[0.75rem] tracking-[0.12em] text-[#06B6D4] block mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            GALLERY
          </span>
          <h2
            className={`font-sans font-bold text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.1] tracking-[-0.01em] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Visual Stories
          </h2>
          <p
            className={`mt-4 text-[clamp(0.95rem,1.5vw,1.15rem)] text-[rgba(255,255,255,0.7)] leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Glimpses of SABSA in action — across communities, schools, and clinics.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {galleryItems.map((item, i) => {
            const isLarge = i === 0 || i === 4;
            return (
              <div
                key={item.title}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-700 ${
                  isLarge ? 'lg:col-span-2' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${0.12 * i}s`,
                  aspectRatio: item.aspect,
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.9)] via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-semibold text-[1rem] text-white">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
