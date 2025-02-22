"use client"
import { motion } from 'framer-motion';
import Orb from './orb/orb';
import Particles from './particles/particles';


export default function Welcome() {
    return (
        <section className="py-20 relative bg-[#0B0B1A]/70" style={{ height: '98vh' }}>
            {/* Background Particles */}
            <div className="absolute inset-0 pointer-events-none">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Remove the original particles div */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative" style={{ width: '600px', height: '600px' }}>
                            <Orb
                                hoverIntensity={0.8}
                                rotateOnHover={true}
                                hue={320}
                                forceHoverState={false}
                            />
                            <motion.h3
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text z-10"
                            >
                                Olá,<br />
                                viajante.
                            </motion.h3>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-center mt-8"
                    >
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Bem-vindo ao meu portfólio. Aqui você encontrará uma jornada através das minhas experiências e habilidades.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}