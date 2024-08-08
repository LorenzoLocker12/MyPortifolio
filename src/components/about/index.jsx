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
            Data Scientist / ML Engineer
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I am currently in the 6th semester of my Bachelor&apos;s degree in Computer Science. In the realm of data science, I am proficient in Python, utilizing libraries such as pandas, NumPy, and scikit-learn for data analysis and machine learning tasks. I have experience working with databases like MongoDB and PostgreSQL, and I am familiar with cloud computing platforms like AWS and containerization tools such as Docker. My passion lies in continuously expanding my skill set and applying advanced technologies to derive insights and solve complex problems.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Working at Zella Sistemas<sub className="font-semibold text-base"></sub>
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
