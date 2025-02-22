"use client"
import { motion } from 'framer-motion';

export default function LoadingOverlay() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B1A]"
        >
            <div className="text-center flex flex-col items-center gap-8">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
                />
                <motion.h2
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="text-xl text-blue-400"
                >
                    Lançando...
                </motion.h2>
            </div>
        </motion.div>
    );
}