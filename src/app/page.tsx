import AnimatedBackground from "@/components/background-animation";
import { Button } from "@/components/ui/button";
import GradientButton from "@/components/ui/gradient-button";
import React from "react";



export default function Home() {
  return (
    <React.Fragment>
      <header className=" h-[60px] bg-transparent transition-colors duration-200 px-safe pt-safe">
        <div
          className="container-main relative z-10 flex h-full items-center"
          aria-label="Global"
        >
          {/* <Logo /> */}
          <nav className="ml-[77px]">
            <ul className="flex">
              <li>
                <a
                  className="inline-flex whitespace-pre p-3 text-[14px] text-white transition-colors duration-200 hover:text-blue"
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>

              <li className="group relative">
                <button
                  className="inline-flex items-center gap-x-1.5 whitespace-pre p-3 text-[14px] text-white transition-colors duration-200 hover:text-blue"
                  type="button"
                >
                  Resources
                  <img
                    alt=""
                    width={8}
                    height={14}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMCA2Ij48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS40IiBkPSJtMSAxIDQgNCA0LTQiIG9wYWNpdHk9Ii42Ii8+PC9zdmc+"
                  />
                </button>
                <div className="absolute hidden group-hover:block top-full left-0 w-40 bg-black text-white shadow-lg rounded-lg">
                  <ul className="py-2">
                    <li>
                      <a
                        href="/blog"
                        className="block px-3 py-2 text-sm hover:bg-gray-800"
                      >
                        Blog
                        <p className="text-xs text-gray-500">Read our latest insights</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs"
                        className="block px-3 py-2 text-sm hover:bg-gray-800"
                      >
                        Docs
                        <p className="text-xs text-gray-500">Explore our tutorials</p>

                      </a>
                    </li>
                    <li>
                      <a
                        href="/changelog"
                        className="block px-3 py-2 text-sm hover:bg-gray-800"
                      >
                        Changelog
                        <p className="text-xs text-gray-500">See what&#39;s new</p>

                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="group relative">
                <button
                  className="inline-flex items-center gap-x-1.5 whitespace-pre p-3 text-[14px] text-white transition-colors duration-200 hover:text-blue"
                  type="button"
                >
                  Community
                  <img
                    alt=""
                    width={8}
                    height={14}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMCA2Ij48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS40IiBkPSJtMSAxIDQgNCA0LTQiIG9wYWNpdHk9Ii42Ii8+PC9zdmc+"
                  />
                </button>
                <div className="absolute hidden group-hover:block top-full left-0 w-40 bg-black text-white shadow-lg rounded-lg">
                  <ul className="py-2">
                    <li>
                      <a
                        href="/forums"
                        className="block px-3 py-2 text-sm hover:bg-gray-800"
                      >
                        X.com
                        <p className="text-xs text-gray-500">Follow our latest news</p>

                      </a>
                    </li>
                    <li>
                      <a
                        href="/events"
                        className="block px-3 py-2 text-sm hover:bg-gray-800"
                      >
                        Linkedin
                        <p className="text-xs text-gray-500">Get updates</p>

                      </a>
                    </li>
                    <li>
                      <a
                        href="/events"
                        className="block px-3 py-2 text-sm hover:bg-gray-800"
                      >
                        Youtube
                        <p className="text-xs text-gray-500">Subscribe to the channel</p>

                      </a>
                    </li>
                    <li>
                      <a
                        href="/events"
                        className="block px-3 py-2 text-sm hover:bg-gray-800"
                      >
                        Github
                        <p className="text-xs text-gray-500">Star us</p>

                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  className="inline-flex whitespace-pre p-3 text-[14px] text-white transition-colors duration-200 hover:text-blue"
                  href="https://huly.blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </li>
            </ul>
          </nav>
          <div className="ml-auto flex gap-x-3.5">
            <Button size={"sm"}>
              {/* <GithubIcon className="mr-1" size={16} /> */}
              STAR US
            </Button>
            <Button size={"sm"} variant={"outline"}>
              Sign In
            </Button>
            <Button size={"sm"} variant={"outline"}>
              GET STARTED
            </Button>
          </div>
        </div>
      </header>
      <main className="h-screen w-screen flex justify-center items-start font-[family-name:var(--font-geist-sans)]">
        <section className="hero relative h-full w-full min-h-[1438px] bg-[#111] overflow-hidden bg-grey-1 flex justify-center items-center">
          <div>
            <div className="container-main relative flex h-full flex-col items-center w-xxl min-h-[800px]">
              <h1
                className="relative z-30 w-full bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text font-title text-[76px] font-bold leading-[1] tracking-tight text-transparent "
              >

              </h1>
            <p className="relative z-30 mt-5 max-w-md text-[18px] leading-snug tracking-tight  text-white">
              Huly, an open-source platform, serves as an all-in-one replacement of
              Linear, Jira, Slack, and Notion.
            </p>
            <div className="mt-11 lg:mt-9 md:mt-7 sm:mt-5">
              <GradientButton>
                <span className="text-[#5A250A]">Try it Free</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 9"
                  className="h-[9px] w-[17px] text-[#5A250A]"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                    clipRule="evenodd"
                  />
                </svg>
              </GradientButton>
            </div>
          </div>
          </div>
        </section>
      </main>
      <AnimatedBackground/>
    </React.Fragment>
  );
}
