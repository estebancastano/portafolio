import Text from '@/components/atoms/footer-text/index'
import { Mail } from 'lucide-react'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="text-white flex flex-col items-center gap-3">
      <div className="flex gap-4">
        <a href="https://github.com/estebancastano" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-white/70 transition" size={24}/>
        </a>
        <a href="https://linkedin.com/in/estebanandresc" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-white/70 transition" size={24}/>
        </a>
        <a href="mailto:estebanacastano123@gmail.com">
          <Mail className="hover:text-white/70 transition" />
        </a>
      </div>
      <div className="text-sm text-white/80">
        <Text text="© 2025 Esteban Castaño. Todos los derechos reservados." />
      </div>
    </div>
  )
}

export default Footer
