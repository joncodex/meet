import style from './/AddMeetings.module.css'
import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'

function AddMeetings () {
    let meetingTitle = useRef();
    let meetingDesc = useRef();
    let meetingImage = useRef();
    let meetingDate = useRef();
    let navigate = useNavigate();


    function submit (event) {
        event.preventDefault();
        let title =  meetingTitle.current.value;
        let image = meetingImage.current.value;
        let date = meetingDate.current.value;
        let desc = meetingDesc.current.value;

        let meetingData= {
        title : title,
        image : image,
        date : date,
        desc : desc
        }

        fetch ('https://aid-meet-default-rtdb.firebaseio.com/meetings.json', {
            method : 'post',
            body : JSON.stringify(meetingData),
        }).then (() => {
            navigate ('/')
        });

        
        
    }
    return (
        <div className={style.addmeeting}>
            <form>
                <h2 className={style.addmeetingheading}>Add New Meeting</h2>
                <p className={style.headingdetail}>Provide the details of your New Meeting</p>
                <input className={style.meetinginput} placeholder="Enter the Meeting Title" ref = {meetingTitle} />
                <input className={style.meetinginput} placeholder="Enter the image Keyword" ref = {meetingImage} />
                <input className={style.meetinginput} type="datetime-local" ref={meetingDate}/> 
                <textarea className={style.meetinginput} rows={4} placeholder="Enter the details" ref={meetingDesc}> </textarea>
                <button type='submit' onClick={submit} className={style.meetingbtn}>Add Meeting</button>
            </form>

        </div>
    )
}

export default AddMeetings;