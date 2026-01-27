'use client'

import React from 'react'
import { education, achievements, languages } from '@/data/education'
import { GraduationCap, Award, Languages } from 'lucide-react'

export default function EducationCertsSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Education & Achievements
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Education
            </h3>
          </div>

          <div className="space-y-3">
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {education.degree}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {education.school}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {education.period}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {education.location}
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Achievements
            </h3>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    {achievement.title}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="mt-8 bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <Languages className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Languages
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {lang.language}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {lang.proficiency}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
