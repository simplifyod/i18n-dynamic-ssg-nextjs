import { Inter } from 'next/font/google';
import { TPageLayoutProps } from '@/app/interfaces/common.interfaces';

import '../../globals.css';
import { LANGUAGES } from '@/app/constants/languages.constants';
import { getDictionary } from '@/app/(languages)/[locale]/dictionaries';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, params }: TPageLayoutProps) {
    return (
        <html lang={params.locale ?? 'en'}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}

export async function generateMetadata({ params }: TPageLayoutProps) {
    const lang = params.locale;
    const dict = await getDictionary(lang);

    return {
        title: `${dict.meta.title}`,
        description: `${dict.meta.description}`,
        keywords: `${dict.meta.keywords}`,
        metadataBase: new URL('https://{domainNameHere}'),
        alternates: {
            canonical: '/',
            languages: {
                en: '/en',
                es: '/es',
                pt: '/pt',
            },
        },
        robots: {
            index: true,
            follow: true,
        },
        viewport: {
            width: 'device-width',
            initialScale: 1,
            maximumScale: 1,
        },
        verification: {
            google: 'google',
            yandex: 'yandex',
            yahoo: 'yahoo',
        },
    };
}

export async function generateStaticParams() {
    return LANGUAGES.map(lang => ({
        locale: lang,
    }));
}

