import TheLovers from "../assets/The Lovers1.png";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const LoveReading = () => {
  return (
    <div className=" bg-customColor1 min-h-screen p-8 ">
      {/* <NavigationBar /> */}

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="w-full md:w-80 h-96 rounded-lg shadow-lg overflow-hidden">
            <img
              src={TheLovers}
              alt="The Lovers card"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#e1be8a]">
              Love Reading
            </h1>
            <p className="text-base md:text-lg font-semibold mt-2 text-customColor1">
              Price: $XX
            </p>

            <div className="mt-6 md:mt-10">
              <h2 className="text-lg md:text-xl font-semibold text-[#e1be8a]">
                What to Expect
              </h2>
              <p className="mt-2 text-base md:text-lg text-customColor2">
                Tea Tarot's Love Reading is a genuine and personal exploration
                of your romantic journey. Here's a realistic outlook:
              </p>
              <ul className="list-disc pl-6 mt-2 text-base md:text-lg text-customColor2">
                <li>
                  <span className="font-semibold">In-Depth Analysis:</span> Tea
                  Tarot, with years of experience, will carefully analyze the
                  current energies surrounding your love life, providing honest
                  insights into potential opportunities, challenges, and the
                  overall direction of your romantic path.
                </li>
                <li>
                  <span className="font-semibold">Realistic Timeline:</span> We
                  value your time and aim to provide you with your detailed love
                  reading within 5-7 business days. This allows Tea Tarot to
                  give your questions the attention they deserve for a
                  thoughtful response.
                </li>
                <li>
                  <span className="font-semibold">Open Communication:</span> If
                  you have questions or need further clarification after
                  receiving your love reading, Tea Tarot is available for
                  follow-up discussions to help you navigate your unique
                  situation.
                </li>
              </ul>
            </div>

            <div className="mt-6 md:mt-10">
              <h2 className="text-lg md:text-xl font-semibold text-[#e1be8a]">
                Why Choose Tea Leaf Tarot?
              </h2>
              <ul className="list-disc pl-6 mt-2 text-base md:text-lg text-customColor2">
                <li>
                  <span className="font-semibold">Compassion and Honesty:</span>{" "}
                  Tea Tarot approaches each reading with compassion and honesty,
                  understanding that love can be complex and messy. No
                  sugarcoating, just the truth.
                </li>
                <li>
                  <span className="font-semibold">Personalized Guidance:</span>{" "}
                  Your love reading is customized to address your specific
                  concerns and questions, offering practical advice tailored to
                  your circumstances.
                </li>
                <li>
                  <span className="font-semibold">
                    Secure and Confidential:
                  </span>{" "}
                  Your privacy is paramount. Your readings are strictly
                  confidential, and we take every precaution to protect your
                  personal information.
                </li>
              </ul>
            </div>

            <div className="mt-6 md:mt-10 text-center">
              <p className="text-base md:text-lg text-[#e1be8a]">
                If you're ready to gain a more realistic and insightful
                perspective on your love life, book a reading in Calendly.
              </p>
              <div className="mt-4">
                <a
                  href="https://calendly.com/teadulellari/tarot-reading"
                  className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 hover:shadow-lg transition duration-300"
                >
                  Book a Reading
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveReading;
