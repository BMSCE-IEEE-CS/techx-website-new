// import localFont from "next/font/local";
// const spacex = localFont({ src: "../app/SpaceX.ttf" });

// export default function Home() {
//   return (
//     <div className="flex flex-col w-full min-h-screen bg-hero items-center justify-center bg-no-repeat bg-cover">
//       <div>
//         <div>
//           <p className="text-2xl">IEEE CS</p>
//           <h1 className={`${spacex.className} text-6xl`}>
//             Tech<span>X</span>
//           </h1>
//           <h1></h1>
//         </div>
//       </div>
//     </div>
//   );
// }

import Navbar from "@/components/navbar";
import localFont from "next/font/local";
import Link from "next/link";
const spacex = localFont({ src: "../app/SpaceX.ttf" });

export default function Home() {
  return (
    <div className="bg-hero bg-no-repeat bg-cover flex flex-col w-full min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-tr from-mOrange via-black to-black opacity-70 z-0"></div>
      <div className="relative z-10 flex flex-col ">
        <Navbar />
        <div className="relative flex flex-col items-center bg-no-repeat bg-cover">
          <div className="flex flex-col mt-52">
            <div>
              <p className="text-3xl text-mOrange font-bold">IEEE CS</p>
              <h1 className={`${spacex.className} text-7xl text-white`}>
                Tech<span>X</span>
              </h1>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="#"
                className="bg-mOrange px-4 text-3xl py-2 border-2 border-mOrange hover:bg-black rounded-tr-3xl rounded-bl-3xl transition-all duration-150 ease-in"
                passHref
                target="_blank"
              >
                Purchase Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
