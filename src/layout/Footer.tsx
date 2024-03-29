import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoPinterest,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-neutral-800 text-white">
      <div className="flex gap-60 py-10 px-48">
        <img
          className="w-40 max-h-32"
          src="/assets/images/footer-logo.png"
          alt="Logo"
        />

        <ul className="flex flex-col gap-8 [&>*]:font-semibold">
          <p className="text-xl">Information</p>
          <li>Main</li>
          <li>Gallery</li>
          <li>Projects</li>
          <li>Certifications</li>
          <li>Contacts</li>
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
            512 33345587
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

          <div className="flex gap-x-8 [&>*]:text-3xl">
            <IoLogoFacebook />
            <IoLogoTwitter />
            <IoLogoLinkedin />
            <IoLogoPinterest />
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
