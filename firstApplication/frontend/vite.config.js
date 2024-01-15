import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      //* by using this I have defined that no matter from which origin (URL) the request for "/api" or "/api/v1/anything" is sent we just have taken a mask (server's origin) on our original origin so that our request looks like that is coming from that masked origin and it is nedded as well because we haven't provided any kind of origin in our any request which we want to be served by the server. 
      '/api':{
        target:'http://localhost:3020'
      }
    }
  },
  plugins: [react()],
})
