import React from "react";

function Footer() {
  return (
    <> 
    
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; Made in 2024 15th Aug
              </p>
              <p className="text-sm">Create By Rupam Das</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;