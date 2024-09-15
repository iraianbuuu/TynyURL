import React from 'react'
import Marquee from "react-fast-marquee";
import GithubIcon from "../assets/github.svg";
import ReactIcon from "../assets/react.svg";
import Shadcn from "../assets/shadcn.svg";
import SupabaseIcon from "../assets/supabase.svg";
import TailwindIcon from "../assets/tailwindcss.svg";
import Vercel from "../assets/vercel.svg";
import Vite from "../assets/vite.svg";
import EsLint from "../assets/eslint.svg";
import Docker from "../assets/docker.svg";
import Kubernetes from "../assets/kubernetes.svg";
import GitIcon from "../assets/git.svg";
const Footer = () => {
  return (
    <div>
         <Marquee speed={50} gradient={false}>
        <div className="flex gap-12 my-5">
          <a
            href="https://git.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitIcon} alt="Git" className="h-20" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="Github" className="h-20" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={ReactIcon} alt="React" className="h-20" />
          </a>
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Shadcn} alt="Shadcn" className="h-20" />
          </a>
          <a
            href="https://supabase.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={SupabaseIcon} alt="Supabase" className="h-20" />
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TailwindIcon} alt="Tailwind" className="h-20" />
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Vercel} alt="Vercel" className="h-20" />
          </a>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Vite} alt="Vite" className="h-20" />
          </a>
          <a
            href="https://eslint.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={EsLint} alt="ESLint" className="h-20" />
          </a>
          <a
            href="https://www.docker.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Docker} alt="Docker" className="h-20" />
          </a>
          <a
            href="https://kubernetes.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Kubernetes} alt="Kubernetes" className="h-20" />
          </a>
        </div>
      </Marquee>
    </div>
  )
}

export default Footer