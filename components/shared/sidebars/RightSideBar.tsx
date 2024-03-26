import Image from "next/image";
import React from "react";

function RightSideBar() {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          <a
            className="flex cursor-pointer items-center justify-between gap-7"
            href="#"
          >
            <p className="body-medium text-dark500_light700">
              Best practices for data fetching in a Next.js application with
              Server-Side Rendering (SSR)?
            </p>
            <Image
              src={"assets/icons/chevron-right.svg"}
              width={20}
              height={20}
              alt="Chevron right icon"
              className="invert-colors"
            />
          </a>
          <a
            className="flex cursor-pointer items-center justify-between gap-7"
            href="#"
          >
            <p className="body-medium text-dark500_light700">
              Is it only me or the font is bolder than necessary?
            </p>
            <Image
              src={"assets/icons/chevron-right.svg"}
              width={20}
              height={20}
              alt="Chevron right icon"
              className="invert-colors"
            />
          </a>
          <a
            className="flex cursor-pointer items-center justify-between gap-7"
            href="#"
          >
            <p className="body-medium text-dark500_light700">
              Can I get the course for free?
            </p>
            <Image
              src={"assets/icons/chevron-right.svg"}
              width={20}
              height={20}
              alt="Chevron right icon"
              className="invert-colors"
            />
          </a>
          <a
            className="flex cursor-pointer items-center justify-between gap-7"
            href="#"
          >
            <p className="body-medium text-dark500_light700">
              Redux Toolkit Not Updating State as Expected
            </p>
            <Image
              src={"assets/icons/chevron-right.svg"}
              width={20}
              height={20}
              alt="Chevron right icon"
              className="invert-colors"
            />
          </a>
          <a
            className="flex cursor-pointer items-center justify-between gap-7"
            href="#"
          >
            <p className="body-medium text-dark500_light700">
              Async/Await Function Not Handling Errors Properly
            </p>
            <Image
              src={"assets/icons/chevron-right.svg"}
              width={20}
              height={20}
              alt="Chevron right icon"
              className="invert-colors"
            />
          </a>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          <a className="flex justify-between gap-2" href="#">
            <div className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 border-transparent bg-slate-900 shadow hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
              nextjs
            </div>
            <p className="small-medium text-dark500_light700">31</p>
          </a>
          <a className="flex justify-between gap-2" href="#">
            <div className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 border-transparent bg-slate-900 shadow hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
              test
            </div>
            <p className="small-medium text-dark500_light700">19</p>
          </a>
          <a className="flex justify-between gap-2" href="#">
            <div className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 border-transparent bg-slate-900 shadow hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
              react
            </div>
            <p className="small-medium text-dark500_light700">17</p>
          </a>
          <a className="flex justify-between gap-2" href="#">
            <div className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 border-transparent bg-slate-900 shadow hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
              css
            </div>
            <p className="small-medium text-dark500_light700">14</p>
          </a>
          <a className="flex justify-between gap-2" href="#">
            <div className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 border-transparent bg-slate-900 shadow hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
              next js
            </div>
            <p className="small-medium text-dark500_light700">9</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default RightSideBar;
