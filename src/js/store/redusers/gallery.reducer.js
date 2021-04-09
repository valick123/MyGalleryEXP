const initialState = {
    imgList:[],
    currentImgs:[]
}
export const galleryReducer = (state = initialState, action) =>{
    switch(action.type){
        case "GET_IMG_LIST":{
            return{
                ...state,
                imgList:[...action.payload],
                currentImgs:[...action.payload]
            }
        }
        case "RESET_DATA":{
            return{
                ...state,
                currentImgs:[...state.imgList]
            }
        }
        case "SEARCH_REQUEST":{
            let regexp = new RegExp(`${action.payload}`,'gi');
            return{
                ...state,
                currentImgs:[...state.imgList.filter(item=> item.user.first_name.search(regexp) !== -1 ?true:false)]
            }
        }
        case "SORT_DATA":{
            return{
                ...state,
                currentImgs:[...state.currentImgs.sort((first, second) =>{
                    switch(action.payload){
                        case "Most Popular":{
                            if(first.likes > second.likes) return -1;
                            if(first.likes < second.likes) return 1;
                            if(first.likes === second.likes) return 0;
                            break;
                        }
                        case "Oldest":{
                            let firstDate = new Date(first.created_at).getTime();
                            let secondDate = new Date(second.created_at).getTime();
                            if(firstDate > secondDate) return 1;
                            if(firstDate < secondDate) return -1;
                            if(firstDate === secondDate) return 0;
                            break;
                        }
                        case "Latest":{
                            let firstDate = new Date(first.created_at).getTime();
                            let secondDate = new Date(second.created_at).getTime();
                            if(firstDate > secondDate) return -1;
                            if(firstDate < secondDate) return 1;
                            if(firstDate === secondDate) return 0;
                            break;
                        }
                        case "Lagest":{
                            let firstArea = first.width * first.height;
                            let secondArea = second.width * second.height;
                            if(firstArea > secondArea) return -1;
                            if(firstArea < secondArea) return 1;
                            if(firstArea === secondArea) return 0;
                            break;
                        }
                        case "Smallest":{
                            let firstArea = first.width * first.height;
                            let secondArea = second.width * second.height;
                            if(firstArea > secondArea) return 1;
                            if(firstArea < secondArea) return -1;
                            if(firstArea === secondArea) return 0;
                            break;
                        }
                        case "A-Z":{
                            if(first.user.first_name.toLowerCase() > second.user.first_name.toLowerCase()) return 1;
                            if(first.user.first_name.toLowerCase() < second.user.first_name.toLowerCase()) return -1;
                            if(first.user.first_name.toLowerCase() === second.user.first_name.toLowerCase()) return 0;
                            break;
                        }
                        case "Z-A":{
                            if(first.user.first_name.toLowerCase() > second.user.first_name.toLowerCase()) return -1;
                            if(first.user.first_name.toLowerCase() < second.user.first_name.toLowerCase()) return 1;
                            if(first.user.first_name.toLowerCase() === second.user.first_name.toLowerCase()) return 0;
                            break;
                        }
                        default:{
                            return 0
                        }
                    }
                })]
            }
        }
        default:{
            return state;
        }
    }
}