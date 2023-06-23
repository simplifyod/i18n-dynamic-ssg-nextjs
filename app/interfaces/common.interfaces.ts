export type TLanguages = string[];
export type TPageParams = {};

export type TPageLayoutProps = {
    children: React.ReactNode;
    params: {
        locale: 'en' | 'es' | 'pt';
    };
};

