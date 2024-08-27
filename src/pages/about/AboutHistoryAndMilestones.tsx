import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

const AboutHistoryAndMilestones = () => {
  const timeLineOptions = [
    {
      children: (
        <span className="text-lightBlue dark:text-teal-400 px-4">
          2022: Conception
        </span>
      ),
      dot: (
        <ClockCircleOutlined
          style={{ fontSize: "20px", padding: "2px 4px", color: "#007bff" }} // Customized icon color
        />
      ),
    },
    {
      children: (
        <span className="text-veryDarkViolet dark:text-teal-100">
          The idea for the platform was born from a need for easier access to
          sports facilities.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-veryDarkViolet dark:text-teal-100">
          Development began with a focus on user-friendly booking features.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-lightBlue dark:text-teal-400">
          2023: Official Launch
        </span>
      ),
      dot: (
        <ClockCircleOutlined
          style={{ fontSize: "20px", padding: "2px 4px", color: "#007bff" }} // Customized icon color
        />
      ),
    },
    {
      children: (
        <span className="text-veryDarkViolet dark:text-teal-100">
          Launched the platform, enabling users to book football and cricket
          pitches online.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-veryDarkViolet dark:text-teal-100">
          Partnered with local sports venues, attracting early users with
          seamless booking.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-lightBlue px-4 dark:text-teal-400">
          2024: Expanded Sports
        </span>
      ),
      dot: (
        <ClockCircleOutlined
          style={{ fontSize: "20px", padding: "2px 4px", color: "#007bff" }} // Customized icon color
        />
      ),
    },
    {
      children: (
        <span className="text-veryDarkViolet dark:text-teal-100">
          Added more sports facilities like badminton, basketball, and tennis.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-veryDarkViolet dark:text-teal-100">
          Launched a review system and expanded partnerships across different
          regions.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-lightBlue dark:text-teal-300">Future Goals:</span>
      ),
      color: "red",
    },
    {
      children: (
        <span className="text-lightBlue px-4 dark:text-teal-400">
          2025: Mobile App Release
        </span>
      ),
      dot: (
        <ClockCircleOutlined
          style={{ fontSize: "20px", padding: "2px 4px", color: "#007bff" }} // Customized icon color
        />
      ),
    },
    {
      children: (
        <span className="text-veryDarkViolet dark:text-teal-100">
          Introduced a mobile app for easy, on-the-go bookings.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-veryDarkViolet dark:text-teal-100">
          Increased user engagement significantly, making the app a preferred
          booking method.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-lightBlue px-4 dark:text-teal-400">
          2025: Community Engagement
        </span>
      ),
      dot: (
        <ClockCircleOutlined
          style={{ fontSize: "20px", padding: "2px 4px", color: "#007bff" }} // Customized icon color
        />
      ),
    },
    {
      children: (
        <span className="text-veryDarkViolet dark:text-teal-100">
          Organized local sports tournaments and partnered with schools for
          youth engagement.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-veryDarkViolet dark:text-teal-100">
          Introduced discounts on sports gear through collaborations with local
          brands.
        </span>
      ),
      color: "green",
    },
  ];
  return (
    <div className="dark:bg-slate-500">
      <div className="py-16 container mx-auto">
        <div className="mb-16">
          <h3 className="heading-title">History & Milestones</h3>
          <p className="heading-p px-20">
            Over the years, we’ve grown from a small project into a thriving
            platform, connecting players with the best sports facilities in
            their area.
          </p>
        </div>

        {/* Timeline design */}
        <div>
          <Timeline mode="alternate" items={timeLineOptions} className="" />
        </div>
      </div>
    </div>
  );
};

export default AboutHistoryAndMilestones;
