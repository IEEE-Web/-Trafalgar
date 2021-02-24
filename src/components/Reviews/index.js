import React ,{useEffect,useState} from "react"
import profileImg from "./profileImage.jpeg"
import axios from "axios"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
export const Reviews =()=>{
    const [reviews,setReviews]=useState([])
    const [review,setReview]=useState(reviews[0])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            setReviews(res.data)

        })
    },[reviews])
    return(
    <div  className="flex justify-center ">
        <div className="bg-gradient-to-r from-blue-300 to-blue-500 w-3/4 rounded-2xl" style={{height:"425px"}}>
        <h2 className="text-center mt-16 text-3xl font-bold text-white">What our customer are saying</h2>
        <div className="flex justify-center mt-8">
            <hr className="h-4 w-16 "/>
        </div>
    
        <div className="grid grid-cols-2">
            <div>
                <div  className="ml-32 flex items-center">
                    <img src={profileImg} alt="" className="rounded-full w-32 border-2 border-white	 h-32"/>
                    <div className="ml-8">
                        <h3 className="font-bold text-xl">Edward Newgate</h3>
                        <p>Founder Circle</p>
                    </div>
                </div>
            </div>
                <div className="flex justify-center text-base w-3/4">
                    <p>
                        Eiusmod incididunt elit magna aliqua proident aute. Voluptate mollit cupidatat amet irure proident dolore anim cupidatat officia ipsum id quis. Ipsum aliquip ipsum consectetur adipisicing culpa sit ipsum commodo anim est. Labore dolor ea sunt quis aliqua. Velit laboris id eu adipisicing. Velit aliqua labore velit cillum non reprehenderit eiusmod aliqua culpa labore aute dolor officia.
                    </p>
                </div>
            <div>
            </div>
        </div>
          
                <div className="flex justify-center mt-12">
                    <button className="w-2 h-2 rounded-full bg-white focus:outline-none mr-1">

                    </button>
                    <button className="w-2 h-2 rounded-full bg-white focus:outline-none mr-1">

                    </button>
                    <button className="w-2 h-2 rounded-full bg-white focus:outline-none mr-1">

                    </button>
                    
                    
                </div>
        </div>
    </div>
    )
}