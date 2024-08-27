import AboutContactInformation from "./AboutContactInformation";
import AboutHero from "./AboutHero";
import AboutHistoryAndMilestones from "./AboutHistoryAndMilestones";
import AboutTeamSection from "./AboutTeamSection";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <AboutTeamSection />
      <AboutHistoryAndMilestones />
      <AboutContactInformation />
    </div>
  );
};

export default AboutUs;
