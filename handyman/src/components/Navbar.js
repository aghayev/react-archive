import { accordionData } from "../accordiondata";
import Accordion from "./Accordion";

const Navbar = () => {
  let x=['accordion'];
  return (
    <nav>
      <ul className={x.join(" ")}>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
