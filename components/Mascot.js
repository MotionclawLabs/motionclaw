import { useState, useEffect } from 'react'
import { AdaptiveEvents } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import MascotControl from './MascotControl'

const Mascot = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="h-52">
      <Canvas mode="concurrent" camera={{ fov: 40, near: 0.1, far: 1000, position: [0, 0, 6] }}>
        <MascotControl />
        <AdaptiveEvents />
      </Canvas>
    </div>
  )
}

export default Mascot
