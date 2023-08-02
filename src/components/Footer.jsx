import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="flex gap-1 text-[8px] text-white text-center">
          © 2023{" "}
          <p className="hover:underline cursor-pointer">
            Batik Laras Purwokerto
          </p>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
