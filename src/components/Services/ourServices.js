import React, { Component } from 'react';
import axios from 'axios';
class OurServices extends Component {
    state = { 
        services: []
     }
    componentDidMount(){//fetch data form json server
        axios.get("http://localhost:3000/services")
         .then(response =>{
            console.log(response.data)
            this.setState({//updeate the state
                services: response.data
            })
        })
    }
    render() { 
        return (//maping to show our data
            <div className='grid lg:grid-cols-3 gap-8 mt-6'>
                {this.state.services.map(serviceItem =>{
                    return(
                        <div key={serviceItem.service_id} className='p-6 rounded-xl overflow-hidden shadow-lg hover:shadow-xl bg-white grid grid-rows-2 transition ease-out duration-500'>
                            <img src= {serviceItem.service_icon} className='' alt='service icon '/>
                            <div>
                            <h3 className='font-bold py-4'>{serviceItem.service_title}</h3>
                            <p className='font-light text-gray-500'>{serviceItem.service_description}</p>
                            </div>
                        </div>
                    
                    )
                })}
            </div>
          );
    }
}
 
export default OurServices;