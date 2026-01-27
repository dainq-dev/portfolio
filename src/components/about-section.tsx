'use client'

import React from 'react'
import { professionalSummary } from '@/data/skills'

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {professionalSummary}
        </p>
      </div>
    </div>
  )
}
