import { Link, useOutletContext } from "react-router-dom";

const About = () => {
  const data = useOutletContext();
  console.log("context in private layout: ", data);

  return (
    <div>
      <h1>About</h1>
      <Link to="/info">About</Link>
    </div>
  );
};

export default About;
