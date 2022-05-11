import React from "react";
import ProfileCards from "./ProfileCards";
import SwipeButtons from "./components/SwipeButtons";
import Header from "./Header.js";
function SwipingScreen() {

    return (
<div>
    <Header></Header>
    <ProfileCards></ProfileCards>
    <SwipeButtons></SwipeButtons>
</div>
    )
}
export default SwipingScreen;