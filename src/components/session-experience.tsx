'use client'

import React, { useState } from 'react'
import { experiences } from '@/data/experience'
import { ChevronDown, ChevronUp, Briefcase, Calendar, MapPin } from 'lucide-react'

export default function ExperienceSection() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(experiences[0]?.id || null)
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({})

  const toggleCompany = (id: string) => {
    setExpandedCompany(expandedCompany === id ? null : id)
  }

  const toggleProject = (companyId: string, projectName: string) => {
    const key = `${companyId}-${projectName}`
    setExpandedProjects(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Professional Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => {
          const isExpanded = expandedCompany === exp.id

          return (
            <div
              key={exp.id}
              className="group bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800/90 dark:to-blue-900/10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              {/* Company Header - Always Visible */}
              <button
                onClick={() => toggleCompany(exp.id)}
                className="w-full p-6 text-left transition-colors hover:bg-blue-50/50 dark:hover:bg-gray-700/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Company Logo */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {exp.companyLogo}
                    </div>

                    {/* Company Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.company}
                      </h3>

                      {/* Roles - Show latest first */}
                      <div className="space-y-1 mb-3">
                        {exp.roles.map((role, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm flex-wrap">
                            <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                            <span className="font-semibold text-blue-700 dark:text-blue-400">
                              {role.title}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">
                              ({role.period})
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Period & Location */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period.start} - {exp.period.end}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className="flex-shrink-0 mt-2">
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Content - Projects */}
              {isExpanded && (
                <div className="px-6 pb-6 space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                  {/* Projects */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Projects ({exp.projects.length})
                    </h4>

                    {exp.projects.map((project, idx) => {
                      const projectKey = `${exp.id}-${project.name}`
                      const isProjectExpanded = expandedProjects[projectKey]

                      return (
                        <div
                          key={idx}
                          className="bg-white/60 dark:bg-gray-900/40 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
                        >
                          <button
                            onClick={() => toggleProject(exp.id, project.name)}
                            className="w-full text-left"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                                  {project.name}
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                  {project.description}
                                </p>
                              </div>
                              {isProjectExpanded ? (
                                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                              )}
                            </div>
                          </button>

                          {isProjectExpanded && (
                            <div className="mt-3 space-y-3">
                              {project.achievements && project.achievements.length > 0 && (
                                <div>
                                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Key Achievements:
                                  </p>
                                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-2">
                                    {project.achievements.map((achievement, i) => (
                                      <li key={i}>{achievement}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              <div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                  Technologies:
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                  {project.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-xs font-medium"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* Overall Technologies Used */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 dark:from-blue-900/60 dark:to-purple-900/60 dark:text-blue-200 text-sm font-semibold border border-blue-200 dark:border-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
