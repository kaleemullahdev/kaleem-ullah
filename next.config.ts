import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

const nextConfig = (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const nextConfig = {
    assetPrefix: isDev ? undefined : '/kaleem-ullah',
  }
  return nextConfig
}

export default nextConfig
