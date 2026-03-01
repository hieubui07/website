import Image from "next/image";
import { Metadata } from "next";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Experience",
};

function Experience() {
  return (
    <main
      id="about"
      className="h-auto mx-auto flex max-w-2xl flex-1 flex-col gap-16 leading-[1.6] py-16 sm:py-32"
    >
      <div className="flex flex-col gap-6 px-4 ">
        <Image
          src="/img/astronaut.jpg"
          alt="Me"
          width={60}
          height={60}
          draggable={false}
          className="mb-8 rounded-full select-none"
        />
        <p className="text-[var(--text-color-secondary)] text-2xl font-medium text-pretty">
          I currently work as a software engineer for Amentum contracting for
          NASA, where I support the thermal-vacuum test facility.
        </p>

        <p className="text-[var(--text-color-secondary)] text-2xl font-medium text-pretty">
          During my last summer and fall in college, I had the opportunity to
          intern at Peterbilt Motors Company in Denton, Texas as a data
          analytics intern for the Dealer Training team.
        </p>

        <p className="text-[var(--text-color-secondary)] text-2xl font-medium text-pretty">
          In college, I had the chance to work as a teaching assistant for CS
          department for an upper level database systems course. And I was also
          working for the IT department supporting students and faculty.
        </p>
      </div>
      <div className="flex flex-col gap-4 px-4 ">
        <div className="text-[var(--text-color-quaternary)] dark:text-[var(--text-color-tertiary)] leading-[1.6] select-none">
          Work
        </div>
        <ul className="flex flex-col sm:gap-1.5 gap-8">
          <li className="flex">
            <a
              href="https://www.nasa.gov"
              target="_blank"
              className="inline-flex flex-1 text-xl group/list-item flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-3"
            >
              <img
                alt="/img/nasa.png"
                draggable="false"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                data-nimg="1"
                src="/img/nasa.png"
              />

              <div className="flex items-center gap-2 sm:contents">
                <span className="text-[var(--text-color-primary)] line-clamp-1 leading-[1.6] font-medium underline-offset-1 group-hover/list-item:underline">
                  NASA
                </span>
                <span className="text-[var(--text-color-quaternary)] leading-[1.6]">
                  Software Engineer
                </span>
              </div>
              <span className="text-[var(--text-color-quaternary)] font-mono text-[19px] opacity-80 sm:ml-auto">
                Current
              </span>
            </a>
          </li>
        </ul>
        <ul className="flex flex-col sm:gap-1.5 gap-8">
          <li className="flex">
            <a
              href="https://www.peterbilt.com/"
              target="_blank"
              className="inline-flex flex-1 text-xl group/list-item flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-3"
            >
              <img
                draggable="false"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                data-nimg="1"
                src="/img/peterbilt.png"
              />

              <div className="flex items-center gap-2 sm:contents">
                <span className="text-[var(--text-color-primary)] line-clamp-1 leading-[1.6] font-medium underline-offset-1 group-hover/list-item:underline">
                  Peterbilt Motors Co.
                </span>
                <span className="text-[var(--text-color-quaternary)] leading-[1.6]">
                  Data Analytics Intern
                </span>
              </div>
              <span className="text-[var(--text-color-quaternary)] font-mono text-[19px] opacity-80 sm:ml-auto">
                2025
              </span>
            </a>
          </li>
        </ul>
        <ul className="flex flex-col sm:gap-1.5 gap-8">
          <li className="flex">
            <a
              href="https://www.uh.edu/nsm/computer-science/"
              target="_blank"
              className="inline-flex flex-1 text-xl group/list-item flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-3"
            >
              <img
                draggable="false"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                data-nimg="1"
                src="/img/uh.png"
              />

              <div className="flex items-center gap-2 sm:contents">
                <span className="text-[var(--text-color-primary)] line-clamp-1 leading-[1.6] font-medium underline-offset-1 group-hover/list-item:underline">
                  University of Houston
                </span>
                <span className="text-[var(--text-color-quaternary)] leading-[1.6]">
                  Teaching Assistant
                </span>
              </div>
              <span className="text-[var(--text-color-quaternary)] font-mono text-[19px] opacity-80 sm:ml-auto">
                2024-25
              </span>
            </a>
          </li>
        </ul>
        <ul className="flex flex-col sm:gap-1.5 gap-8">
          <li className="flex">
            <a
              href="https://www.uh.edu/infotech/"
              target="_blank"
              className="inline-flex flex-1 text-xl group/list-item flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-3"
            >
              <img
                draggable="false"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                data-nimg="1"
                src="/img/uh.png"
              />

              <div className="flex items-center gap-2 sm:contents">
                <span className="text-[var(--text-color-primary)] line-clamp-1 leading-[1.6] font-medium underline-offset-1 group-hover/list-item:underline">
                  University of Houston
                </span>
                <span className="text-[var(--text-color-quaternary)] leading-[1.6]">
                  IT Support
                </span>
              </div>
              <span className="text-[var(--text-color-quaternary)] font-mono text-[19px] opacity-80 sm:ml-auto">
                2023-24
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-6 px-4 text-[var(--text-color-tertiary)]">
        <a href="https://www.linkedin.com/in/hbui0107/" target="blank">
          <FiLinkedin size="32px" />
        </a>
        <a
          href="https://mail.google.com/mail/u/1/?fs=1&to=hieubui0107@gmail.com&tf=cm"
          target="blank"
        >
          <FiMail size="32px" />
        </a>
        <a href="https://github.com/hieubui07" target="blank">
          <FiGithub size="32px" />
        </a>
      </div>
    </main>
  );
}
export default Experience;
