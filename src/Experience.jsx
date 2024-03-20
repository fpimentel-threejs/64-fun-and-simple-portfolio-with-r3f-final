import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('retro_computer_setup_free/scene.gltf')
    
    return <>

        <color args={ [ '#241a10' ] } attach="background" />

        <Environment preset="city" />
        
        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, .2 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 } >  
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1 }
                    intensity={ 65 }
                    color={ '#83f28f' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <primitive
                    object={ computer.scene }
                    position={[0, - 1.2, 0] }
                    scale={.05}
                     rotation={ [-Math.PI/32, -Math.PI/16, 0] }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 20 }
                        position={ [ -23, 29, - 10.5 ] }
                        rotation={ [-.075,.15,.02] }
                    >
                        <iframe src="https://resume-page-phi.vercel.app/" />
                    </Html>
                </primitive>

                <Text
                    font="Madimi_One/MadimiOne-Regular.ttf"
                    fontSize={ .75 }
                    color={'#83f28f'}
                    position={ [ 2, 1.5, 0 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 2 }
                >
                    FERNANDO
                </Text>
                <Text
                    font="Madimi_One/MadimiOne-Regular.ttf"
                    fontSize={ .75 }
                    color={'#abf7b1'}
                    position={ [ 2, -.5, 1.5 ] }
                    rotation={ [0,- 1.25, -Math.PI/2] }
                    maxWidth={ 2 }
                >
                    PIMENTEL
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}