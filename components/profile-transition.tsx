'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

interface Theme {
  fill: string
  line: string
  glow: string
}

const THEMES: Theme[] = [
  {
    fill: 'rgba(180, 230, 250, 0.85)',
    line: 'rgba(140, 215, 245, 0.92)',
    glow: 'rgba(120, 220, 255, 0.6)',
  },
  {
    fill: 'rgba(180, 245, 210, 0.85)',
    line: 'rgba(140, 235, 190, 0.92)',
    glow: 'rgba(120, 255, 180, 0.6)',
  },
  {
    fill: 'rgba(255, 200, 220, 0.85)',
    line: 'rgba(250, 180, 205, 0.92)',
    glow: 'rgba(255, 170, 200, 0.6)',
  },
]

function drawScanlines(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  lineThickness: number,
  lineGap: number,
  theme: Theme,
  alpha: number
) {
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.fillStyle = theme.fill
  ctx.fillRect(0, 0, w, h)
  ctx.fillStyle = theme.line
  const step = lineThickness + lineGap
  for (let y = 0; y < h; y += step) {
    ctx.fillRect(0, y, w, lineThickness)
  }
  ctx.restore()
}

function drawImageCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number
) {
  if (!img.complete || img.naturalWidth === 0) return
  const imgRatio = img.naturalWidth / img.naturalHeight
  const canvasRatio = w / h
  let sx: number, sy: number, sWidth: number, sHeight: number

  if (imgRatio > canvasRatio) {
    sHeight = img.naturalHeight
    sWidth = sHeight * canvasRatio
    sx = (img.naturalWidth - sWidth) / 2
    sy = 0
  } else {
    sWidth = img.naturalWidth
    sHeight = sWidth / canvasRatio
    sx = 0
    sy = (img.naturalHeight - sHeight) / 2
  }

  ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, w, h)
}

interface ProfileTransitionProps {
  primaryImage: string
  secondaryImage: string
  interval?: number
  duration?: number
  className?: string
  alt?: string
}

