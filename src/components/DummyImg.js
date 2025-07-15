const DummyImg = () =>{
    const width = 300
    const height = 160
    const bgColor = "028500"
    const text = "Movie Title"
    const textColor = "ffffff"

    const url = `https://dummyimg.vercel.app/${width}x${height}/${bgColor}/${textColor}/png?text=${encodeURIComponent(text)}&fontsize=`

 return (
        <img src={url} alt={text} />
    )
}

export default DummyImg


