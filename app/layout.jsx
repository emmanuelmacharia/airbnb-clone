import '@/assets/styles/globals.css'

export const metadata =  {
    title: 'Airbnb Next clone',
    keywords: 'rental property real estate',
    description: 'find a perfect rental property'
}

const RootLayout = ( {children} ) => {
    return ( <html>
        <body>
            <main> {children} </main>
        </body>
    </html> );
}
 
export default RootLayout;