import { MotionValue, useScroll, useTransform } from "framer-motion";
import { RefObject, useCallback } from "react";

export const scroll = (ref: RefObject<HTMLElement>) => useCallback(() => useScroll({
    target: ref,
    offset: ["start end", "end"],
}), [ref]);

export const transformer = (scrollYProgress: MotionValue<number>) => useCallback(
    (start: number[], end: number[]) =>
        useTransform(scrollYProgress, start, end),
    [scrollYProgress]
);