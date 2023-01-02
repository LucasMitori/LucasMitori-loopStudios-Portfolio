import {
  Curiosity,
  DeepEarth,
  FishEye,
  FromAbove,
  Grid,
  NightArcade,
  OurCreations,
  Pocket,
  Soccer,
} from "./styles";

const OurCreationsSpace = () => {
  return (
    <>
      <OurCreations>
        <h1>Our Creations</h1>

        <ul>
          <DeepEarth>
            <h1>Deep Earth</h1>
          </DeepEarth>
          <NightArcade>
            <h1>Night Arcade</h1>
          </NightArcade>
          <Soccer>
            <h1>Soccer Team VR</h1>
          </Soccer>
          <Grid>
            <h1>The Grid</h1>
          </Grid>
          <FromAbove>
            <h1>From Up Above VR</h1>
          </FromAbove>
          <Pocket>
            <h1>Pocket Borealis</h1>
          </Pocket>
          <Curiosity>
            <h1>The Curiosity</h1>
          </Curiosity>
          <FishEye>
            <h1>Make it Fisheye</h1>
          </FishEye>
        </ul>

        <div>
          <a href="/">
            <span>SEE ALL</span>
          </a>
        </div>
      </OurCreations>
    </>
  );
};

export default OurCreationsSpace;
