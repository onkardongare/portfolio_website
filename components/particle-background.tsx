'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = container.offsetWidth || window.innerWidth)
    let height = (canvas.height = container.offsetHeight || window.innerHeight)

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 190,
    }

    // High density for prominent constellation effect in hero
    const particleCount = Math.min(
      Math.max(Math.floor((width * height) / 11000), 45),
      90
    )

    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 1.8 + 2.2, // 2.2px to 4px
      })
    }

    const handleResize = () => {
      if (!canvas || !container) return
      width = canvas.width = container.clientWidth || window.innerWidth
      height = canvas.height = container.clientHeight || window.innerHeight
    }

    handleResize()

    const ro = new ResizeObserver(() => {
      handleResize()
    })
    ro.observe(container)

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)

    const MAX_DISTANCE = 155

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw connecting lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.55
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(110, 160, 255, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // 2. Draw connecting lines from cursor to nearby particles
      if (mouse.x >= 0 && mouse.x <= width && mouse.y >= 0 && mouse.y <= height) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x
          const dy = mouse.y - particles[i].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.8
            ctx.beginPath()
            ctx.moveTo(mouse.x, mouse.y)
            ctx.lineTo(particles[i].x, particles[i].y)
            ctx.strokeStyle = `rgba(125, 175, 255, ${alpha})`
            ctx.lineWidth = 1.3
            ctx.stroke()
          }
        }

        // Draw cursor node
        ctx.save()
        ctx.shadowColor = 'rgba(120, 175, 255, 0.95)'
        ctx.shadowBlur = 12
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 4.5, 0, Math.PI * 2)
        ctx.fillStyle = '#8ab4ff'
        ctx.fill()
        ctx.restore()
      }

      // 3. Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        // Bounce on boundaries
        if (p.x < 0) {
          p.x = 0
          p.vx = -p.vx
        } else if (p.x > width) {
          p.x = width
          p.vx = -p.vx
        }

        if (p.y < 0) {
          p.y = 0
          p.vy = -p.vy
        } else if (p.y > height) {
          p.y = height
          p.vy = -p.vy
        }

        // Subtle repulsion near cursor
        if (mouse.x >= 0 && mouse.y >= 0) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 0.4
            p.x += (dx / dist) * force
            p.y += (dy / dist) * force
          }
        }

        // Draw dot with subtle glow
        ctx.save()
        ctx.shadowColor = 'rgba(100, 155, 255, 0.6)'
        ctx.shadowBlur = 6
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(115, 165, 255, 0.92)'
        ctx.fill()
        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      ro.disconnect()
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: 0,
        backgroundColor: '#06080d',
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.055) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.055) 1px, transparent 1px)
        `,
        backgroundSize: '65px 65px',
      }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  )
}
