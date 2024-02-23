import React from "react";
import nodata from "../assets/nodata.svg";

const Files = ({ files }) => {
  return (
    <section
      style={{
        scale: files.length === 0 ? "0" : "1",
        position: files.length === 0 ? "absolute" : "",
      }}
      className="flex flex-col items-center bg-[#080808] overflow-y-scroll no-scrollbar duration-500"
    >
      {/* <img className="h-52 my-5" src={nodata} alt="empty" />
      <span className="text-white my-5">No files to display.</span> */}

      <div className="grid grid-cols-2 gap-5 h-56 w-full">
        <div className="flex p-4 justify-between w-full text-white text-sm">
          <div className="flex flex-col w-full">
            <span className="font-semibold text-green-500">Filename</span>
            <span className="text-xs">5MiB</span>
          </div>
          <div className="flex">
            <code className="text-xs">
              {JSON.stringify(
                {
                  // v1 cid: @see https://docs.ipfs.io/concepts/content-addressing/#identifier-formats
                  cid: "bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi",
                  // IPFS format address
                  ipfs: "ipfs://bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi",
                  // Preferred url with CDN cache for better performance
                  fastUrl:
                    "https://ipfs.particle.network/bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi",
                  // Preferred url
                  ipfsUrl:
                    "https://bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi.ipfs.nftstorage.link",
                  // Other working urls: @see https://ipfs.github.io/public-gateway-checker/
                  ipfsUrls: [
                    "https://bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi.ipfs.nftstorage.link",
                    "https://bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi.ipfs.dweb.link",
                    "https://bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi.ipfs.infura-ipfs.io",
                    "https://bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi.ipfs.4everland.io",
                    "https://bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi.ipfs.cf-ipfs.com",
                    "https://bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi.ipfs.ipfs-gateway.cloud",
                    "https://bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi.ipfs.storry.tv",
                    "https://ipfs.io/ipfs/bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi",
                    "https://gateway.ipfs.io/ipfs/bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi",
                    "https://cloudflare-ipfs.com/ipfs/bafybeidhaeimld7itiwr4v4jpxiscbkrxioapmawty7mhucp5kcdywgcvi",
                  ],
                },
                null,
                5
              )}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Files;
