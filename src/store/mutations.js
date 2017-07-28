const GET_DATA = 'GET_DATA'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_USER_INFORM = 'GET_USER_INFORM'
const GET_SCORE='GET_SCORE'
export default {
	[GET_DATA](state, payload) {
		if (payload.res.httpStatusCode == 200) {
			state.itemDetail = payload.res.topiclist;
		}
	},

	[GET_USER_INFORM](state, payload) {
		state.user_id = payload.res.users_id;
	},

	[ADD_ITEMNUM](state, payload) {
	
		state.itemNum += payload.num;
	},

	[REMBER_ANSWER](state, payload) {
		state.answerid[state.itemNum-1]={};
		state.answerid[state.itemNum-1]["chooseId"] = payload.chooseId;
		state.answerid[state.itemNum-1]["chooseIndex"] = payload.chooseIndex;
	},

	[REMBER_TIME](state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},

	[INITIALIZE_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
	},
	[GET_SCORE](state){
		let length=state.answerid.length;
		for(let i=0;i<length;i++){

			let stateAns=state.itemDetail[i].topic_answer;
			let chooseIndex=state.answerid[i].chooseIndex;
			console.log(stateAns[chooseIndex])
			if(stateAns[chooseIndex].is_standard_answer){
				state.score+=50;
			}
		}
	}
}