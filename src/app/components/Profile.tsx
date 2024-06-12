import Image from "next/image"

function Profile() {
  return (
    <div className="flex flex-col items-center gap-8 md:grid grid-cols-2">
      {/* Image Section */}
      <div className=" md:order-2 ">
        <Image
          src="/image.png"
          alt="Profile Image"
          width={250}
          height={200}
          className=" bg-white object-cover rounded-lg m-auto self-center"
        />
      </div>
      {/* Text section */}
      <div className="flex flex-col items-center gap-6 ">
        <h1 className=" text-lg md:text-xl">
          Hi, I&apos;m <strong className="font-bold">Siddharth Rathod</strong>
        </h1>
        <div className=" w-48 h-12 relative overflow-hidden">
          <div className="absolute w-full h-full flex flex-col text-2xl md:text-4xl font-semibold scroll-container">
            <div className="flex items-center  h-full py-1">Designer</div>
            <div className="flex items-center  h-full py-1">Developer</div>
          </div>
        </div>
        {/* <p className="text-sm ">
          A Full Stack Developer specializing in React.js and Node.js. I focus
          on creating fast, accessible, visually appealing, and responsive
          digital experiences. And also creative front-end developer with more
          than +2 years of experience in enterprise companies and startups.
          Proficient in Html, Tailwind Css, Javascript and React. Passionate
          about UI/UX.
        </p> */}
        <div className="flex gap-4 items-center ">
          <a
            target="blank"
            href="https://github.com/sidr467"
            className="ring-black ring-1 text-center px-6 py-2 rounded-full  dark:ring-white hover:scale-105 hover:ring-2"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 23"
              className=" fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.02911 1.30982C7.78008 1.56421 8.49449 1.91587 9.15411 2.35582C10.0857 2.11773 11.0436 1.99812 12.0051 1.99982C12.9981 1.99982 13.9561 2.12382 14.8541 2.35482C15.5135 1.91529 16.2275 1.56398 16.9781 1.30982C17.6751 1.07282 18.6681 0.688818 19.2581 1.34182C19.6581 1.78582 19.7581 2.52982 19.8291 3.09782C19.9091 3.73182 19.9281 4.55782 19.7181 5.37782C20.5211 6.41482 21.0051 7.65182 21.0051 8.99982C21.0051 11.0418 19.8991 12.8148 18.2621 14.0428C17.4743 14.6263 16.6005 15.0838 15.6721 15.3988C15.8861 15.8888 16.0051 16.4308 16.0051 16.9998V19.9998C16.0051 20.265 15.8998 20.5194 15.7122 20.7069C15.5247 20.8945 15.2703 20.9998 15.0051 20.9998H9.00511C8.7399 20.9998 8.48554 20.8945 8.29801 20.7069C8.11047 20.5194 8.00511 20.265 8.00511 19.9998V19.0088C7.05011 19.1258 6.24911 19.0218 5.56811 18.7328C4.85611 18.4308 4.36011 17.9628 3.98711 17.5148C3.63311 17.0908 3.24711 16.1348 2.68911 15.9488C2.56449 15.9073 2.44926 15.8417 2.35 15.7557C2.25074 15.6696 2.1694 15.5649 2.11062 15.4474C1.99191 15.2102 1.9723 14.9355 2.05611 14.6838C2.13992 14.4321 2.32028 14.224 2.55751 14.1053C2.79475 13.9866 3.06942 13.967 3.32111 14.0508C3.98711 14.2728 4.42111 14.7528 4.71811 15.1388C5.19811 15.7588 5.58811 16.5688 6.34811 16.8918C6.66111 17.0248 7.12011 17.1118 7.83811 17.0138L8.00511 16.9798C8.00702 16.4356 8.12035 15.8976 8.33811 15.3988C7.4097 15.0838 6.53592 14.6264 5.74811 14.0428C4.11111 12.8148 3.00511 11.0428 3.00511 8.99982C3.00511 7.65382 3.48811 6.41782 4.28911 5.38182C4.07911 4.56182 4.09711 3.73382 4.17711 3.09882L4.18211 3.06082C4.25511 2.47882 4.34011 1.79382 4.74811 1.34182C5.33811 0.688818 6.33211 1.07382 7.02811 1.31082L7.02911 1.30982Z" />
            </svg>
          </a>
          <a
            target="blank"
            href="mailto:rsiddharth467@gmail.com"
            className="ring-black ring-1 text-center px-6 py-2 rounded-full  dark:ring-white hover:scale-105 hover:ring-2"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 16"
              className=" fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.7348 1.4101L15.4548 2.4101L10.0048 6.4601L4.55483 2.3701L3.27483 1.3701C2.97329 1.12064 2.60518 0.965136 2.21612 0.922846C1.82706 0.880556 1.43414 0.953339 1.08604 1.13218C0.737943 1.31102 0.449961 1.58806 0.257775 1.92897C0.0655881 2.26988 -0.0223571 2.65969 0.00483439 3.0501V14.6401C0.00483439 15.0008 0.14812 15.3467 0.403169 15.6018C0.658219 15.8568 1.00414 16.0001 1.36483 16.0001H4.55483V8.2801L10.0048 12.3701L15.4548 8.2801V16.0001H18.6448C19.0055 16.0001 19.3515 15.8568 19.6065 15.6018C19.8616 15.3467 20.0048 15.0008 20.0048 14.6401V3.0501C20.0236 2.66306 19.9295 2.2789 19.7341 1.94432C19.5386 1.60974 19.2502 1.33914 18.9038 1.16543C18.5574 0.99171 18.168 0.922355 17.783 0.965791C17.3979 1.00923 17.0338 1.16358 16.7348 1.4101Z" />
            </svg>
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/siddharth-rathod-6524b926b/"
            className="ring-black ring-1 text-center px-6 py-2 rounded-full dark:ring-white hover:scale-105 hover:ring-2"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 18"
              className=" fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.94482 2.00002C4.94456 2.53046 4.73359 3.03906 4.35833 3.41394C3.98307 3.78883 3.47426 3.99929 2.94382 3.99902C2.41339 3.99876 1.90479 3.78779 1.5299 3.41253C1.15502 3.03727 0.944559 2.52846 0.944824 1.99802C0.94509 1.46759 1.15606 0.958988 1.53132 0.584103C1.90658 0.209218 2.41539 -0.00124153 2.94582 -0.000976312C3.47626 -0.000711096 3.98486 0.210257 4.35975 0.585517C4.73463 0.960777 4.94509 1.46959 4.94482 2.00002ZM5.00482 5.48002H1.00482V18H5.00482V5.48002ZM11.3248 5.48002H7.34482V18H11.2848V11.43C11.2848 7.77002 16.0548 7.43002 16.0548 11.43V18H20.0048V10.07C20.0048 3.90002 12.9448 4.13002 11.2848 7.16002L11.3248 5.48002Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
