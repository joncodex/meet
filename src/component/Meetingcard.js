import style from '../pages/Home.module.css'


function Meetingcard(props) {
    return (
        <div className={style.meetingcardoverallcontainer}>

            <div className={style.meetingcard}>

                
                <img className= {style.meetingcardimg} src= {'https://source.unsplash.com/1600x800/?'+props.img} alt='pic' />
                <div className={style.meetingcardtext}> <h2>{props.title}</h2> <p className={style.meetingcarddesc}> {props.desc}</p></div>
                
            
            </div>


        </div>
    )
};

export default Meetingcard;