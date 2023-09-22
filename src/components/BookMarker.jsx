import "../style/BookMarker.css"

function BookMarker(props) {
    return(
        <div className="book-marker">
            <p>{props.icon}</p>
            <p>{props.title}</p>
        </div>
    )
}

export default BookMarker;