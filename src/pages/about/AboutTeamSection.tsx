import circle from "../../assets/circle.svg";
import grid from "../../assets/grid.svg";
import imonPho from "../../assets/imon.jpg";

type TTeamData = {
  name: string;
  position: string;
  about: string;
  photo: string;
};

const AboutTeamSection = () => {
  const teamData: TTeamData[] = [
    {
      name: "Md Imon Hossain",
      position: "Founder & CEO",
      about:
        "Visionary leader merging sports passion with tech to create a top-notch platform.",
      photo: imonPho,
    },
    {
      name: "Sarah Ahmed",
      position: "COO",
      about: "Ensures smooth operations, delivering the best service to users.",
      photo:
        "https://media.istockphoto.com/id/1342029049/photo/head-shot-of-beautiful-woman-student-teacher-or-blogger.jpg?s=612x612&w=0&k=20&c=NwyPh-KlEYBxJFCuFnzSiv1-pgGOCDxqctzIF7ZHig0=",
    },
    {
      name: "James Carter",
      position: "CTO",
      about:
        "Drives platform innovation, focusing on user-friendly design and security.",
      photo:
        "https://media.istockphoto.com/id/1342027604/photo/arab-male-english-teacher-explaining-rules-near-blackboard-standing-with-clipboard-smiling-at.jpg?s=612x612&w=0&k=20&c=uH6EdaZKnvOK3nxXeinoDqUbDKmS07TsUmJFRTXym9g=",
    },
    {
      name: "Nina ",
      position: "Marketing Director",
      about: "Expands our community through creative marketing strategies.",
      photo:
        "https://media.istockphoto.com/id/1124593620/photo/girl-in-muslim-clothes-calmly-looking-into-the-camera.jpg?s=612x612&w=0&k=20&c=ZSx1FvF0_oTI8ErkkpZamc-sGhxR_4-K0-_jv6Al3IU=",
    },
    {
      name: "Mark Johnson",
      position: "Customer Support Lead",
      about:
        "Dedicated to providing exceptional support and keeping users satisfied.",
      photo:
        "https://media.istockphoto.com/id/1389465862/photo/shot-of-a-young-businessman-working-on-his-laptop-at-his-desk.jpg?s=612x612&w=0&k=20&c=YZEk5hp1E8cv8y-xXLumH4H5zIVyyf4UdETZvsuH8Vk=",
    },
  ];
  return (
    <div className="dark:bg-slate-600  ">
      <div className="container mx-auto py-16">
        <div className="mb-16">
          <h3 className="heading-title">Team Section</h3>
          <p className="heading-p px-20">
            Our passionate team combines sports and technology expertise to
            deliver a seamless booking experience for all.
          </p>
        </div>

        {/* New Section */}
        <div>
          <div className="flex flex-row mx-auto flex-wrap justify-center items-center gap-8">
            {teamData?.map((item: TTeamData) => (
              <div className=" w-[270px]">
                <div className="relative overflow-hidden w-[270px] h-[330px] bg-slate-400 rounded-2xl shadow-sm">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    src={item.photo}
                    alt="member"
                  />

                  <div className="overflow-hidden p-4 bg-white absolute left-4 bottom-4 right-4 rounded-lg">
                    <p className="font-bold text-center text-darkViolet">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-center">{item.position}</p>
                    <img
                      className="absolute -left-10 -bottom-10"
                      src={circle}
                      alt="circle"
                    />
                    <img
                      className="absolute -right-2 -top-4 w-9"
                      src={grid}
                      alt="circle"
                    />
                  </div>
                </div>

                <p className="text-center py-4 px-6 text-lightBlue dark:text-strongCyan">
                  {item.about}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeamSection;
