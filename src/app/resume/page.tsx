import Footer from "../Components/footer"
import Header from "../Components/header"
import MyTabs from "../Components/MyTabs"


function Page() {
    return (
      <div className=' bg-backgroundcolor  ' >
        <Header />
        
        <MyTabs />

        <Footer />
      </div>
    )
  }
  
  export default Page