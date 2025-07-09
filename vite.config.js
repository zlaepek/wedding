import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포를 위한 설정
  // 리포지토리 이름으로 base 경로 설정 필요
  // 예: base: '/repository-name/',
  // 루트 도메인으로 배포시에는 base: '/' 또는 제거
})
