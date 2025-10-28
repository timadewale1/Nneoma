import {
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoInstagramAlt />,
    path: "",
  },
  {
    icon: <BiLogoTwitter />,
    path: "",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/nneoma-eneh",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
