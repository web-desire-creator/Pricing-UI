import Image from "next/image"
export default function Home() {
  return (
    <>
    <div className="bg-purple-800 text-white text-center pt-24 pb-56 font-bold text-5xl">
Simple Pricing for Business
    </div>
    <div className="flex flex-row  mb-14 items-center justify-center -mt-32">
    <div className="bg-purple-300 text-center w-96 h-80 pt-14 rounded-l-2xl">
<h1 className="font-bold text-2xl">Premium PRO</h1> <br />
<h1 className="font-bold text-6xl">$329</h1><br />
billed just once <br />
<button className="bg-purple-800 px-20 py-3 mt-3 rounded-md text-white font-bold text-2xl shadow-lg">Get Started</button>
    </div>
    <div className="bg-white text-black max-w-xl h-80 px-12 rounded-r-2xl shadow-lg">
   <p className="pt-12  pb-6 text-lg">Access these features when you get this pricing package for your business.</p>
    <ul className="list-disc">
      <li className="pb-4 px-10 text-lg">International calling and messaging API</li>
      <li className="pb-4 px-10 text-lg">Additional phone numbers</li>
      <li className="pb-4 px-10 text-lg">Automated messages via Zapier</li>
      <li className="pb-4 px-10 text-lg">24/7 support and consulting</li>
    </ul>
    </div>
    </div>
    <div className="flex flex-row justify-center mb-40">
  
    <div className="flex flex-row">
    <Image 
    src="Group.svg" width={50} height={50} alt="logo"
    />
    <p className="ml-6 font-extrabold">30 days money back <br />Guarantee</p>
    </div>
    <div className="flex flex-row">
    <Image className="ml-10"
    src="Group1.svg" width={50} height={50} alt="logo"
    />
    <p className="ml-6 font-extrabold">No setup fees <br />
100% hassle-free</p>
    </div>
    <div className="flex flex-row">
    <Image className="ml-10"
    src="Group2.svg" width={50} height={50} alt="logo"
    />
    <p className="ml-6 font-extrabold">No monthly subscription <br />
Pay once and for all</p>
    </div>
    </div>
    </>
  )
}
