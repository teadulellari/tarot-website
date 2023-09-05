import { useState } from "react";
import Slogan from "../components/Slogan";
import Services from "../components/Services";
import NavigationBar from "../components/NavigationBar";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import John from "../assets/JohnSmith.jpeg";
import Elena from "../assets/ElenaPetrova.jpeg";
import Ahmet from "../assets/Ahmet.jpeg";
import Maria from "../assets/Maria.jpeg";
import Liisa from "../assets/Liisa.jpeg";
import Tom from "../assets/Tom.jpeg";
import Sofia from "../assets/Sofia.jpeg";
import Alejandro from "../assets/Alejandro.jpeg";
import Anastasia from "../assets/Anastasia.jpeg";
import Ryan from "../assets/Ryan.jpeg"
import Anna from "../assets/Anna.jpeg"
import Nikos from "../assets/Nikos.jpeg"
import FAQ from '../components/FAQ';

const HomePage: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  interface ReviewData {
    reviewer: string;
    image: string;
    rating: number;
    content: string;
  }

  const reviews: ReviewData[] = [
    {
      reviewer: "John Smith",
      image: John,
      rating: 5,
      content: "I had an amazing experience with this tarot reader. The insights provided were accurate and helpful. Highly recommended!",
    },
    {
      reviewer: "Tom Johnson",
      image: Tom,
      rating: 5,
      content: "I was impressed by the accuracy of the tarot reading. The reader was professional and created a comfortable environment. I will definitely return!",
    },
    {
      reviewer: "Ahmet Yılmaz",
      image: Ahmet,
      rating: 5,
      content: "The tarot reader was incredible! The predictions made during the session were spot on. I'm grateful for the insights I received.",
    },
    {
      reviewer: "Maria Rossi",
      image: Maria,
      rating: 5,
      content: "I had a fantastic experience with this tarot reader. The reading was insightful and helped me gain clarity in my life. Highly recommended!",
    },
    {
      reviewer: "Liisa Kuusisto",
      image: Liisa,
      rating: 4,
      content: "The tarot reader provided a thoughtful reading. While some aspects were accurate, I would have liked more specific details. Overall, it was a good experience.",
    },

    {
      reviewer: "Sophie Leblanc",
      image: Sofia,
      rating: 5,
      content: "This tarot reader is truly gifted! The reading was insightful, and I received valuable guidance for my current situation. Highly recommended!",
    },
    {
      reviewer: "Alejandro Fernandez",
      image: Alejandro,
      rating: 5,
      content: "The tarot reader was exceptional! The reading provided deep insights and helped me navigate through challenging times. I'm grateful for the experience!",
    },
    {
      reviewer: "Anastasia Ivanova",
      image:Anastasia,
      rating: 4,
      content: "I had a positive experience with this tarot reader. The reading was accurate, and the reader was professional and compassionate. Thank you!",
    },
    {
      reviewer: "Ryan Johnson",
      image: Ryan,
      rating: 5,
      content: "I highly recommend this tarot reader. The session was enlightening, and I gained valuable perspective on my life. Thank you for the guidance!",
    },
    {
      reviewer: "Elena Petrova",
      image: Elena,
      rating: 4,
      content: "I enjoyed my tarot reading session. The reader was knowledgeable and provided valuable guidance. I would come back again!",
    },
    {
      reviewer: "Hannah Müller",
      image: Anna,
      rating: 5,
      content: "I had an amazing tarot reading experience. The reader was insightful and provided valuable advice. I left the session feeling empowered.",
    },
    {
      reviewer: "Nikos Papadopoulos",
      image: Nikos,
      rating: 4,
      content: "The tarot reader was knowledgeable and provided accurate insights. I appreciate the guidance I received during the reading.",
    },
   
  ];

  interface FaqData {
    q: string;
    a: string;
  };

  const questions: FaqData[] =[
    {
      q: "Q: What makes your tarot readings unique?" ,
      a: "A: My tarot readings are unique because I combine my intuitive abilities with a deep understanding of the tarot cards. I strive to provide personalized and insightful readings that resonate with each individual's specific situation, helping them gain clarity and guidance."
    },

    {
      q:"Q: How can your tarot readings benefit me?" ,
      a:"A: My tarot readings can benefit you by offering valuable insights and perspectives on various aspects of your life. Whether you're seeking guidance on relationships, career choices, or personal growth, my readings can provide you with the clarity and empowerment to make informed decisions."
    },
    {
      q:"Q: What is your approach to tarot readings?" ,
      a:"A: My approach to tarot readings is compassionate, non-judgmental, and empowering. I create a safe and supportive space where you can freely express your concerns and ask your questions. Together, we explore the cards and their symbolism, unlocking the messages and guidance they hold for you."
    },
    {
      q:"Q: How can I schedule a tarot reading with you?" ,
      a:"A: Scheduling a tarot reading with me is easy! You can visit my website and navigate to the 'Book a Reading' page, where you'll find my available time slots. Simply select a date and time that works for you, and follow the prompts to secure your appointment. I offer both in-person and online readings for your convenience."
    },
    {
      q:"Q: How long does it usually take to receive a reading?" ,
      a:"A: Once your payment is confirmed, I strive to provide prompt and timely service. Depending on the current demand, you can typically expect to receive your tarot reading within a couple of days. I prioritize delivering quality readings while ensuring each client receives the attention and focus they deserve. Rest assured that I will make every effort to provide your reading as soon as possible."
    },
    { q:"Q: Why should I trust you?",
      a:"A: As a tarot reader, I value the trust and confidentiality of my clients. I have extensive knowledge and experience in tarot reading, and I approach each session with empathy, respect, and non-judgment. I strive to provide accurate and insightful readings that can guide and empower you. Additionally, I adhere to a professional code of ethics, ensuring your privacy and confidentiality throughout the process."
    }
  ];

  return (
    <div className="grid grid-rows-[auto,auto,1fr] gap-11">
      <NavigationBar navbar={navbar} setNavbar={setNavbar} />
      <Slogan extendedMenuOpen={navbar} />
      <Services />
      <Experience />
      <Slider reviews={reviews} />
      <FAQ questions={questions} />
      <Footer />
     
    </div>
  );
};

export default HomePage;
