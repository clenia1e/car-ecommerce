import React from "react";
// import { useRouter } from "next/router";
import Styles from "./Home.module.css" 
import NavBar from "../../components/NavBar";


const Home = () => 
{
    // const router = useRouter()
    // const  home = router.query
    // console.log(params)

    // as is how next know whats this parameter id is 
    //       <Link href="/notes/id" as={ `/notes/${note.id}1`}> bghjfgvb </Link> 

    return (
      <>
      <NavBar/>
      <div className={Styles.test}>  home </div>   
      </>
    )
}

export default Home; 