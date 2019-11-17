import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

interface CircularProgressProps {
    size: number;
    width: number;
    backgroundWidth?: number;
    fill: number;
    prefill?: number;
    tintColor?: string;
    backgroundColor?: string;
    rotation?: number;
    duration?: number;
    lineCap?: "butt" | "round" | "default";
    arcSweepAngle?: number;
}

const CircularProgressChart = (props: CircularProgressProps) => (
    <AnimatedCircularProgress {...props} />
);

export default CircularProgressChart;
