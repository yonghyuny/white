import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import COLORS from "@/styles/colors";
import SIZES from "@/styles/sizes";

interface LogoLinkProps {
  src: string;
  href: string;
  alt: string;
}

const LogoLink: React.FC<LogoLinkProps> = ({ href, src, alt }) => {
  return (
    <Link
      sx={{
        backgroundColor: "#3f4d67",
        pt: SIZES.SPACING.EXTRA_SMALL,
        pl: SIZES.SPACING.EXTRA_SMALL,
      }}
      href={href}
      underline="none"
    >
      <Box
        sx={{
          backgroundColor: "#3f4d67",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        component="img"
        src={src}
        alt={alt}
      />
    </Link>
  );
};

export default LogoLink;
