'use client'

import React, { useCallback } from 'react';
import type { Engine, Container } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import ParticlesConfig from '@/utils/particles';

const ParticleBackground: React.FC = () => {
    // const particlesInit = useCallback(async (engine: Engine) => {
    //     await loadFull(engine);
    // }, []);

    // const particlesLoaded = useCallback(async (container: Container | undefined) => {
    //     if (container) {
    //         console.log(container);
    //     }
    // }, []);

    return (
        <div className="particle-background">
            <Particles
                id="tsparticles"
                // init={particlesInit}
                // loaded={particlesLoaded}
                params={{ParticlesConfig}}
                height="100vh"
                width="100vw"
                style={{zIndex:"-5"}}
            />
        </div>
    );
};

export default ParticleBackground;
