"use client"

import { Blocks } from "react-loader-spinner"

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center z-1000">
      <Blocks
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      ></Blocks>
    </div>
  )
}

export default Loading
