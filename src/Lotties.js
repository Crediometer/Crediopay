import React from "react";
import Lottie from "lottie-react";

export default function LottieAnimation({ lotti, width, height , data}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div styles={{width: "20%"}}>
      <Lottie options={defaultOptions} height={height} width={width} animationData={data}/>
    </div>
  );
}