export  function FindRoutes(state){

 
    if(state.routes){

        if(state.routes[3]){
            if(state.routes[3].state){
                if(state.routes[3].state.routes){
                            if(state.routes[3].state.routes[1]){
                                if(state.routes[3].state.routes[1].name){
                                    if(state.routes[3].state.routes[1].name==="Register"){
                                        return true
                                    }
                                    if(state.routes[3].state.routes[1].name==="Login"){
                                        return true
                                    }
                                    if(state.routes[3].state.routes[1].name==="Confirm"){
                                        return true
                                    } if(state.routes[3].state.routes[1].name==="Forgot"){
                                        return true
                                    }
                                }
                               
                              
                              
                                if(state.routes[3].state.routes[0].state)
                                      if(state.routes[3].state.routes[0].state.routes){
                                    
                                            if(state.routes[3].state.routes[0].state.routes[1]){
                                                
                                                if(state.routes[3].state.routes[0].state.routes[1].name==='subprofile'){
                                                        return true
                                                }
                                                if(state.routes[3].state.routes[0].state.routes[1].name==='store'){
                                                    return true
                                                }
                                                if(state.routes[3].state.routes[0].state.routes[1].name==='Register'){
                                                    return true
                                                }
                                            
                                            }
                                      }
                            }
                }
            }
        }
    }
return false
}

