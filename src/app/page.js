import Image from 'next/image'

export default function Home() {
  const borderColor = "#D4000A";
  const borderThickness = "5px";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">

      <div className="flex items-center justify-center">1
        <Image 
          src="/logo.png" 
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
          className="flex items-center justify-center bg-transparent mt-5"
          style={{
            borderColor: borderColor,
            borderWidth: borderThickness,
            width: '75vh',  
            height: '7vh',  
            marginBottom: '7.5%', 
          }}
        ></div>
    </main>
  )
}