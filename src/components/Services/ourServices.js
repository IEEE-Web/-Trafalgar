import React, { Component } from 'react';
import axios from 'axios';
class OurServices extends Component {
    state = { 
        isLoaded: false,
        error: null,
        ourservices: []
     }
    componentDidMount(){//fetch data form json server
        axios.get("http://localhost:3000/services")
         .then(response =>{
            console.log(response.data)
            this.setState({//updeate the state
                isLoaded: true,
                ourservices: response.data
            })
        },
        (error)=>{
            this.setState({
                isLoaded: true,
                error
            })
        }
        )
    }

    render() { 
        const {isLoaded, error, ourservices} = this.state;
        if(error){//handling error
        return <div>Error: {error.message}</div>

        }else if(!isLoaded){//handling loading
            return <div className='font-extrabold text-center shadow-lg p-10 border '>Loading...</div>

        }else{
        return (//maping to show our data
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-6'>
                {ourservices.map(serviceItem =>{
                    return(
                        <div key={serviceItem.service_id} className='p-6 rounded-xl overflow-hidden shadow-lg hover:shadow-xl bg-white grid grid-rows-2 transition ease-out duration-500'>
                            <img src= {serviceItem.service_icon} className='' alt='service icon '/>
                            <div>
                            <p className='font-bold py-4'>{serviceItem.service_title}</p>
                            <p className='font-light text-gray-500'>{serviceItem.service_description}</p>
                            </div>
                        </div>
                    
                    )
                })}
            </div>
          );
    }
}
}
 
export default OurServices;