export function ProfileTransition({
  primaryImage,
  secondaryImage,
  interval = 3500,
  duration = 650,
  className = '',
  alt = 'Profile',
}: ProfileTransitionProps) {
  const [isPrimary, setIsPrimary] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [jitter, setJitter] = useState({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const primaryImgRef = useRef<HTMLImageElement | null>(null)
  const secondaryImgRef = useRef<HTMLImageElement | null>(null)
  const rafRef = useRef<number>(0)
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // Preload images
  useEffect(() => {
    const img1 = new window.Image()
    img1.src = primaryImage
    img1.decode?.().catch(() => void 0)
    primaryImgRef.current = img1

    const img2 = new window.Image()
    img2.src = secondaryImage
    img2.decode?.().catch(() => void 0)
    secondaryImgRef.current = img2
  }, [primaryImage, secondaryImage])

  const triggerJitter = useCallback(() => {
    const offsets = [
      { x: -2, y: 0 },
      { x: 3, y: -1 },
      { x: -2, y: 1 },
      { x: 2, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 0 },
    ]
    let step = 0
    const intervalId = setInterval(() => {
      if (step < offsets.length) {
        setJitter(offsets[step])
        step++
      } else {
        clearInterval(intervalId)
        setJitter({ x: 0, y: 0 })
      }
    }, 18)
  }, [])

  const runTransition = useCallback(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const rect = container.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    const w = Math.round(rect.width)
    const h = Math.round(rect.height)

    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    const currentImg = isPrimary ? primaryImgRef.current : secondaryImgRef.current
    const nextImg = isPrimary ? secondaryImgRef.current : primaryImgRef.current
    if (!currentImg || !nextImg) return

    setIsTransitioning(true)
    triggerJitter()

    const theme = THEMES[Math.floor(Math.random() * THEMES.length)]
    const isTopToBottom = Math.random() > 0.5
    const startTime = performance.now()

    const r = 100 / duration
    const n = 250 / duration
    const l = 300 / duration
    const d = 550 / duration

    const animate = (currentTime: number) => {
      const t = Math.min((currentTime - startTime) / duration, 1)
      ctx.clearRect(0, 0, w, h)

      if (t < r) {
        drawImageCover(ctx, currentImg, w, h)
      } else if (t < n) {
        drawImageCover(ctx, currentImg, w, h)
        drawScanlines(ctx, w, h, 4, 3, theme, 0.3 + ((t - r) / (n - r)) * 0.55)
      } else if (t < l) {
        drawImageCover(ctx, currentImg, w, h)
        drawScanlines(ctx, w, h, 4, 3, theme, 1)
        const sliceH = 0.22 * h
        const progress = (t - n) / (l - n)
        const sliceY = isTopToBottom
          ? -sliceH * (1 - progress)
          : h - sliceH * progress

        ctx.save()
        ctx.beginPath()
        ctx.rect(0, sliceY, w, sliceH)
        ctx.clip()
        ctx.clearRect(0, 0, w, h)
        drawImageCover(ctx, nextImg, w, h)
        ctx.restore()
      } else if (t < d) {
        const progress = (t - l) / (d - l)
        const sliceH = 0.22 * h
        const startY = isTopToBottom
          ? -sliceH + (h + sliceH) * progress
          : h - (h + sliceH) * progress
        const endY = startY + sliceH

        let uTop: number, uBottom: number, mTop: number, mBottom: number
        if (isTopToBottom) {
          uTop = 0
          uBottom = mTop = Math.max(0, Math.min(h, endY))
          mBottom = h
        } else {
          mTop = 0
          uTop = mBottom = Math.max(0, Math.min(h, startY))
          uBottom = h
        }

        if (uBottom > uTop) {
          ctx.save()
          ctx.beginPath()
          ctx.rect(0, uTop, w, uBottom - uTop)
          ctx.clip()
          drawImageCover(ctx, currentImg, w, h)
          drawScanlines(ctx, w, h, 4, 3, theme, 1)
          ctx.restore()
        }

        if (mBottom > mTop) {
          ctx.save()
          ctx.beginPath()
          ctx.rect(0, mTop, w, mBottom - mTop)
          ctx.clip()
          drawImageCover(ctx, nextImg, w, h)
          ctx.restore()
        }

        const clipTop = Math.max(0, startY)
        const clipBottom = Math.min(h, endY)
        if (clipBottom > clipTop) {
          ctx.save()
          ctx.beginPath()
          ctx.rect(0, clipTop, w, clipBottom - clipTop)
          ctx.clip()
          drawImageCover(ctx, nextImg, w, h)
          ctx.restore()

          ctx.save()
          ctx.strokeStyle = theme.glow
          ctx.lineWidth = 1.5
          ctx.shadowColor = theme.glow
          ctx.shadowBlur = 4
          if (clipTop > 0) {
            ctx.beginPath()
            ctx.moveTo(0, clipTop)
            ctx.lineTo(w, clipTop)
            ctx.stroke()
          }
          if (clipBottom < h) {
            ctx.beginPath()
            ctx.moveTo(0, clipBottom)
            ctx.lineTo(w, clipBottom)
            ctx.stroke()
          }
          ctx.restore()
        }
      } else {
        const fade = (t - d) / (1 - d)
        drawImageCover(ctx, nextImg, w, h)
        if (fade < 1) {
          drawScanlines(ctx, w, h, 4, 3, theme, 1 - fade)
        }
      }

      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setIsPrimary((prev) => !prev)
        setIsTransitioning(false)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [isPrimary, duration, triggerJitter])

  // Schedule periodic transitions
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      runTransition()
    }, interval)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isPrimary, interval, runTransition])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const currentSrc = isPrimary ? primaryImage : secondaryImage

  return (
    <div
      ref={containerRef}
      className={`relative aspect-square overflow-hidden cursor-pointer select-none ${className}`}
      onClick={() => {
        if (!isTransitioning) runTransition()
      }}
      title="Click to transition"
      style={{
        transform: `translate3d(${jitter.x}px, ${jitter.y}px, 0)`,
        willChange: 'transform',
      }}
    >
      {/* Current static image */}
      <img
        src={currentSrc}
        alt={alt}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0ms',
        }}
        draggable={false}
      />

      {/* Hologram canvas for the scanline beam animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: isTransitioning ? 1 : 0,
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
