import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';
import { Inter, Source_Code_Pro } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const source_code_pro = Source_Code_Pro({
    subsets: ['latin'],
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={source_code_pro.className}>
                <Navbar />
                
                <Footer />
            </body>
        </html>
    );
}
