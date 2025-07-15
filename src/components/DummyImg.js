const DummyImg = () =>{
    const width = 300
    const height = 160
    const bgColor = "00235c"
    const text = "Movie Title"
    const textColor = "ffffff"

    const url = `https://dummyimg.vercel.app/${width}x${height}/${bgColor}/${textColor}/png?text=Movie%20title&fontsize=`

 return (
        <img src={url} alt="" />
    )
}

export default DummyImg



// https://dummyimg.vercel.app/300x160/00235c/ffffff/png?text=Movie%20title&fontsize=