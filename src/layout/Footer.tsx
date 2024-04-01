import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoPinterest,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-neutral-800 text-white">
      <div className="py-8 flex flex-col items-center md:flex-row md:gap-12 2xl:gap-60">
        <img
          className="w-[100px] md:max-h-32 md:ml-8"
          src="/assets/images/footer-logo.png"
          alt="Logo"
        />

        <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-12 lg:gap-32 xl:gap-60">
          <ul className="flex flex-col gap-2 [&>*]:font-semibold md:gap-8">
            <p className="text-xl">Information</p>
            <li className="w-fit hover:underline">
              <Link to="/">Main</Link>
            </li>
            <li className="w-fit hover:underline">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="w-fit hover:underline">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="w-fit hover:underline">
              <Link to="/certifications">Certifications</Link>
            </li>
            <li className="w-fit hover:underline">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>

          <div className="mr-auto flex flex-col gap-8 [&>*]:font-semibold">
            <p className="text-xl">Contacts</p>

            <p className="flex gap-x-4 mb-4">
              <span className="text-2xl">
                <IoLocationOutline />
              </span>{" "}
              Sample Street
              <br />
              Austin Texas 78704
            </p>

            <p className="flex gap-x-4">
              <span className="text-2xl">
                <IoCallOutline />
              </span>
              +1 512 33345587
            </p>

            <p className="flex gap-x-4">
              <span className="text-2xl">
                <IoMailOutline />
              </span>
              samplemail@gmail.com
            </p>
          </div>

          <div className="flex flex-col gap-8 [&>*]:font-semibold">
            <p className="text-xl">Social Media</p>

            <div className="flex gap-x-8 [&>*]:text-3xl [&>*]:cursor-pointer">
              <IoLogoFacebook />
              <IoLogoTwitter />
              <IoLogoLinkedin />
              <IoLogoPinterest />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 border-t border-neutral-700">
        <p className="text-neutral-500 text-center">
          &copy; 2024 All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
