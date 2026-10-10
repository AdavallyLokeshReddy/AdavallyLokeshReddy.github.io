import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root path works for a user site (<username>.github.io). For a project repo, build with VITE_BASE=/<repo>/
export default defineConfig({ base: process.env.VITE_BASE || '/', plugins: [react()] })
