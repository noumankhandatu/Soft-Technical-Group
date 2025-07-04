"use client"

import type React from "react"

import { useEffect } from "react"

export default function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    // Observe all scroll animation elements
    const elements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale",
    )
    elements.forEach((el) => observer.observe(el))

    // Stagger animations for grid items
    const staggerElements = document.querySelectorAll(".stagger-animate")
    staggerElements.forEach((el, index) => {
      el.classList.add(`stagger-${Math.min(index + 1, 8)}`)
    })

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return <>{children}</>
}
