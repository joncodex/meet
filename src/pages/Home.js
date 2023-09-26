import {useState} from 'react'
import style from './Home.module.css'
import Meetingcard from '../component/Meetingcard';
import { useEffect } from 'react';


function Home () {

    let [loading, SetLoading] = useState(true);
    let [meetings, SetMeetings] = useState([]);

    

    useEffect(
        () => { 
        fetch ('https://aid-meet-default-rtdb.firebaseio.com/meetings.json').then(response => response.json()).then (data => {
        let meeting = [];
        // let meetings = [];

        for (let key in data) {
            let meeting = {
                id: key,
                ...data[key]
            }

            meetings.push(meeting) 
            console.log(meetings)
    }
            
            SetLoading(false);
            SetMeetings (meetings);
            
}
    )
        }, [],
      );




    

    return (
        <div >
            <h1 className={style.allmeetingsheader}>All Meetings</h1>
            <div className={loading? style.loading : style.d_none}>
                Loading...
            </div>

            <div className= {style.meetingcardoverallcontainer}>

                {meetings.map((meeting)=>{
                return <Meetingcard title= {meeting.title} img= {meeting.image} desc= {meeting.desc}/>

            })}

            </div>
            
        </div>
    )
}

export default Home;