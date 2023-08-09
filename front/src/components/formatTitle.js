import "../App.css"

const Format = ({formatOne, formatTwo})=> {

return(
    <section className="service-portrait">
    <p className="text">{formatOne}</p>
    <p className="text">|</p>
    <p className="text">{formatTwo}</p>
   </section> 
)

}

export default Format