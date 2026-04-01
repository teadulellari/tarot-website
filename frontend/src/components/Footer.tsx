import { useContext } from "react";
import { FaInstagram, FaTiktok, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { TextDBContext } from "./contexts/TextDBContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo-no-background.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const textDB = useContext(TextDBContext);

  return (
    <footer id="contact" className="relative border-t border-soft-lavender/10 bg-midnight/95 backdrop-blur-xl">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="Tea Leaf Tarot" className="h-10 mb-4 opacity-80" />
            <p className="text-soft-lavender/50 text-sm leading-relaxed">
              {textDB.footer.body}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/about-me" className="text-soft-lavender/50 hover:text-gold text-sm transition-colors">{textDB.navigationbar.about}</Link></li>
              <li><Link to="/#services" className="text-soft-lavender/50 hover:text-gold text-sm transition-colors">{textDB.navigationbar.readings}</Link></li>
              <li><Link to="/policies" className="text-soft-lavender/50 hover:text-gold text-sm transition-colors">Trust & Policies</Link></li>
              <li><Link to="/contactForm" className="text-soft-lavender/50 hover:text-gold text-sm transition-colors">Customer Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/reading/love-reading/details" className="text-soft-lavender/50 hover:text-gold text-sm transition-colors">Love Reading</Link></li>
              <li><Link to="/reading/finances-reading/details" className="text-soft-lavender/50 hover:text-gold text-sm transition-colors">Finances Reading</Link></li>
              <li><Link to="/reading/spiritual-guidance-reading/details" className="text-soft-lavender/50 hover:text-gold text-sm transition-colors">Spiritual Guidance</Link></li>
              <li><Link to="/reading/short-reading/details" className="text-soft-lavender/50 hover:text-gold text-sm transition-colors">Short Reading</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.instagram.com/tea_leaf_tarot/"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-soft-lavender/60 hover:text-rose-glow hover:border-rose-glow/30 transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@tea.leaf.tarot"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-soft-lavender/60 hover:text-soft-lavender hover:border-soft-lavender/30 transition-all duration-300"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href="https://wa.link/w74pkr"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-soft-lavender/60 hover:text-green-400 hover:border-green-400/30 transition-all duration-300"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@tarotcardread.com"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-soft-lavender/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
            <a
              href="mailto:hello@tarotcardread.com"
              className="text-soft-lavender/40 text-sm hover:text-gold transition-colors"
            >
              hello@tarotcardread.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-soft-lavender/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-soft-lavender/30">
            <span>&copy; {new Date().getFullYear()} Tea Leaf Tarot</span>
            <span>&middot;</span>
            <span>{textDB.footer.rights}</span>
          </div>
          <p className="text-xs text-soft-lavender/30 text-center md:text-right">
            Albania &middot; Adults 18+ &middot; Entertainment and personal reflection only
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-soft-lavender/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
            title={textDB.footer["to-top"]}
          >
            <FaArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
