import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import COLORS from "@/styles/colors";
import SIZES from "@/styles/sizes";

interface LogoLinkProps {
    src: string;
    href: string;
    alt: string;
}

const LogoLink: React.FC<LogoLinkProps> = ({href, src, alt}) => {
    return (
        <Link sx={{backgroundColor: COLORS.PRIMARY, padding: SIZES.SPACING.EXTRA_EXTRA_SMALL, borderBottom:`1px solid ${COLORS.BORDER.PRIMARY}`}} href={href} underline="none">
            <Box sx={{width: "100%", height: "100%", objectFit: "contain"}} component="img" src={src} alt={alt}/>
        </Link>
    );
};

export default LogoLink;
