import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../assets/Projects/project-1.png";
import project2 from "../../assets/Projects/project-2.png";
import project3 from "../../assets/Projects/project-3.png";
import project4 from "../../assets/Projects/project-4.png";
import project5 from "../../assets/Projects/project-5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Action Land",
      github_link: "https://github.com/MohonSaha/Action-land-client",
      live_link: "https://zoo-land-7a150.web.app/",
    },
    {
      img: project2,
      name: "Cooking Master",
      github_link: "https://github.com/MohonSaha/Cooking-master",
      live_link: "https://cooking-master-3e6ff.web.app/",
    },
    {
      img: project3,
      name: "Beat Masters",
      github_link: "https://github.com/MohonSaha",
      live_link: "https://beat-masters-59508.web.app/",
    },
    {
      img: project4,
      name: "Apply Mate",
      github_link: "https://github.com/MohonSaha/Apply-mate",
      live_link: "https://apply-mate.netlify.app",
    },
    {
      img: project5,
      name: "Knowledge Store",
      github_link: "https://github.com/MohonSaha/Knowledge-cafe",
      live_link: "https://knowledge-store.netlify.app",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className=" w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl mb-10">
                  <img src={project_info.img} alt="" className="rounded-lg h-48" />
                  <h3 className="text-xl my-4 ">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg hover:scale-110 duration-200"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg hover:scale-110 duration-200"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;