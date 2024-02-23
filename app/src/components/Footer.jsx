import React from "react";

const Footer = () => {
  return (
    <footer class="flex shadow m-4 justify-between items-center">
      <div className="flex flex-col">
        <span className="text-green-400 font-heading font-bold">
          IPFS VAULT
        </span>
        <span className="text-xs text-white">© Copyright 2024</span>
      </div>

      <div className="flex flex-col text-xs text-white">
        <div className="flex">
          <span>Using </span>
          <img
            className="h-4 w-4 ml-1"
            src="https://ipfs.tech/_nuxt/ipfs-logo.a313bcee.svg"
            alt="particle_logo"
          />
          <a
            href="https://ipfs.tech/"
            className="text-teal-500 mx-1 font-semibold"
          >
            IPFS
          </a>
        </div>
        <div className="flex">
          <span>Powered By </span>
          <img
            className="h-4 w-4 ml-1"
            src="https://www.gitbook.com/cdn-cgi/image/width=36,dpr=2,height=36,fit=contain,format=auto/https%3A%2F%2F3890160045-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FF6uqWeUD7kwCZqSpBtVz%252Ficon%252FQOCttrIxed6mmev66hS2%252Flogo5.png%3Falt%3Dmedia%26token%3De6470b8b-906b-4da8-aa79-619ee168b2ea"
            alt="particle_logo"
          />
          <a
            href="https://particle.network"
            className="text-purple-500 mx-1 font-semibold"
          >
            Particle Network
          </a>
        </div>
      </div>

      <div className="flex text-xs text-white">
        <span>Made with ❤️ by</span>
        <a
          href="https://github.com/shivam1608"
          className="text-green-500 mx-1 font-semibold"
        >
          Shivzee
        </a>
      </div>
    </footer>
  );
};

export default Footer;
