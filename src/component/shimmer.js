export const Shimmer = ()=>{
    return (
      <>

<h1>Loading.....</h1>

<div className="shimmer">
{Array.from({ length: 15 }, (_, index) => (
        <div key={index} className="box"></div>
      ))}
   
    
</div>
      </>
        
    )

}