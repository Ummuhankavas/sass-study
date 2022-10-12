

const Card = ({data}) => {
  return (
    <div className="container">
      {data.map((item)=> {
        const{id,job,img,name,comment}= item
        return(
          <div>
            
          </div>
        )
      } )}
      </div>
  )
}

export default Card