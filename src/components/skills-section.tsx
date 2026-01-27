import React from 'react'
import { coreSkills, technicalStack } from '@/data/skills'

export default function SkillsSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      {/* Core Skills */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Core Competencies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {coreSkills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg text-center font-semibold text-gray-800 dark:text-gray-200 border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Technical Stack */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Technical Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(technicalStack).map(([category, technologies]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-4">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
