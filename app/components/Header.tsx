import Image from "next/image";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

export default async function Header() {
  return (
    <>
      <main className="h-[67vh] mx-auto flex max-w-2xl flex-1 flex-col gap-16 leading-[1.6] py-16 sm:py-32">
        <div className="flex flex-col gap-4 px-4 ">
          <Image
            src="/img/astronaut.jpg"
            alt="Me"
            width={60}
            height={60}
            draggable={false}
            className="mb-8 rounded-full select-none"
          />
          <h1
            id="home-title"
            className="text-[var(--text-color-primary)] text-2xl font-semibold"
          >
            Hieu Bui
          </h1>

          <p className="text-[var(--text-color-secondary)] text-2xl font-semibold text-pretty">
            I&apos;m a software engineer residing in Houston, <br />
            currently working at NASA.
          </p>
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
    </>
  );
}
