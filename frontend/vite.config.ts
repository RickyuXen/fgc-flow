import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function fgcFlowTrailingSlashRedirect(): Plugin {
  return {
    name: 'fgc-flow-trailing-slash-redirect',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const [pathname, search = ''] = (req.url ?? '').split('?')
        const query = search ? `?${search}` : ''

        if (pathname === '/fgc-flow') {
          res.writeHead(301, { Location: `/fgc-flow/${query}` })
          res.end()
          return
        }

        next()
      })
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const redirectScript = `<script>
if (location.pathname.endsWith("/fgc-flow")) {
  location.replace(location.pathname + "/" + location.search + location.hash);
}
</script>`

        return html.replace('<head>', `<head>\n    ${redirectScript}`)
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), fgcFlowTrailingSlashRedirect()],
  base: "/fgc-flow/",
  server: {
    watch: {
      usePolling: true
    },
    proxy: {
      "/api": "http://localhost:3001"
    }
  }
})
