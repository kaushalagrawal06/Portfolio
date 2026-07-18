'use client'

import { useSyncExternalStore } from 'react'
import { motion, type Variants } from 'framer-motion'

type NodeDef = {
  label: string
  x: number
  y: number
}

const LABELS = [
  'Sales',
  'Marketing',
  'Operations',
  'Finance',
  'Customer Success',
  'Management',
  'AI Agent',
  'Data',
  'Reporting',
]

const center = { x: 50, y: 52 }
const RX = 39
const RY = 41

function buildNodes(): NodeDef[] {
  return LABELS.map((label, i) => {
    const angle = (-90 + i * (360 / LABELS.length)) * (Math.PI / 180)
    const x = center.x + RX * Math.cos(angle)
    const y = center.y + RY * Math.sin(angle)
    return { label, x, y }
  })
}

const nodes = buildNodes()

function labelTransform(x: number) {
  if (x < 32) return 'translate(-100%, -50%)'
  if (x > 68) return 'translate(0%, -50%)'
  return 'translate(-50%, -230%)'
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

// Hydration-safe reduced-motion reader: server snapshot is always false so
// SSR and first client paint agree; React re-renders with the real value
// after hydration.
function useReducedMotionSafe() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(REDUCED_MOTION_QUERY)
      mq.addEventListener('change', onChange)
      return () => mq.removeEventListener('change', onChange)
    },
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  )
}

/** Frosted-glass panel that frames the network. */
function GlassFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto" aria-hidden="true">
      <div className="absolute inset-0 rounded-3xl border border-white/60 bg-white/25 backdrop-blur-xl shadow-[0_24px_60px_-32px_rgba(8,17,31,0.45)]" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-white/10 to-transparent" />
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40" />
      <div className="relative w-full h-full p-6">{children}</div>
    </div>
  )
}

function NodeLabels() {
  return (
    <>
      {nodes.map((node) => (
        <span
          key={`label-${node.label}`}
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: labelTransform(node.x) }}
          className="absolute whitespace-nowrap text-[11px] font-medium text-ink bg-white/70 backdrop-blur-sm px-2 py-1 rounded-full border border-white/70 shadow-sm"
        >
          {node.label}
        </span>
      ))}
    </>
  )
}

const svgContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const lineVariant: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 0.4,
    transition: { pathLength: { duration: 0.5, ease: 'easeOut' }, opacity: { duration: 0.3 } },
  },
}

const dotVariant: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 18 } },
}

const labelContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } },
}

const labelVariant: Variants = {
  hidden: { opacity: 0, y: 3 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function AnimatedNetwork() {
  return (
    <GlassFrame>
      <div className="relative w-full h-full">
        <motion.svg
          viewBox="0 0 100 104"
          className="w-full h-full overflow-visible"
          variants={svgContainer}
          initial="hidden"
          animate="show"
        >
          {/* connection lines */}
          {nodes.map((node) => (
            <motion.line
              key={`line-${node.label}`}
              x1={center.x}
              y1={center.y}
              x2={node.x}
              y2={node.y}
              stroke="#2563EB"
              strokeWidth={0.4}
              variants={lineVariant}
            />
          ))}

          {/* department nodes */}
          {nodes.map((node) => (
            <motion.circle
              key={`dot-${node.label}`}
              cx={node.x}
              cy={node.y}
              r={2.4}
              fill="#06B6D4"
              variants={dotVariant}
            />
          ))}

          {/* data pulses flowing into the hub — the "meaningful" motion */}
          {nodes.map((node, i) => (
            <motion.circle
              key={`pulse-${node.label}`}
              r={1}
              fill="#2563EB"
              initial={{ cx: node.x, cy: node.y, opacity: 0 }}
              animate={{
                cx: [node.x, center.x],
                cy: [node.y, center.y],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: 1.2 + i * 0.22,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* central AI hub */}
          <motion.circle
            cx={center.x}
            cy={center.y}
            r={6}
            fill="#08111F"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.05 }}
            style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
          />
          <motion.circle
            cx={center.x}
            cy={center.y}
            r={6}
            fill="none"
            stroke="#2563EB"
            strokeWidth={0.5}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
          />
        </motion.svg>

        <motion.div variants={labelContainer} initial="hidden" animate="show" className="absolute inset-0">
          {nodes.map((node) => (
            <motion.span
              key={`label-${node.label}`}
              variants={labelVariant}
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: labelTransform(node.x) }}
              className="absolute whitespace-nowrap text-[11px] font-medium text-ink bg-white/70 backdrop-blur-sm px-2 py-1 rounded-full border border-white/70 shadow-sm"
            >
              {node.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </GlassFrame>
  )
}

function StaticNetwork() {
  return (
    <GlassFrame>
      <div className="relative w-full h-full">
        <svg viewBox="0 0 100 104" className="w-full h-full overflow-visible">
          {nodes.map((node) => (
            <line
              key={`line-${node.label}`}
              x1={center.x}
              y1={center.y}
              x2={node.x}
              y2={node.y}
              stroke="#2563EB"
              strokeWidth={0.4}
              strokeOpacity={0.4}
            />
          ))}
          {nodes.map((node) => (
            <circle key={`dot-${node.label}`} cx={node.x} cy={node.y} r={2.4} fill="#06B6D4" />
          ))}
          <circle cx={center.x} cy={center.y} r={6} fill="#08111F" />
        </svg>
        <NodeLabels />
      </div>
    </GlassFrame>
  )
}

export default function NodeNetwork() {
  const reduceMotion = useReducedMotionSafe()

  if (reduceMotion) return <StaticNetwork />

  return <AnimatedNetwork />
}
