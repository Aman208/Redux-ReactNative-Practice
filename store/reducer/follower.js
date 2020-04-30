var intialState = {
  follower: [
    { id: "f1",
      name: "Amy Farha",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
    },
    { id: "f2",
      name: "Chris Jackson",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
    { 
      id: "f3",
      name: "Aman Keshri",
      avatar_url:"https://images.pexels.com/photos/462030/pexels-photo-462030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,
      subtitle: "Principal",
    } ,
    { id: "f4",
    name: "Dhruv Bhaat",
      avatar_url:"https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" ,
      subtitle:"Director"
    }

  ],

  following: [

    {id: "f5",
    name: "Niraj Singh",
      avatar_url:"https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg" ,
      subtitle:"Employees"
  }

  ],
};

function followerReducer(state = intialState, action) {
  switch (action.type) {
   
    case "FOLLOW":
      return {
        ...state,
        following: [...state.following, state.follower[action.userid] ],
      };
    case "UNFOLLOW":
      return {
        ...state,
        following: state.following.filter((item) => item.id !== action.userid),
      };
   
  }
  return state;
}

export default followerReducer;
