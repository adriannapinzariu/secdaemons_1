import Image from 'next/image'

export default function Home() {
  const borderColor = "#D4000A";
  const borderThickness = "5px";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className="flex items-center justify-center">
      <Image 
          src="/brand/logo.png"
          alt="Logo"
          className="max-w-full h-auto"
          width={500}   
          height={500}
        />
        <Image 
          src="/bar.svg"
          alt="Bar"
          layout="fixed"
          width={11}   
          height={11}
          className="absolute left-0"
          style={{ top: '71.5%', left: '26.5%' }}
        />
      </div>           
      <div 
          className="flex items-center justify-center bg-transparent mt-5 w-full h-16 border-blue-demon-red"
          style={{
            borderWidth: borderThickness,
          }}
        ></div>
    </main>
  )
}
