export const SlideUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
                type: "spring", // Add a spring-based bounce
            damping: 10, // Reduces oscillations
            bounce: 0.3, // Adjust the bounce effect (0-1)
            
            }
        },
    }
}
export const SlideDown = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: -50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
                type: "spring", // Add a spring-based bounce
            damping: 10, // Reduces oscillations
            bounce: 0.3, // Adjust the bounce effect (0-1)
            
            },
        },
    }
}