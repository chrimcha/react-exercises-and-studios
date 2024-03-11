export default function HobbyLinks() {
    let hobbyLinks = ["https://www.theartcoop.com/", "https://www.hobbii.com/", "https://www.candlescience.com/"];

    return (
        <div>
            <h4>My Hobbies</h4>
            <a href = {hobbyLinks[0]}> The Art Coop </a>
            <a href = {hobbyLinks[1]}> Hobbii </a>
            <a href = {hobbyLinks[2]}> CandleScience </a>
        </div>
    );
 }