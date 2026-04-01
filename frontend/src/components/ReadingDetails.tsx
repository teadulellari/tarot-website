import { FC, useContext, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import theLovers from "../assets/TheLovers1.png";
import theEmpress from "../assets/TheLovers2.png";
import twoOfSwords from "../assets/TheLovers3.png";
import aceOfPnt from "../assets/TheLovers4.png";
import SuggestionCard from "./SuggestionCard";
import theMoon from "../assets/TheMoon.png";
import RevealOnScroll from "../HomePage/RevealOnScroll";
import Footer from "./Footer";
import { TextDBContext } from "./contexts/TextDBContext";
import { FaCheckCircle } from "react-icons/fa";

interface ServiceProps {
  img: string;
  title: string;
  price: string;
  description: string;
  reasonsToChoose: string[];
}

interface ReadingDetailsParams {
  readingType: string;
  [key: string]: string | undefined;
}

interface ReadingDetailsProps {
  scrollTo: (identifier: string) => void;
}

const ReadingDetails: FC<ReadingDetailsProps> = ({ scrollTo }) => {
  const readingType = useParams<ReadingDetailsParams>()?.readingType;
  const location = useLocation();
  const textDB = useContext(TextDBContext);

  useEffect(() => {
    scrollTo("top");
  }, [location, scrollTo]);

  const readingData: Record<string, ServiceProps> = {
    "love-reading": {
      img: theLovers,
      title: textDB.readingdata["love-reading"].title,
      price: textDB.readingdata["love-reading"].price,
      description: textDB.readingdata["love-reading"].description,
      reasonsToChoose: textDB.readingdata["love-reading"].reasonsToChoose,
    },
    "finances-reading": {
      img: theEmpress,
      title: textDB.readingdata["finances-reading"].title,
      price: textDB.readingdata["finances-reading"].price,
      description: textDB.readingdata["finances-reading"].description,
      reasonsToChoose: textDB.readingdata["finances-reading"].reasonsToChoose,
    },
    "decision-making-reading": {
      img: twoOfSwords,
      title: textDB.readingdata["decision-making-reading"].title,
      price: textDB.readingdata["decision-making-reading"].price,
      description: textDB.readingdata["decision-making-reading"].description,
      reasonsToChoose: textDB.readingdata["decision-making-reading"].reasonsToChoose,
    },
    "spiritual-guidance-reading": {
      img: aceOfPnt,
      title: textDB.readingdata["spiritual-guidance-reading"].title,
      price: textDB.readingdata["spiritual-guidance-reading"].price,
      description: textDB.readingdata["spiritual-guidance-reading"].description,
      reasonsToChoose: textDB.readingdata["spiritual-guidance-reading"].reasonsToChoose,
    },
    "short-reading": {
      img: theMoon,
      title: textDB.readingdata["short-reading"].title,
      price: textDB.readingdata["short-reading"].price,
      description: textDB.readingdata["short-reading"].description,
      reasonsToChoose: textDB.readingdata["short-reading"].reasonsToChoose,
    },
  };

  const service = readingType ? readingData[readingType] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-soft-lavender pt-20">
        {textDB.readingdetails.error}
      </div>
    );
  }

  const relatedReadings: Record<string, string[]> = {
    "love-reading": ["finances-reading", "decision-making-reading", "spiritual-guidance-reading", "short-reading"],
    "finances-reading": ["love-reading", "decision-making-reading", "spiritual-guidance-reading", "short-reading"],
    "decision-making-reading": ["love-reading", "finances-reading", "spiritual-guidance-reading", "short-reading"],
    "spiritual-guidance-reading": ["love-reading", "finances-reading", "decision-making-reading", "short-reading"],
    "short-reading": ["love-reading", "finances-reading", "decision-making-reading", "spiritual-guidance-reading"],
  };

  const suggestions = readingType ? relatedReadings[readingType] : [];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Detail Section */}
      <section className="section-padding">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-4 rounded-3xl bg-gold/5 blur-2xl group-hover:bg-gold/10 transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-glass">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-auto max-h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-3">
                  {service.title}
                </h1>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-2xl font-bold text-gold">{service.price}</span>
                </div>

                <div className="divider-gold mb-6" />

                <div className="mb-8">
                  <h2 className="font-display text-lg font-semibold text-soft-lavender mb-3">
                    {textDB.readingdetails.expect}
                  </h2>
                  <p className="text-soft-lavender/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="font-display text-lg font-semibold text-soft-lavender mb-3">
                    {textDB.readingdetails.whyus}
                  </h2>
                  <ul className="space-y-2.5">
                    {service.reasonsToChoose.map((reason, index) => (
                      <li key={index} className="flex items-start gap-3 text-soft-lavender/60">
                        <FaCheckCircle className="w-4 h-4 text-gold/70 shrink-0 mt-0.5" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-soft-lavender/40 mb-4">
                  Request this service through the booking form. Policies are
                  shown before submission.
                </p>

                <Link
                  to={`/contactForm?service=${encodeURIComponent(service.title)}`}
                  className="btn-primary text-center"
                >
                  {textDB.readingdetails.actionbutton}
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Related Readings */}
      <section className="section-padding">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-gradient-gold mb-4">
                {textDB.readingdetails.related}
              </h2>
              <div className="divider-gold w-24 mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestions.map((rt) => (
                <SuggestionCard key={rt} reading={readingData[rt]} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </div>
  );
};

export default ReadingDetails;
