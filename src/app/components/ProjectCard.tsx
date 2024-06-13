import React from "react"
import Image from "next/image"

function ProjectCard({ title, image, github, live, gitsvg }: any) {
  return (
    <div className="grid gap-4 shadow-sm shadow-slate-600 p-4 rounded-lg">
      <div>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className=" object-contain"
        ></Image>
      </div>
      <div className="flex flex-col gap-4  justify-center items-center">
        <h2 className="text-base md:text-lg font-bold">{title}</h2>
        <div className="text-sm md:text-base flex gap-2">
          <a href={github} target="blank">
            <button className="dark:bg-white bg-black text-white dark:text-black rounded-md px-2 py-1 font-medium flex gap-4 items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 23"
                className=" fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.02911 1.30982C7.78008 1.56421 8.49449 1.91587 9.15411 2.35582C10.0857 2.11773 11.0436 1.99812 12.0051 1.99982C12.9981 1.99982 13.9561 2.12382 14.8541 2.35482C15.5135 1.91529 16.2275 1.56398 16.9781 1.30982C17.6751 1.07282 18.6681 0.688818 19.2581 1.34182C19.6581 1.78582 19.7581 2.52982 19.8291 3.09782C19.9091 3.73182 19.9281 4.55782 19.7181 5.37782C20.5211 6.41482 21.0051 7.65182 21.0051 8.99982C21.0051 11.0418 19.8991 12.8148 18.2621 14.0428C17.4743 14.6263 16.6005 15.0838 15.6721 15.3988C15.8861 15.8888 16.0051 16.4308 16.0051 16.9998V19.9998C16.0051 20.265 15.8998 20.5194 15.7122 20.7069C15.5247 20.8945 15.2703 20.9998 15.0051 20.9998H9.00511C8.7399 20.9998 8.48554 20.8945 8.29801 20.7069C8.11047 20.5194 8.00511 20.265 8.00511 19.9998V19.0088C7.05011 19.1258 6.24911 19.0218 5.56811 18.7328C4.85611 18.4308 4.36011 17.9628 3.98711 17.5148C3.63311 17.0908 3.24711 16.1348 2.68911 15.9488C2.56449 15.9073 2.44926 15.8417 2.35 15.7557C2.25074 15.6696 2.1694 15.5649 2.11062 15.4474C1.99191 15.2102 1.9723 14.9355 2.05611 14.6838C2.13992 14.4321 2.32028 14.224 2.55751 14.1053C2.79475 13.9866 3.06942 13.967 3.32111 14.0508C3.98711 14.2728 4.42111 14.7528 4.71811 15.1388C5.19811 15.7588 5.58811 16.5688 6.34811 16.8918C6.66111 17.0248 7.12011 17.1118 7.83811 17.0138L8.00511 16.9798C8.00702 16.4356 8.12035 15.8976 8.33811 15.3988C7.4097 15.0838 6.53592 14.6264 5.74811 14.0428C4.11111 12.8148 3.00511 11.0428 3.00511 8.99982C3.00511 7.65382 3.48811 6.41782 4.28911 5.38182C4.07911 4.56182 4.09711 3.73382 4.17711 3.09882L4.18211 3.06082C4.25511 2.47882 4.34011 1.79382 4.74811 1.34182C5.33811 0.688818 6.33211 1.07382 7.02811 1.31082L7.02911 1.30982Z" />
              </svg>
              <span>Github</span>
            </button>
          </a>
          <a href={live} target="blank">
            <button className="dark:bg-white bg-black text-white dark:text-black rounded-md px-2 py-1 font-medium flex gap-4 items-center">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" fill-current"
              >
                <path d="M11.6 13L2 3.4V12H0V0H12V2H3.4L13 11.6L11.6 13Z" />
              </svg>

              <span>Live</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
