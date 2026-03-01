import Image from "next/image";
import { Metadata } from "next";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Projects",
};

function Projects() {
  return (
    <main
      id="about"
      className="h-auto mx-auto flex max-w-2xl flex-1 flex-col gap-16 leading-[1.6] py-16 sm:py-32"
    >
      <div className="flex flex-col gap-6 px-4 ">
        <Image
          src="/img/astronaut.webp"
          alt="Me"
          width={60}
          height={60}
          draggable={false}
          className="mb-8 rounded-full select-none"
        />
        <p className="text-[var(--text-color-secondary)] text-2xl font-medium text-pretty">
          Past projects that I have worked on, both for classes and hackathons.
          Some tools I have used include C++, Python, SQL, JavaScript, React,
          Next.js, Node.js, MSSQL Server, MySQL, and much more!
        </p>
      </div>
      <div className="flex flex-col gap-4 px-4 ">
        <div className="text-[var(--text-color-quaternary)] dark:text-[var(--text-color-tertiary)] leading-[1.6] select-none">
          Projects
        </div>
        <ul className="flex flex-col gap-4 sm:gap-1.5">
          <li className="flex">
            <a
              href="https://github.com/hieubui07/event-matcher"
              target="_blank"
              className="inline-flex flex-1 text-xl group/list-item flex-col items-start gap-0 sm:flex-row sm:items-center sm:gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-[var(--text-color-primary)] line-clamp-1 leading-[1.6] font-medium underline-offset-1 group-hover/list-item:underline sm:line-clamp-1">
                  Event Matcher
                </span>
                <span className="text-[var(--text-color-quaternary)] leading-[1.6] shrink-0 font-mono">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-[var(--text-color-primary)]"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 7L6.75 17.25"
                    />
                  </svg>
                </span>
              </div>
              <span className="text-[var(--text-color-quaternary)] leading-[1.6] flex-1">
                Match events for volunteers.
              </span>
            </a>
          </li>
          <li className="flex">
            <a
              href="https://github.com/hieubui07/hackutd2024"
              target="_blank"
              className="inline-flex flex-1 text-xl group/list-item flex-col items-start gap-0 sm:flex-row sm:items-center sm:gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-[var(--text-color-primary)] line-clamp-1 leading-[1.6] font-medium underline-offset-1 group-hover/list-item:underline sm:line-clamp-1">
                  onetimeimages
                </span>
                <span className="text-[var(--text-color-quaternary)] leading-[1.6] shrink-0 font-mono">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-[var(--text-color-primary)]"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 7L6.75 17.25"
                    />
                  </svg>
                </span>
              </div>
              <span className="text-[var(--text-color-quaternary)] leading-[1.6] flex-1">
                Upload, retrive, and delete images.
              </span>
            </a>
          </li>
          <li className="flex">
            <a
              href="https://github.com/hieubui07/squirrel-simulator"
              target="_blank"
              className="inline-flex flex-1 text-xl group/list-item flex-col items-start gap-0 sm:flex-row sm:items-center sm:gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-[var(--text-color-primary)] line-clamp-1 leading-[1.6] font-medium underline-offset-1 group-hover/list-item:underline sm:line-clamp-1">
                  squirel-simulator
                </span>
                <span className="text-[var(--text-color-quaternary)] leading-[1.6] shrink-0 font-mono">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-[var(--text-color-primary)]"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 7L6.75 17.25"
                    />
                  </svg>
                </span>
              </div>
              <span className="text-[var(--text-color-quaternary)] leading-[1.6] flex-1">
                Squirrel simulator game at UH.
              </span>
            </a>
          </li>
          <li className="flex">
            <a
              href="https://hacktx23-welfareforworkers.streamlit.app/"
              target="_blank"
              className="inline-flex flex-1 text-xl group/list-item flex-col items-start gap-0 sm:flex-row sm:items-center sm:gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-[var(--text-color-primary)] line-clamp-1 leading-[1.6] font-medium underline-offset-1 group-hover/list-item:underline sm:line-clamp-1">
                  welfareforworkers
                </span>
                <span className="text-[var(--text-color-quaternary)] leading-[1.6] shrink-0 font-mono">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-[var(--text-color-primary)]"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 15.25V6.75H8.75"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 7L6.75 17.25"
                    />
                  </svg>
                </span>
              </div>
              <span className="text-[var(--text-color-quaternary)] leading-[1.6] flex-1">
                Find nearby psychiatrists and therapists.
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
export default Projects;
