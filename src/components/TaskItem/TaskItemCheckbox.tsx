import cn from "classnames";
import { motion, useSpring } from "framer-motion";
import { FC, useEffect } from "react";

const MARGIN = 10;
const vWidth = 64 + MARGIN;
const vHeight = 64 + MARGIN;
const checkMarkPath =
  "M15 31.1977C23.1081 36.4884 29.5946 43 29.5946 43C29.5946 43 37.5 25.5 69 1.5";
const outlineBoxPath =
  "M24 0.5H40C48.5809 0.5 54.4147 2.18067 58.117 5.88299C61.8193 9.58532 63.5 15.4191 63.5 24V40C63.5 48.5809 61.8193 54.4147 58.117 58.117C54.4147 61.8193 48.5809 63.5 40 63.5H24C15.4191 63.5 9.58532 61.8193 5.88299 58.117C2.18067 54.4147 0.5 48.5809 0.5 40V24C0.5 15.4191 2.18067 9.58532 5.88299 5.88299C9.58532 2.18067 15.4191 0.5 24 0.5Z";

type Props = {
  checked: boolean;
  onClick?: () => void;
};

const TaskItemCheckbox: FC<Props> = ({ checked, onClick }) => {
  //  const progress =
  const progress = useSpring(0, {
  });
  
  useEffect(() => {
    if (checked) {
      progress.set(1);
    } else {
      progress.set(0);
    }
  }, [checked,progress ]);


  return (
    <motion.svg
      className={"size-6"}
      viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(" ")}
      onClick={onClick}
    >
      <defs>
        <clipPath id="clipPath">
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={outlineBoxPath}
          />
        </clipPath>
      </defs>
      <motion.path
        d={outlineBoxPath}
        strokeWidth={7}
        className={cn('stroke-primary', {'fill-background': !checked, 'fill-primary': checked} )} 
        strokeLinecap="round"
        strokeLinejoin={"round"}
      />
      <motion.path
        d={checkMarkPath}
        style={{
          pathLength: progress,
          strokeOpacity: progress,
        }}
        fill="transparent"
        className={cn('stroke-primary')}
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin={"round"}
      />
      <g clipPath="url(#clipPath)">
        <motion.path
          d={checkMarkPath}
          stroke={"white"}
          fill="transparent"
          pathLength={progress}
          strokeOpacity={progress}
          strokeWidth={10}
          strokeLinejoin="round"
          strokeLinecap="round"
        ></motion.path>
      </g>
    </motion.svg>
  );
};
export default TaskItemCheckbox;
