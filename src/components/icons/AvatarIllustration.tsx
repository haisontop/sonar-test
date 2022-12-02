import { Box } from "@chakra-ui/react";
import { ComponentProps } from "react";

export const AvatarIllustration: React.FC<ComponentProps<typeof Box>> = ({
  fillColor,
  ...restProps
}) => {
  return (
    <Box {...restProps}>
      <svg
        width="154"
        height="164"
        viewBox="0 0 154 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M67.8507 1.78515C88.3054 8.02062 85.1029 39.3424 100.297 54.4307C115.676 69.7024 149.809 65.6196 153.649 86.9847C157.394 107.825 130.303 119.743 114.573 133.861C100.229 146.735 87.0898 164.493 67.8507 163.99C48.825 163.491 35.5581 146.255 23.506 131.476C12.9665 118.552 7.62281 103.483 5.05343 86.9847C1.80085 66.0989 -5.44525 43.0114 7.08227 26.0148C20.5553 7.73547 46.1699 -4.82409 67.8507 1.78515Z"
          fill={"currentColor"}
        />
      </svg>
    </Box>
  );
};
