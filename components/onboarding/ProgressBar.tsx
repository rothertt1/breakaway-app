'use client'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex flex-col items-center gap-2 mb-8">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-300 ${
              i + 1 === currentStep
                ? 'w-8 bg-orange-500'
                : i + 1 < currentStep
                ? 'w-8 bg-orange-500'
                : 'w-8 bg-gray-600'
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-gray-400">
        {currentStep}/{totalSteps}
      </p>
    </div>
  )
}
