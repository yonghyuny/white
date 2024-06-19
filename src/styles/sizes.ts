const BASE_SIZE = 16; // 기본 단위 rem (1rem = 16px, 브라우저 기본 폰트 크기 기준)

const SIZES = {
    SPACING: {
        EXTRA_EXTRA_SMALL: `${BASE_SIZE * 0.25}px`,  // 0.25px (4px)
        EXTRA_SMALL: `${BASE_SIZE * 0.5}px`,        // 0.5px (8px)
        SMALL: `${BASE_SIZE}px`,                    // 1px (16px)
        MEDIUM: `${BASE_SIZE * 1.5}px`,             // 1.5px (24px)
        LARGE: `${BASE_SIZE * 2}px`,                // 2px (32px)
        EXTRA_LARGE: `${BASE_SIZE * 2.5}px`,        // 2.5px (40px)
        EXTRA_EXTRA_LARGE: `${BASE_SIZE * 3}px`,    // 3px (48px)
    },
    FONT_SIZE: {
        EXTRA_EXTRA_SMALL: `${BASE_SIZE * 0.625}px`, // 0.625px (10px)
        EXTRA_SMALL: `${BASE_SIZE * 0.75}px`,       // 0.75px (12px)
        SMALL: `${BASE_SIZE * 0.875}px`,            // 0.875px (14px)
        MEDIUM: `${BASE_SIZE}px`,                   // 1px (16px)
        LARGE: `${BASE_SIZE * 1.125}px`,            // 1.125px (18px)
        EXTRA_LARGE: `${BASE_SIZE * 1.25}px`,       // 1.25px (20px)
        EXTRA_EXTRA_LARGE: `${BASE_SIZE * 1.5}px`,  // 1.5px (24px)
        TRIPLE_EXTRA_LARGE: `${BASE_SIZE * 2}px`,   // 2px (32px)
    },
    BORDER_RADIUS: {
        SMALL: `${BASE_SIZE * 0.25}px`,   // 0.25px (4px)
        MEDIUM: `${BASE_SIZE * 0.5}px`,   // 0.5px (8px)
        LARGE: `${BASE_SIZE * 1}px`,      // 1px (16px)
    },
    ICON_SIZE: {
        SMALL: `${BASE_SIZE}px`,          // 1px (16px)
        MEDIUM: `${BASE_SIZE * 1.5}px`,   // 1.5px (24px)
        LARGE: `${BASE_SIZE * 2}px`,      // 2px (32px)
    },
    CONTAINER_WIDTH: {
        SMALL: `${BASE_SIZE * 37.5}px`,   // 37.5px (600px)
        MEDIUM: `${BASE_SIZE * 60}px`,    // 60px (960px)
        LARGE: `${BASE_SIZE * 80}px`,     // 80px (1280px)
        EXTRA_LARGE: `${BASE_SIZE * 120}px`, // 120px (1920px)
    },
    SIDEBAR_WIDTH: {
        DEFAULT: 300 // 18.75px (300px)
    },
    SCROLL_WIDTH:{
        DEFAULT: `8px`
    }
};

export default SIZES;
