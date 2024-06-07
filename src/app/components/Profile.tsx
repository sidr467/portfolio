import Image from "next/image"

function Profile() {
  return (
    <div className="flex items-center justify-center flex-col gap-8 md:grid grid-cols-2">
      {/* Image Section */}
      <div className=" md:order-2 ">
        <Image
          src="/profileImg.png"
          alt="Profile Image"
          width={150}
          height={200}
          className=" object-cover rounded-lg m-auto self-center"
        />
      </div>
      {/* Text section */}
      <div className="grid gap-6">
        <h1 className=" text-xl font-bold">
          Hi, I&apos;m <strong>Siddharth Rathod</strong>
        </h1>
        <p className="text-sm ">
          A Full Stack Developer specializing in React.js and Node.js. I focus
          on creating fast, accessible, visually appealing, and responsive
          digital experiences. My passion for web development remains as strong
          as ever, driving me to deliver high-quality, innovative solutions. And
          also creative front-end developer with more than +2 years of
          experience in enterprise companies and startups. Proficient in Html,
          Tailwind Css, Javascript and React. Passionate about UI/UX
        </p>
        <div className="flex gap-4 items-center ">
          <a href="https://github.com/sidr467">
            <Image
              src="./github.svg"
              alt="github icon"
              width={24}
              height={24}
            ></Image>
          </a>
          <a href="mailto:rsiddharth467@gmail.com">
            <Image
              src="./gmail.svg"
              alt="gmail icon"
              width={24}
              height={24}
            ></Image>
          </a>
          <a href="https://www.linkedin.com/in/siddharth-rathod-6524b926b/">
            <Image
              src="./linkedin.svg"
              alt="linkedin icon"
              width={24}
              height={24}
            ></Image>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
