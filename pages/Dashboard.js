import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { useEffect,useState } from "react";
import {ethers} from "ethers"
import { ThirdwebSDK } from "@3rdweb/sdk";

const sdk=new ThirdwebSDK(
    new ethers.Wallet(
        process.env.NEXT_PUBLIC_METAMASK_KEY,
        ethers.getDefaultProvider(
            "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
        )
    )
)

const Dashboard=({address})=>{
    const [sanityTokens,setSanityTokens]=useState([])
    const [thirdWebTokens,setThirdWebTokens]=useState([])
    useEffect(()=>{
        const getSanityandThirdWebTokens=async()=>{
                const coins= await fetch("https://jgufmnoy.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22coins%22%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contactAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D")
                const sanityTokens= (await coins.json()).result
                console.log(sanityTokens);
                setSanityTokens(sanityTokens)
                setThirdWebTokens(
                    sanityTokens.map(token=>sdk.getTokenModule(token.contactAddress))
                )
        }
        return getSanityandThirdWebTokens()
    },[])
    console.log("Sanity-",sanityTokens);
    console.log("ThirdWeb-",thirdWebTokens);
    return(
        <Wrapper>
            <Sidebar/>
            <MainContainer>
                <Header 
                sanityTokens={sanityTokens}
                thirdWebTokens={thirdWebTokens}
                walletAddress={address} />
                <Main 
                sanityTokens={sanityTokens}
                thirdWebTokens={thirdWebTokens}
                walletAddress={address}  />
            </MainContainer>
        </Wrapper>
    )
}
export default Dashboard;

const Wrapper = styled.div `
 display: flex;
 height: 100vh;
 width: 100vw;
 background-color: black;
 color: white;
 overflow-y: hidden;
 :: -webkit-scrollbar{
     display: none;
 }
`


const MainContainer = styled.div`
 flex: 1;
`