import React from 'react';

import './style.css'

export default function MediaControlCard(props) {
    if(props.data.bal){
        var card= props.data.foire.map(function(foire){
          var image= foire.image;
          console.log("lll",image)
return <div className="container">
  <div className="blog-posts">
    <div className="post featured">
      <a href="#">
        <div className="image" style={{backgroundImage: "url("+ image +" )"}}>
          {/* <div className="time">
            <div className="date">04</div>
            <div className="month">APR</div>
          </div> */}
        </div>
        <div className="content">
            <h2 className="name" style={{marginBottom:"2px"}}>{foire.name}</h2>
          <h4 className="ville">{foire.ville}</h4>
          <span style={{display:"flex"}}>

<span style={{display:"flex",flexDirection: "column",marginLeft:"20px",marginRight:"20"}}>
    <span style={{fontSize:"15px",fontWeight:"bold"}} >{foire.jour}</span>
    <span style={{fontSize:"30px",color:"red"}}>{foire.date}</span>
    <span style={{fontSize:"15px",fontWeight:"bold"}}>{foire.moi} {" "}{foire.annee}</span>
    <span style={{fontSize:"15px",fontWeight:"bold",color:"red"}}>{foire.heure}</span>
</span>

<div className="vl"></div>
{/* adress */}
<span style={{display:"flex",flexDirection: "column",marginLeft:"10px",marginRight:"10px"}}>
    <span id="lieu">{foire.lieu}</span>
    <span style={{color:"black"}}>{foire.adresse}</span>
{/* <span style={{fontSize:"20px",color:"green"}}>Admin:</span><span style={{fontSize:"30px",color:"green"}}>{foire.admin}</span>
<span style={{fontSize:"20px",color:"green"}}> a l'avance</span> */}
 </span>
</span>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas illo tempore at eveniet adipisci harum error deserunt in sint aspernatur magni asperiores explicabo corporis ratione praesentium illum magnam esse ipsa dignissimos quaerat perferendis dolor vero? Maiores hic modi optio eaque...</p> */}
          {/* <div className="meta">
            <div className="icon-comment">22 Comments</div>
            <ul className="tags">
              <li />
              <li />
            </ul>
          </div> */}
        </div>
      </a>
    </div>
  </div>
</div>
})
}
return (
    <div style={{background:"#E5E8E8"}}>
    {card}
    </div>
  );
}