import React from "react";
import "../../Styles/Project_Style/ProjectDtl.css";
import { useParams } from "react-router-dom";
// 1 Information of Project
import Dlt1 from "../Project_component/img/Dlt_1.png";
import ch1 from "../Project_component/img/ch1.png";
import ch2 from "../Project_component/img/ch2.png";
//2 Information of Project
import Dlt2 from "../Project_component/img/frame2.png";

export default function Project_Details() {
  const ProjectData = [
    {
      id: 1,
      icon: Dlt1,
      alt: "Modern Villa Renovation",
      cltName: "Client",
      Name: "RC Builders",
      Loc: "Location",
      Loc_Add: "Nebraska Omaha, USA",
      Prj: "Project Year",
      Prj_Dt: "15 July 2025",
      Dur: "Duration",
      Dur_P: "2 Years, 3 Months",
      Bug: "Budget",
      Bug_Rs: "$10 Million",
      Heading: "Modern Villa Renovation – Redefining Luxury Living",
      Para1: `This renovation project transformed an outdated villa into a stunning
          modern residence, blending contemporary design with functional spaces.
          Our team handled every detail—from structural upgrades to high-end
          interior finishes—ensuring the villa met the client’s vision of a
          stylish, comfortable, and future-ready home.`,
      Para2: ` We embraced a neutral color palette, open-plan layouts, and natural
          materials to create a warm yet sophisticated living space. Large
          windows maximize natural light, while modern accents add personality.`,
      chlg: "The Challenge of project",
      Para3: ` Building construction is the process of planning, designing, and
          assembling structures such as homes, offices, malls, hospitals, and
          skyscrapers. It involves engineering, architecture, materials, and
          skilled labor to ensure buildings are safe, functional, and
          aesthetically pleasing.`,
      icon1: ch1,
      icon2: ch2,
      alt1: "Image",
      Para4: ` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.`,
      Para5: `   Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.`,
    },
    {
      id: 2,
      icon: Dlt2, // 👈 replace with Cottage Renovation image if you have one (e.g., Dlt2)
      alt: "Cottage Renovation",
      cltName: "Client",
      Name: "Greenwood Family",
      Loc: "Location",
      Loc_Add: "Aspen, Colorado, USA",
      Prj: "Project Year",
      Prj_Dt: "10 March 2024",
      Dur: "Duration",
      Dur_P: "1 Year, 6 Months",
      Bug: "Budget",
      Bug_Rs: "$2.5 Million",
      Heading: "Cottage Renovation – Blending Rustic Charm with Modern Comfort",
      Para1: `This project transformed a decades-old countryside cottage into a 
      cozy yet luxurious retreat. The renovation focused on preserving the 
      rustic charm of the original structure while upgrading it with 
      modern amenities for year-round comfort.`,
      Para2: `Natural wood, stone textures, and warm lighting were combined 
      with smart layouts and energy-efficient solutions. The design 
      seamlessly blends tradition with contemporary style, 
      creating a welcoming family getaway.`,
      chlg: "The Challenge of Project",
      Para3: `The biggest challenge was maintaining the authentic character 
      of the old cottage while ensuring structural stability and 
      modern convenience. Limited space required creative planning, 
      while remote location logistics added complexity.`,
      icon1: ch1, // 👈 replace with your own images if available
      icon2: ch2,
      alt1: "Image",
      Para4: `Attention to detail was key. Every beam, stone, and fixture 
      was carefully chosen to honor the cottage’s history while 
      ensuring durability. The end result offers timeless appeal 
      with contemporary function.`,
      Para5: `The renovated cottage now serves as a perfect family retreat, 
      offering warmth, comfort, and style. It demonstrates how 
      heritage architecture can be rejuvenated for future generations.`,
    },
  ];
  const { id } = useParams();
  const project = ProjectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <>
      <div className="Details_Img">
        <h1 id="Details_Head">Details</h1>
        <p id="Details_Para">Home/Project Details</p>
      </div>
      {/*--------------------------------------------------------------------Start Array ahiya thi ok */}
      <div className="container Details_Main">
        {ProjectData.map((item, index) => (
          <React.Fragment key={index}>
            <img src={item.icon} alt={item.alt} />
            <div className="Full_Details">
              <div className="clt">
                <p>{item.cltName}</p>
                <h4>{item.Name}</h4>
              </div>
              <div className="loc">
                <p>{item.Loc}</p>
                <h4>{item.Loc_Add}</h4>
              </div>
              <div className="prj">
                <p>{item.Prj}</p>
                <h4>{item.Prj_Dt}</h4>
              </div>
              <div className="dur">
                <p>{item.Dur}</p>
                <h4>{item.Dur_P}</h4>
              </div>
              <div className="bud">
                <p>{item.Bug}</p>
                <h4>{item.Bug_Rs}</h4>
              </div>
            </div>
            <h1 id="head_l">{item.Heading}</h1>
            <p id="para_l">{item.Para1}</p>
            <p id="para_l">{item.Para2}</p>
            <h3 id="challenge">{item.chlg}</h3>
            <p id="para_l">{item.Para3}</p>
            <div className="two_img">
              <img src={item.icon1} alt={item.alt1} />
              <img src={item.icon2} alt={item.alt1} />
            </div>
            <p id="para_l">{item.Para4}</p>
            <p id="para_l">{item.Para5}</p>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
