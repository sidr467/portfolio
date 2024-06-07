import Image from "next/image"

function Profile() {
  return (
    <div className="grid items-center justify-center gap-8">
      {/* Image Section */}
      <div className=" bg-white pt-2 rounded-lg  ">
        <Image
          src="/profileImg.png"
          alt="Profile Image"
          width={150}
          height={200}
          className=" object-cove rounded-lg"
        />
      </div>
      {/* Text section */}
      <div className="grid gap-4">
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
        <div className="flex gap-4">
            <Image src="./github.svg" alt="github icon" width={24} height={24} ></Image>
            <Image src="./github.svg" alt="github icon" width={24} height={24} ></Image>
            <Image src="./github.svg" alt="github icon" width={24} height={24} ></Image>
        </div>
      </div>
    </div>
  )
}

export default Profile
