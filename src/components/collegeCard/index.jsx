function CollegeCard(props) {
    

    return (
        <div style={{padding: "20px", border: "1px solid #f3f3f3", backgroundColor:"#F8F9F9",
                    boxShadow:"2px 10px 20px #f2f2f2", cursor: "pointer",height:'200px'}} 
            onClick={props.onCardClick}>
            <div><strong>College Name:</strong>{props.name}</div>
            <div><p><strong>Country:</strong>{props.country}</p></div>
        </div>
    )
}

export default CollegeCard;