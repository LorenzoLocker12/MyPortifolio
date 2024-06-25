import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Software Engineer
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I am currently in the 6th semester of my Bachelor's degree in Computer Science. I have hands-on experience in developing Android applications using native Java, as well as creating dynamic and responsive websites with technologies such as React, Express, Next.js, and SpringBoot. My primary programming languages include Java, JavaScript, C#, and Python, which I utilize to build efficient and scalable software solutions. Additionally, I am proficient in working with databases like MongoDB and PostgreSQL, and I have experience using AWS and Docker for cloud computing and containerization. I am passionate about continuously learning and applying new technologies to solve real-world problems.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Open To Work<sub className="font-semibold text-base"></sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=LorenzoLocker12&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Lorenzo Locker"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=LorenzoLocker12&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Lorenzo Locker"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,tailwind,docker,firebase,git,github,js,ts,kubernetes,mongodb,mysql,nextjs,nodejs,npm,postgres,react,threejs,java,spring,cs,python,postman`}
            alt="Lorenzo Locker"
            loading="lazy"
          />
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
