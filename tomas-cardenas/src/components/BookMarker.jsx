import "../style/BookMarker.css"

function BookMarker(props) {
    return(
        <section className="book-marker" id={props.id}>
            <p>{props.icon}</p>
            <p>{props.title}</p>
        </section>
    )
}

export default BookMarker;