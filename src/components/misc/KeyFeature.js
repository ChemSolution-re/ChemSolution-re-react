const KeyFeatureDescription = ({ header, description }) => {
  return (
    <div className="flex flex-row p-3">
      <i className="fas self-center w-1/12 text-csgreen text-5xl" />
      <div className="text-left m-3 p-1 w-10/12 self-center">
        <h1 className="text-2xl font-bold">{header}</h1>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default KeyFeatureDescription;
