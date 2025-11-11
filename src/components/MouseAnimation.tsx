'use client'

import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  baseX: number
  baseY: number
  size: number
  hue: number
  life: number
  maxLife: number
}

interface Connection {
  from: Point
  to: Point
  strength: number
}

export function MouseAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, vx: 0, vy: 0, prevX: 0, prevY: 0 })
  const pointsRef = useRef<Point[]>([])
  const connectionsRef = useRef<Connection[]>([])
  const animationRef = useRef<number>()
  const mouseTrailRef = useRef<Point[]>([])
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize points
    const initPoints = () => {
      pointsRef.current = []
      const numberOfPoints = Math.min(120, Math.floor((canvas.width * canvas.height) / 15000)) // Increased from 80 to 120 and reduced divisor for more points

      for (let i = 0; i < numberOfPoints; i++) {
                pointsRef.current.push({
                  x: Math.random() * canvas.width,
                  y: Math.random() * canvas.height,
                  vx: 0,
                  vy: 0,
                  baseX: Math.random() * canvas.width,
                  baseY: Math.random() * canvas.height,
                  size: Math.random() * 2 + 1, // Increased size from 1.5+0.5 to 2+1
                  hue: Math.random() * 60 + 180, // Expanded range for more color variety
                  life: Math.random() * 100 + 50,
                  maxLife: Math.random() * 100 + 50,
                })
      }
    }

    initPoints()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current
      mouse.prevX = mouse.x
      mouse.prevY = mouse.y
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.vx = mouse.x - mouse.prevX
      mouse.vy = mouse.y - mouse.prevY

              // No mouse trail - disabled for calmer background
    }

    // Mouse leave handler
    const handleMouseLeave = () => {
      mouseRef.current.x = -100
      mouseRef.current.y = -100
    }

    window.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop with slower frame rate for calmer movement
    const animate = (currentTime: number) => {
      // Limit to ~30fps for calmer animation
      if (currentTime - lastTimeRef.current < 33.33) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastTimeRef.current = currentTime

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const points = pointsRef.current
      const mouse = mouseRef.current

      // Update connections
      connectionsRef.current = []

      points.forEach((point, index) => {
        // Calculate distance to mouse
        const dx = mouse.x - point.x
        const dy = mouse.y - point.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 120

        // Gentle floating animation - no mouse interaction
        // Create organic floating movement
        const time = Date.now() * 0.0005 // Slow time for gentle movement
        const floatX = Math.sin(time + point.baseX * 0.01) * 0.5
        const floatY = Math.cos(time + point.baseY * 0.01) * 0.5

        point.vx += floatX * 0.01
        point.vy += floatY * 0.01

        // Return to base position very slowly
        const baseDx = point.baseX - point.x
        const baseDy = point.baseY - point.y
        const baseDistance = Math.sqrt(baseDx * baseDx + baseDy * baseDy)

        if (baseDistance > 1) {
          point.vx += baseDx * 0.002 // Very slow return
          point.vy += baseDy * 0.002
        }

        // Apply damping and speed limits
        point.vx *= 0.98
        point.vy *= 0.98

        // Limit maximum speed
        const maxSpeed = 3
        const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy)
        if (speed > maxSpeed) {
          point.vx = (point.vx / speed) * maxSpeed
          point.vy = (point.vy / speed) * maxSpeed
        }

        // Update position
        point.x += point.vx
        point.y += point.vy

        // Keep points in bounds with smooth wrapping
        if (point.x < -50) point.x = canvas.width + 50
        if (point.x > canvas.width + 50) point.x = -50
        if (point.y < -50) point.y = canvas.height + 50
        if (point.y > canvas.height + 50) point.y = -50

        // Update hue based on velocity (more subtle)
        const currentSpeed = Math.sqrt(point.vx * point.vx + point.vy * point.vy)
        point.hue = 200 + currentSpeed * 10

        // Draw connections (limit connections for performance)
        if (index % 3 === 0) { // Only check connections for every 3rd point
          points.slice(index + 1).forEach(otherPoint => {
            const dx = point.x - otherPoint.x
            const dy = point.y - otherPoint.y
            const connectionDistance = Math.sqrt(dx * dx + dy * dy)

            if (connectionDistance < 120) { // Increased from 80 to 120
              connectionsRef.current.push({
                from: point,
                to: otherPoint,
                strength: (120 - connectionDistance) / 120, // Updated strength calculation
              })
            }
          })
        }
      })

      // Draw connections (limit number for performance)
      const maxConnections = 100 // Increased from 50 to 100
      connectionsRef.current
        .sort((a, b) => b.strength - a.strength) // Draw strongest connections first
        .slice(0, maxConnections)
        .forEach(connection => {
          const { from, to, strength } = connection
          ctx.beginPath()
          ctx.moveTo(from.x, from.y)
          ctx.lineTo(to.x, to.y)
                  ctx.strokeStyle = `hsla(${Math.min(from.hue + to.hue) / 2}, 70%, 60%, ${strength * 0.3})`
          ctx.lineWidth = strength * 1.2
          ctx.stroke()
        })

      // Draw points
      points.forEach(point => {
        const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy)
        const glow = Math.min(speed * 1.5, 0.8)

                // Core point - Enhanced brightness
                ctx.beginPath()
                ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
                ctx.fillStyle = `hsla(${point.hue}, 85%, 75%, ${0.5 + glow * 0.5})` // Increased opacity and brightness
                ctx.fill()

                // Enhanced glow for all points
                ctx.beginPath()
                ctx.arc(point.x, point.y, point.size + glow * 3, 0, Math.PI * 2)
                ctx.fillStyle = `hsla(${point.hue}, 75%, 65%, ${glow * 0.25 + 0.1})` // Increased glow visibility
                ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        mixBlendMode: 'screen',
        opacity: 1 // Increased from 0.8 to 1 for better visibility
      }}
    />
  )
}
