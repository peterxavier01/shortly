import Logo from "../../assets/logo.svg";
import {
  companyLinks,
  featuresLinks,
  resourcesLinks,
  socialIcons,
} from "../../lib/utils";

import classes from "./index.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div>
        <a href="/">
          <img src={Logo} alt="shortly logo" />
        </a>
      </div>

      <div>
        <div>
          <h4>Features</h4>
          <ul>
            {featuresLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Resources</h4>
          <ul>
            {resourcesLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={classes.iconContainer}>
        {socialIcons.map((icon) => (
          <a key={icon.id} href={icon.href}>
            <img src={icon.src} alt={icon.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
