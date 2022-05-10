import React, {useState, useEffect} from "react";
import DatingCard from 'react-tinder-card';
import "./ProfileCards.css";
import axios from './axios';


function ProfileCards() {
    const [people, setPeople] = useState([
        {
            name: "Megan",
            flag: "I eat my own toenails"
        },
        {
            name: "Meghan",
            flag: "I eat your toenails"
        },
        {
            name: "Meagen",
            flag: "I am a catperson"
        },
        {
            name: "Meg",
            flag: "I love the Denver Broncos"
        }]);


    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");

            setPeople(req.data);
        }

        fetchData().then(r => console.log(r));
    }, []);

    console.log(people);
    const swiped = (direction, nameToDelete) => {
        console.log("receiving " + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen!!")
    }

    return (
        <div className="datingCards">
            <div className="datingCards__container">
                {people.map((person) => (
                    <DatingCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)} >
                        <div className="card">
                            <span className="flag-text">{person.flag}</span>
                            <h3>{person.name}</h3>
                        </div>
                    </DatingCard>
                ))} </div>
        </div> )
}
export default ProfileCards;