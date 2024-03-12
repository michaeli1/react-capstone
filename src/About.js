import food from "./Assets/96de1a8e84d5b60e17f4e8a752e3825e17a622bf.jpg";
const About  = () => {
    return <main>
        <section>
            <article>
                <h1>Little Lemon</h1>
                <h2> Chicago</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vitae tempor nunc. Sed ac hendrerit ante. Proin gravida, felis quis pulvinar sodales, lorem nulla dictum neque, et posuere purus mauris nec sapien. Aliquam erat volutpat. Curabitur arcu lacus, ullamcorper non maximus pretium, efficitur auctor risus. Nullam ut fringilla nisi. Praesent dui sapien, faucibus luctus ornare at, finibus suscipit nisi. Pellentesque nec ex eu lectus tristique luctus eu a risus. Mauris vehicula sodales nunc blandit vestibulum. Aliquam varius eu ante luctus tempus. Donec eros enim, lobortis sit amet turpis sit amet, elementum volutpat nunc.
                </p>
            </article>
            <article>
                <img src={food} alt="Main" />
            </article>
        </section>
    </main>
}
export default About;