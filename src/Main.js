import food from "./Assets/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg";
import {Link} from "react-router-dom";
const Main  = () => {
    return <main>
        <section>
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/Booking"><button aria-label="On Click"> Reserve Table</button></Link>
            </article>

            <article>
                <img src={food} alt="Main" />
            </article>
        </section>
    </main>
}
export default Main;