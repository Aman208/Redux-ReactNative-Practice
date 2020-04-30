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
  ],

  following: [],
};

function followerReducer(state = intialState, action) {
  switch (action.type) {
   
    case "FOLLOW_HIM":
      return {
        ...state,
        following: [...state.following, action.user],
      };
    case "UNFOLLOW_HIM":
      return {
        ...state,
        following: state.following.filter((item) => item !== action.userid),
      };
    case "INC" : {
      return {...state , counter : counter+1}
    }  
  }
  return state;
}

export default followerReducer;
