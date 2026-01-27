'use client'

import React, { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  role: string
  productLink: string
  iframeUrl: string
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load projects:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Personal Projects
        </h2>
        <div className="text-center text-gray-600 dark:text-gray-400">
          Loading projects...
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Personal Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Description:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Role:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <a
                      href={project.productLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Preview */}
              <div className="relative h-64 lg:h-full min-h-[300px] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  src={project.iframeUrl}
                  className="w-full h-full border-0"
                  title={project.title}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && !loading && (
        <div className="text-center text-gray-600 dark:text-gray-400 py-12">
          <p>No projects to display yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
