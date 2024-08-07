import { OrbitControls, View  } from '@react-three/drei'
import Lights from './Lights'
import { Suspense } from 'react'
import Iphone from './Iphone'
import * as THREE from 'three'
import Loader from './Loader'


const ModelView = ({index, groupRef, gsapType, controlRef, setRotationStated, size, item}) => {
    
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full $ {index === 2} ? 'right-[-100%] : '' `}>

            {/* Ambient light */}
            <ambientLight intensity={0.3} />

            <perspectiveCamera makeDefault position={[0, 0, 4]}/>

            <Lights />

            <OrbitControls
            
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationStated(controlRef.current.getAzimuthalAngle())}
            
            />

            <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0, 0, 0]}>
                <Suspense fallback={<Loader />}>
                    <Iphone
                        scale={index === 1 ? [30, 30, 30] : [33, 33, 33]}
                        item={item}
                        size={size}
                    />
            
                </Suspense> 
            </group>

            
            
        </View>
    )
}

export default ModelView