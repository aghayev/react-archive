import { accordionData } from "../accordiondata";
import Accordion from "./Accordion";

const Navbar = () => {
  let x=['accordion'];
  return (
    <nav>
      <ul className={x.join(" ")}>
        {accordionData.map(({ title, url }) => (
          <Accordion title={title} url={url} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
