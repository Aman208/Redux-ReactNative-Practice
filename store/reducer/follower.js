var intialState = {
  follower: [
    { id: "f1", name: "Aman Keshri", userid: "aman208" },
    { id: "f2", name: "Niraj Oswal", userid: "niraj123" },
  ],
  following: [],
  counter: 0,
};

function followerReducer(state = intialState, action) {
  switch (action.type) {
    case "BLOCK":
      return {
        follower: state.follower.filter((item) => item !== action.userid),
      };
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
