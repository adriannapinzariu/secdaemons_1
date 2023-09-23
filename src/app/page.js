import Image from 'next/image';
import styles from './styles/Home.module.css';




export default function Home() {
    
    const borderColor = '#D4000A';
    const borderThickness = '5px';

    return (
        

        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
            <div className="flex items-center justify-center">
                <Image src="/brand/logo.png" alt="Logo" className="max-w-full h-auto" width={500} height={500} />
            </div>
            <div
                className="relative flex items-center justify-center bg-transparent mt-5 w-full h-16 border-blue-demon-red max-w-lg"
                style={{
                    borderWidth: borderThickness,
                    borderColor: borderColor,
                    //backgroundImage: `url('./bar.svg')`,
                    //backgroundRepeat: 'repeat-x'
                }}
            >
                {/* Loading Bar positioned inside the red box */}
                <Image
        src="/bar.svg"
        alt="Bar"
        layout="fixed"
        width={16}
        height={16}
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
    />
    <Image
        src="/bar.svg"
        alt="Bar"
        layout="fixed"
        width={16}
        height={16}
        className="absolute left-[5.5%] top-1/2 transform -translate-y-1/2"  // Adjusted left position
    />
            </div>
        </main>
    );
}


