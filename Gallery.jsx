import { useState } from "react"

function Gallery(props){
    const [image, setImage] = useState();
    const  [newImage, setnewImage] = useState()
    return(
       <div className="Gallery-container">
        <div className="Card">
            <div className="upDdev">
            <img src="WhatsApp Image 2024-07-25 at 14.00.56 (2).jpeg" alt="" className="myImage"/>
            <p className="ImageName"></p>
            <p><a href="" className="link">{props.imageName}</a></p>
            </div>
            <div className="middleDdev">
            <p className="paragraph">Views: {props.views} </p>
            <p className="paragraph">Downlods: {props.downloads}</p>
            <p className="paragraph">Likes: {props.likes}</p>
            </div>
            <div className="downDdev">
            <button className="categories"><a href="#">#land</a></button>
            <button className="categories"><a href="#">#Scare</a></button>
            <button className="categories"><a href="#">#Nature</a></button>
            </div>
        </div>
       </div>
    )
}
export default Gallery