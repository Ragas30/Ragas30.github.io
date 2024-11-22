import proptype from "prop-types";

const Title = ({ title }) => {
  return <h1 className="mb-8 text-center font-bold text-4xl">{title}</h1>;
};

export default Title;

export const TitlePropType = proptype.string;

Title.propTypes = {
  title: TitlePropType,
};
