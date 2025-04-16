"use client";
import * as animationData from "../../public/github.lottie";
import { useLottie } from "lottie-react";

const LottieComponent = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };
  const { View } = useLottie(defaultOptions);

  return <>{View}</>;
};

export default LottieComponent;
