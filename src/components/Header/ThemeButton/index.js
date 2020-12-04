import React,{useState} from "react"

export const Theme =()=>{
    const [dark,setDark]=useState(false)

    return(
        <button onClick={()=>setDark(!dark)}>
            <svg height="24" viewBox="0 0 58 58" width="24" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="026---Night-Mode" fill-rule="nonzero"><circle id="Oval" cx="29" cy="29" fill="#35495e" r="29"/><circle id="Oval" cx="29" cy="29" fill="#3f5c6c" r="25"/><path id="Shape" d="m48.967 30.162c-.6634469 10.3674946-9.1087931 18.5264624-19.493 18.832-4.4981158.1131944-8.9017535-1.3018073-12.492-4.014-.1721722-.1291291-.2423987-.3539428-.1743416-.5581139.068057-.2041711.2591264-.3418861.4743416-.3418861 8.286-.019 18.718-8.09 18.718-20.08.00638-5.2777562-2.0817598-10.3423763-5.806-14.082-.1455065-.14949461-.1829039-.37361849-.0938183-.56225718.0890855-.18863869.2859287-.30214131.4938183-.28474282 10.8417073.86237552 19.0051163 10.2334341 18.373 21.091z" fill="#f3d55b"/><path id="Shape" d="m19.559 15.362 1.986 4.223c.0871814.1886803.2627155.321456.468.354l4.455.68c.2363562.0430442.4295986.2131349.5022944.4421161.0726957.2289811.012951.4793889-.1552944.6508839l-3.235 3.309c-.1449656.1497546-.2102746.3594112-.176.565l.762 4.662c.0464074.2363637-.0469198.4783884-.2400043.6224017-.1930844.1440133-.4516721.1644665-.6649957.0525983l-3.969-2.189c-.1815324-.1011298-.4024676-.1011298-.584 0l-3.969 2.189c-.2133236.1118682-.4719113.091415-.6649957-.0525983-.1930845-.1440133-.2864117-.386038-.2400043-.6224017l.762-4.662c.0342746-.2055888-.0310344-.4152454-.176-.565l-3.235-3.309c-.1682454-.171495-.2279901-.4219028-.1552944-.6508839.0726958-.2289812.2659382-.3990719.5022944-.4421161l4.455-.68c.2052845-.032544.3808186-.1653197.468-.354l1.986-4.223c.0983595-.2207047.3173698-.3628755.559-.3628755s.4606405.1421708.559.3628755z" fill="#f0c419"/></g></g></svg>

        </button>
    )
}