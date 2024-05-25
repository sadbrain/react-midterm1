export default function Card({name, image, hobbies, gender, className}){
    return (        
    <div className="card">
        <img src={image.src} alt={image.alt} />

        <h4>{name}</h4>
        <h5>{className}</h5>
        <h6>Gender: {gender}</h6>
        <p>
        {hobbies.map((h, i) => (<span key={i}>{h} </span>))}
        </p>
    </div>
        )
}