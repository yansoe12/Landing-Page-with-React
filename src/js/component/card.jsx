import React from "react";


const Card=()=>{
    return (
        <div className="card d-flex content-align-center" style={{width: "18rem"}}>
          
            <img src="https://cdn.pixabay.com/photo/2022/10/29/19/21/golden-eagle-7555959_1280.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem, voluptate voluptates esse aspernatur nesciunt consequuntur, minus quam laboriosam, at dolorum a! Facere dicta in necessitatibus quod quae magni libero.</p>
                <a href="https://en.wikipedia.org/wiki/Bird_migration" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}


export default Card;