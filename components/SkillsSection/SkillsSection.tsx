// @ts-nocheck

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  data: any;
};

function Skills(props: Props) {
  // const [skillName,skillSet]=useState("")
  const [skillName, setSkill] = useState<string>();

  useEffect(() => {
    const nodes = [].slice.call(document.querySelectorAll("li"), 0);

    const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
    const classNames = ["in", "out"]
      .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
      .reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
      const { width, height, top, left } = node.getBoundingClientRect();
      const l = ev.pageX - (left + window.pageXOffset);
      const t = ev.pageY - (top + window.pageYOffset);
      const x = l - (width / 2) * (width > height ? height / width : 1);
      const y = t - (height / 2) * (height > width ? width / height : 1);
      return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    class Item {
      constructor(element) {
        this.element = element;

        this.element.addEventListener("mouseover", (ev) =>
          this.update(ev, "in")
        );

        this.element.addEventListener("mouseout", (ev) =>
          this.update(ev, "out")
        );
      }

      update(ev, prefix) {
        this.element.classList.remove(...classNames);

        this.element.classList.add(
          `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
        );
      }
    }

    nodes.forEach((node) => new Item(node));
  }, []);

  console.log("skillData", props.data.skillData);

  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default ">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default ">
        hover for proficiency
      </h3>
      <div className="  w-[90vw] h-[60vh] md:w-[40vw] flex justify-center items-center z-20">
        <div className={`container `}>
          <ul className={`scale-[70%] md:scale-100 `}>
            {skillData?.map((item: any, key: any) => {
              return (
                <motion.li
                  key={key}
                  className="rounded-lg antialiased self-center"
                  onMouseEnter={() => {
                    setSkill(item.skillName);
                  }}
                  onMouseLeave={() => {
                    setSkill("");
                  }}
                  initial={{
                    x: key % 2 == 0 ? 100 : -100,
                  }}
                  whileInView={{
                    y: 0,
                    x: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <a
                    className="normal rounded-lg overflow-hidden antialiased"
                    href="#"
                  >
                    <Image
                      src={item.imageLink}
                      alt="skillImage"
                      fill
                      priority
                    />
                  </a>
                  <div className="info antialiased flex justify-center items-center">
                    <h3>{item.proficiency}</h3>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12 flex items-end justify-start xl:items-start  xl:justify-end ">
        <h3 className="w-[35vw] sm:w-[32vw] h-fit text-xl md:text-[7vh] md:text-5xl text-gray-500/50 uppercase p-4 pt-11 pb-6 tracking-[20px]  transition-all ease-in-out duration-150 animate-[bounce_2s_ease-in-out_infinite]">
          {skillName}
        </h3>
      </div>
    </div>
  );
}

export default Skills;

const skillData = [
  {
    skillName: "Fultter",
    proficiency: "80",
    imageLink: "https://avatars.githubusercontent.com/u/14101776?s=280&v=4",
  },
  {
    skillName: "Firebase",
    proficiency: "60",
    imageLink:
      "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png",
  },
  {
    skillName: "Onesignal",
    proficiency: "90",
    imageLink:
      "https://mma.prnewswire.com/media/1062386/OneSignal_Logo.jpg?p=twitter",
  },
  {
    skillName: "Socker",
    proficiency: "70",
    imageLink:
      "https://w7.pngwing.com/pngs/162/702/png-transparent-socket-io-node-js-express-js-npm-network-socket-github-angle-triangle-logo.png",
  },
  {
    skillName: "Supbase",
    proficiency: "50",
    imageLink:
      "https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    skillName: "github",
    proficiency: "70",
    imageLink:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    skillName: "cicd",
    proficiency: "90",
    imageLink:
      "https://www.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/CICD%20(V4).png?width=650&name=CICD%20(V4).png",
  },
  {
    skillName: "fastlane",
    proficiency: "70",
    imageLink: "https://avatars.githubusercontent.com/u/11098337?s=200&v=4",
  },
  {
    skillName: "Kotlin",
    proficiency: "70",
    imageLink:
      "https://mathiasfrohlich.gallerycdn.vsassets.io/extensions/mathiasfrohlich/kotlin/1.7.1/1581441165235/Microsoft.VisualStudio.Services.Icons.Default",
  },
  {
    skillName: "SQL Server",
    proficiency: "90",
    imageLink:
      "https://www.techsoupvietnam.vn/sites/default/files/SQL-Server-2012_0.png",
  },
  {
    skillName: "photoshop",
    proficiency: "70",
    imageLink: "https://i.ibb.co/H7vKjcW/Untitled.png",
  },
];
