import Footer from "../components/Footer"
import Header from "../components/Header"

export const Layout =({children})=>{
    return(
        <div>
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}