import * as types from '../constants/meeting.constant'
import * as MeetingpApi from "../../services/meeting.services"

export function loadMeetingSuccess(meeting) {
    debugger
    return { type: types.LOAD_MEETING_SUCCESS, meeting }
  }

  export function getAllMeetings() {
    return function (dispatch) {
      debugger
      return MeetingpApi
        .getMeetings()
        .then(meeting => {
          dispatch(loadMeetingSuccess(meeting));
        })
        .catch(error => {
          throw error();
        });
    }
}




