const Pages = ({ params }: { params: { locale: string } }) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>
                Page Layout: Static Generated Component which has all static languages parts. Language: {params.locale}
            </h1>
            <hr />
            <div>App Component here</div>
        </div>
    );
};

export default Pages;

