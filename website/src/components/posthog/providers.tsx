'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only initialize PostHog in production
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_ENV === 'production') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        ui_host: 'https://eu.posthog.com',
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        capture_pageleave: true,
      })
    }
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}

