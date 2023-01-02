import { useContext } from "react";
import FooterSpace from "../../components/Footer/footer";
import HeaderSpace from "../../components/HeaderSpace/headerSpace";
import IntroSpace from "../../components/IntroSpace/introSpace";
import OurCreationsSpace from "../../components/OurCreations/ourCreations";
import { GeneralContext } from "../../contexts/GeneralContext";

const CentralPage = () => {
  const { show, setShow } = useContext(GeneralContext);

  return (
    <>
      <HeaderSpace show={show} setShow={setShow} />
      <IntroSpace />
      <OurCreationsSpace />
      <FooterSpace />
    </>
  );
};

export default CentralPage;
