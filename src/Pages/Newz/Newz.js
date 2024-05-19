import OtherHeaderBlade from "../../Component/OtherHeaderBlade";
import NewzList from "../../Scenes/NewzList/NewzList";

const Newz = () => {
  const paramName = window.location.pathname;

  return (
    <>
      <OtherHeaderBlade paramName={paramName} />
      <NewzList />
    </>
  );
};

export default Newz;
