import React from "react";

const Footer = () => {
  return (
    <footer className="flex shadow m-4 justify-between items-center">
      <div className="flex flex-col">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 animate-spin"
            fill="#22c55e"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M17.313 5.998c.242.216.473.445.687.688l-1.165 1.166-.332-.356-.356-.331 1.166-1.167zm-2.653-1.56c.308.107.608.234.897.378l-.643 1.52c-.167-.088-.341-.168-.52-.239l-.373-.14.639-1.519zm-3.146-.438h.973v1.648l-.487-.018-.486.019v-1.649zm-2.125.419l.631 1.524-.416.153c-.165.067-.326.141-.483.22l-.63-1.524c.288-.142.59-.267.898-.373zm.716 6.829l1.045-1.045-1.463-1.466c.652-.464 1.451-.738 2.313-.738 2.21 0 4 1.791 4 4.001 0 2.209-1.79 3.999-4 3.999s-4-1.79-4-3.999c0-.813.242-1.567.658-2.199l1.447 1.447zm-3.418-5.25l1.167 1.166-.357.331-.332.357-1.165-1.166c.214-.243.445-.472.687-.688zm-1.871 2.443l1.52.641c-.087.168-.168.343-.238.52l-.14.376-1.52-.641c.109-.309.235-.608.378-.896zm-.816 3.07h1.649l-.019.485.019.486h-1.649v-.971zm.42 3.094l1.524-.63.153.417.219.48-1.524.632c-.141-.289-.266-.59-.372-.899zm2.13 3.527l-.688-.687 1.303-1.304.332.356.356.331-1.303 1.304zm2.79 1.43c-.308-.108-.608-.234-.897-.379l.643-1.52c.167.088.341.169.52.239l.375.14-.641 1.52zm3.146.438h-.973v-1.649l.486.019.486-.019v1.649zm2.124-.42l-.63-1.525.415-.152c.165-.066.326-.14.483-.22l.63 1.523c-.287.143-.589.268-.898.374zm2.703-1.586l-1.167-1.165.356-.331.332-.356 1.166 1.165c-.214.244-.445.473-.687.687zm1.871-2.441l-1.521-.643c.087-.168.169-.341.239-.518l.14-.378 1.52.642c-.109.307-.235.608-.378.897zm.816-3.071h-1.649l.019-.486-.019-.485h1.649v.971zm-1.944-2.464l-.153-.416-.219-.483 1.524-.629c.141.288.266.59.372.897l-1.524.631zm-6.056-8.018c5.514 0 10 4.486 10 10s-4.486 9.999-10 9.999-10-4.485-10-9.999 4.486-10 10-10zm0-2c-6.632 0-12 5.366-12 12 0 6.631 5.367 11.999 12 11.999 6.632 0 12-5.366 12-11.999 0-6.632-5.367-12-12-12z" />
          </svg>
          <span className="text-green-500 font-heading font-bold mx-1">
            IPFS VAULT
          </span>
        </div>
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
